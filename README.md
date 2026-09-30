# Semantic Two — Noir v2

Static one-page website for `semantictwo.com`, built around the supplied Semantic artwork.

## Structure
- `index.html`
- `styles.css`
- `script.js`
- `assets/` — optimized copies of the supplied images

## Preview locally
Just open `index.html` in a browser.

Or in PowerShell:
```powershell
cd path\to\semantictwo-noir-v2
python -m http.server 8000
```
Then open `http://localhost:8000`.

## GitHub
Create a repo named `semantictwo`, upload the contents of this folder, and commit.

## Cloudflare Pages
- Framework preset: None
- Build command: leave blank
- Build output directory: `/`

Then connect `semantictwo.com` as the custom domain.
