# Steal a Superpower — Codes Finder

An independent, mobile-friendly game code finder with **search**, **Active / Expired filtering**, **one-click copy**, and a **Wiki link**. Built with plain HTML, CSS and JavaScript. No backend, dependencies, or paid hosting needed.

> **IMPORTANT:** All `DEMO-*` codes in this template are **fictional examples**, not real redeemable codes. **Replace them before sharing the site.** The game name is a working assumption based on the Wiki domain; change it if necessary.

## Live tool

Once GitHub Pages is enabled, add your real link here:

**[Open Codes Finder](https://YOUR-USERNAME.github.io/steal-a-superpower-codes/)**

## Game Wiki

Add the **current, functioning Wiki URL** here: `https://YOUR-WIKI-DOMAIN.example/`

## Customize

1. Edit `codes.json` with **verified** game codes. Use `"status": "active"` or `"status": "expired"`. You can replace the sample list with `[]` until you have verified codes.
2. Edit `config.json`:
   - `gameName`: your game's title.
   - `wikiUrl`: your **live Wiki URL**, e.g. `https://your-real-domain.com/`. Empty string hides the Wiki links.
   - `updatedAt`: the date you verified the list, in `YYYY-MM-DD` format.
   - `demoMode`: set to `false` **only after** removing all demo codes.
3. Edit the README links above, replacing `YOUR-USERNAME` and the placeholder Wiki domain.
4. Commit the changes. GitHub Pages republishes from your source branch.

Example real-data structure (the values below are **illustrative only**):

```json
[
  { "code": "REPLACE_WITH_VERIFIED_CODE", "reward": "Describe reward", "status": "active" }
]
```

## Publish to GitHub Pages

1. Create a **public** GitHub repository named `steal-a-superpower-codes`.
2. Upload **the contents of this folder** (not the enclosing folder) to the repository's root so `index.html` is in the root.
3. Open **Settings → Pages → Build and deployment → Source: Deploy from a branch**.
4. Select **Branch: `main`**, **Folder: `/ (root)`**, then **Save**.
5. Once published, open `https://YOUR-USERNAME.github.io/steal-a-superpower-codes/`.

Official guide: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

## Local preview

Because browsers typically restrict `fetch()` on `file://` URLs, run a local server in this directory:

```bash
python3 -m http.server 8000
```

Visit http://localhost:8000 .

## Files

- `index.html`: page structure
- `style.css`: styling and mobile layout
- `app.js`: search, status filter, copy, rendering, and config loading
- `codes.json`: editable code list
- `config.json`: game title, Wiki link, update date, and demo flag

## Disclaimer

Community-made and not affiliated with the game developers. Codes may expire without notice. Never ask players for account credentials.
