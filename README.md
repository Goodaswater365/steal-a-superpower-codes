# Steal a Superpower — Codes Finder

A community-made, mobile-friendly tool to search, filter and copy game codes.

**[Open the Codes Finder](https://goodaswater365.github.io/steal-a-superpower-codes/)**

## Game Wiki

- **[Steal a Superpower Wiki — Home](https://stealasuperpowerwiki.com/)**
- **[Codes guide — Latest codes and redeeming help](https://stealasuperpowerwiki.com/codes)**

## Features

- Search codes and rewards
- Filter by Active or Expired
- Copy active codes with one click
- Mobile-friendly design
- Quick link to the Wiki's codes guide

> **Demo content:** The codes presently shown in this repository are fictional `DEMO-*` examples, not redeemable game codes. Replace these with verified codes before sharing as a real code directory.

## Update game codes

Edit `codes.json` to add verified codes. Use `"status": "active"` or `"status": "expired"`. If no codes have been verified, use `[]`.

Example structure (illustrative, **not a real code**):

```json
[
  { "code": "REPLACE_WITH_VERIFIED_CODE", "reward": "Describe reward", "status": "active" }
]
```

Edit `config.json` to change the game title, Wiki codes guide URL, last verification date and demo flag. Set `demoMode` to `false` only after removing every demo code.

## GitHub Pages deployment

This project is hosted at [GitHub Pages](https://goodaswater365.github.io/steal-a-superpower-codes/). The repository is published from the `main` branch, `/ (root)` directory.

To deploy a copy: select **Settings → Pages → Deploy from a branch → main → / (root)**.

## Files

- `index.html` — page markup
- `style.css` — visual design and responsive layout
- `app.js` — search, filtering, copy and data loading
- `codes.json` — code list
- `config.json` — title, Wiki link, date and demo flag

## Disclaimer

This is an independent community project and is not affiliated with the game's developers. Codes can expire without notice. Never share account credentials.
