# Adam Cieślak — CV

A responsive, bilingual (English / Polish) online CV, deployable on GitHub Pages.

🔗 **Live site:** https://acieslak333.github.io/adam-cieslak-cv.github.io/

## Features
- 📱 Responsive layout — single-column on mobile, two-column sidebar on desktop
- 🌐 Language switch (EN / PL) with preference saved in the browser
- ⬇️ Download button — export as **PDF** (default) or **PNG**, in the selected language
- 🖨️ Print-optimised stylesheet (graceful fallback to the browser print dialog)
- 🎨 Design mirrors the LaTeX source (navy sidebar, blue accents)

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
