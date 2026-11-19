'use strict';
const $ = (id) => document.getElementById(id);
const state = { codes: [], status: 'all', query: '', demo: false };
function showToast(message) {
  const node = $('toast'); node.textContent = message; node.classList.add('show');
  clearTimeout(showToast.timer); showToast.timer = setTimeout(() => node.classList.remove('show'), 2000);
}
function render() {
  const visible = state.codes.filter((item) =>
    (state.status === 'all' || item.status === state.status) &&
    (item.code + ' ' + item.reward).toLowerCase().includes(state.query)
  );
  $('totalCount').textContent = `${visible.length} shown · ${state.codes.length} total`;
  const list = $('codeList'); list.replaceChildren();
  if (!visible.length) {
    const empty = document.createElement('div'); empty.className = 'empty';
    empty.textContent = state.codes.length ? 'No matching codes found.' : 'No codes published yet. Check back soon!';
    list.append(empty); return;
  }
  for (const item of visible) {
    const card = document.createElement('article'); card.className = 'code-card';
    const main = document.createElement('div'); main.className = 'code-main';
    const name = document.createElement('div'); name.className = 'code-name'; name.textContent = item.code;
    const reward = document.createElement('div'); reward.className = 'code-reward'; reward.textContent = item.reward || 'Reward not specified';
    main.append(name, reward);
    const right = document.createElement('div'); right.className = 'card-right';
    const status = document.createElement('span'); status.className = `status ${item.status}`;
    status.textContent = item.status === 'active' ? '● Listed Active' : item.status === 'reported' ? 'Unverified' : 'Expired';
    const copy = document.createElement('button'); copy.className = 'copy'; copy.type = 'button'; copy.textContent = 'Copy';
    copy.disabled = item.status === 'expired'; copy.setAttribute('aria-label', `Copy ${item.code}`);
    copy.addEventListener('click', async () => {
      try { await navigator.clipboard.writeText(item.code); showToast('Code copied!'); }
      catch { showToast(`Copy manually: ${item.code}`); }
    });
    right.append(status, copy); card.append(main, right); list.append(card);
  }
}
async function start() {
  $('search').addEventListener('input', (event) => {state.query = event.target.value.trim().toLowerCase();render();});
  document.querySelectorAll('.filter').forEach((button) => button.addEventListener('click', () => {
    state.status = button.dataset.status;
    document.querySelectorAll('.filter').forEach((b) => { b.classList.toggle('active', b === button); b.setAttribute('aria-pressed', String(b === button)); });
    render();
  }));
  try {
    const [configResponse, codesResponse] = await Promise.all([fetch('./config.json'), fetch('./codes.json')]);
    if (!configResponse.ok || !codesResponse.ok) throw new Error('Failed to load data');
    const config = await configResponse.json(); const codes = await codesResponse.json();
    document.title = `${config.gameName || 'Game'} — Codes Finder`;
    $('demoWarning').hidden = true;
    if (/^\d{4}-\d{2}-\d{2}$/.test(config.updatedAt || '')) $('updatedAt').textContent = `Data reviewed: ${config.updatedAt}`;
    if (typeof config.wikiUrl === 'string' && /^https:\/\/[^\s]+$/.test(config.wikiUrl)) {
      for (const id of ['wikiTop', 'wikiBottom']) { const link = $(id); link.href = config.wikiUrl; link.hidden = false; }
    }
    if (!Array.isArray(codes)) throw new Error('codes.json must be an array');
    state.codes = codes.filter((item) => item && typeof item.code === 'string' && item.code.trim() && ['active','expired','reported'].includes(item.status))
      .map((item) => ({code: item.code.trim(),reward: String(item.reward || ''),status:item.status}));
    render();
  } catch (error) {
    $('totalCount').textContent = 'Could not load codes';
    $('codeList').textContent = 'Please run this project using a local web server or GitHub Pages. See README.md for setup.';
    console.error(error);
  }
}
start();
