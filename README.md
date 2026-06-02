# Adam Cieślak — CV

A responsive, bilingual (English / Polish) online CV, deployable on GitHub Pages.

🔗 **Live site:** https://acieslak333.github.io/adam-cieslak-cv.github.io/

## Features
- 🍏 Apple-inspired design language — full-bleed alternating light/dark "tiles", tight display typography, two-row frosted nav, pill CTAs
- 🌿 Single **sage-green** accent carries every interactive element
- 📱 Fully responsive — single-column tiles, collapsing sub-nav
- 🌐 Language switch (EN / PL) with preference saved in the browser
- ⬇️ Download button — export as **PDF** (default) or **PNG** in the active language. The PDF is a print-ready **2-page A4**: page 1 is a compact one-page CV, page 2 is the data-processing consent
- 🔗 Clickable publication links + rich social-preview cards (Open Graph / Twitter) + favicon + `schema.org/Person` structured data
- ✨ Subtle scroll-reveal on tiles (respects `prefers-reduced-motion`)
- 🖨️ Print stylesheet flattens dark tiles to ink-on-white

## Files
- `index.html` — page structure and content
- `styles.css` — styling (responsive + print)
- `script.js` — language switching and PDF/PNG export

## Local preview
Open `index.html` in a browser, or serve the folder:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Deployment (GitHub Pages)
In the repository **Settings → Pages**, set **Source** to *Deploy from a branch*
and choose **`main`** / `root`. The site is then served at:

```
https://acieslak333.github.io/adam-cieslak-cv.github.io/
```

> **Want a clean root URL** (`https://acieslak333.github.io/`)? Rename the repo to
> `acieslak333.github.io` — GitHub then treats it as your user site and serves it
> from the domain root.
