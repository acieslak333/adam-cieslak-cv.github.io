# Adam Cieślak — CV

A responsive, bilingual (English / Polish) online CV, deployable on GitHub Pages.

🔗 **Live site:** https://acieslak333.github.io/adam-cieslak-cv.github.io/

## Features
- 📄 Ollama-inspired design language — one continuous paper-white sheet, single 720px reading column, pill geometry everywhere, hairline cards
- 🌿 Single **sage-green** accent carries every interactive element
- ⌨️ Signature install-snippet pill (copy-to-clipboard email) + a terminal mockup "preview"
- 🟢 One inverted surface (dark sage CTA strip) used exactly once, as the "look here" moment
- 🌐 Language switch (EN / PL) with preference saved in the browser
- ⬇️ Download button — export as **PDF** (default) or **PNG**; the hero CTA also downloads the PDF. Exports/print render as a clean document (web-only flourishes hidden)
- 🔗 Clickable publication links + social-preview card (Open Graph / Twitter) + favicon + `schema.org/Person` structured data
- ✨ Subtle scroll-reveal (respects `prefers-reduced-motion`)

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
