# Portfolio

Ivan Bodnar — Software & AI Engineer. Making things that matter.

Personal portfolio: projects, engineering philosophy, education, skills, and contact. Single-page React app, content-driven, deployed to GitHub Pages.

## Stack

- React 19 + Vite
- Vanilla CSS (custom properties, light/dark themes) — no framework
- ESLint (flat config)
- GitHub Pages via GitHub Actions

## Content

All site content lives in `src/data/` — editing a data file is how you add a project, skill, or education entry. Components are thin presenters.

Not-ready projects are staged in `src/data/forfuture.js` (not rendered) until they ship.

## Development

```bash
npm install
npm run dev        # local dev server
npm run lint       # ESLint
npm run build      # production build to dist/
npm run preview    # preview the build
```

## Deploy

Push to `main`. `.github/workflows/deploy.yml` runs lint + build and deploys `dist/` to GitHub Pages. The site is served under the `/portfolio/` subpath (`base` set in `vite.config.js`), so asset URLs must use `import.meta.env.BASE_URL`.
