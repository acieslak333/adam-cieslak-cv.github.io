# Adam Cieślak — CV

A responsive, bilingual (English / Polish) online CV, deployable on GitHub Pages.

## Features
- 📱 Responsive layout — single-column on mobile, two-column sidebar on desktop
- 🌐 Language switch (EN / PL) with preference saved in the browser
- 🖨️ "Save PDF" button (browser print) with a print-optimised stylesheet
- 🎨 Design mirrors the LaTeX source (navy sidebar, blue accents)

## Files
- `index.html` — page structure and content
- `styles.css` — styling (responsive + print)
- `script.js` — language switching and PDF export

## Local preview
Open `index.html` in a browser, or serve the folder:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Deployment (GitHub Pages)
In the repository settings → **Pages**, set the source to the branch root.
With a repo named `adam-cieslak-cv.github.io`, the site is served at
`https://<user>.github.io/`.
