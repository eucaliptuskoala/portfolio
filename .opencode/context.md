# Project Context

## Summary
Ivan Bodnar's personal portfolio — a single-page static site (React 19 + Vite) presenting projects, engineering philosophy, education, skills, and contact. Deployed to GitHub Pages at `/portfolio/`.

## Current state
- 8 projects across 5 categories (Hackathon, Internship, Client, Research, Academic), driven entirely by `src/data/projects.js`.
- Project filters are derived from data (`Projects.jsx`), not hardcoded.
- Each project has a single `tech` array (card shows top 5, modal shows all).
- Project details open in a modal with dialog semantics + focus management.
- Solen is staged in `src/data/forfuture.js`, NOT rendered. It returns to `projects.js` only when it ships (replace its `https://...` placeholder with the real URL).

## Next steps
- When Solen is ready: move it from `forfuture.js` to `projects.js`, fix the `live` link, re-deploy.
- Optional backlog (accepted risk, not scheduled): refactor the auto-grid `:has()` child-count heuristics; extract a shared `Icon` primitive (SVGs are duplicated across Contact/Modal); no test suite by design (static content site — lint + build in CI is the gate).

## Conventions
- Content lives in `src/data/*.js` — components are thin presenters.
- Not-ready projects live in `forfuture.js`; nothing imports it.
- Deploys on push to `main` (see `.github/workflows/deploy.yml`, includes `npm run lint`).
- Color tokens live in `:root` / `html[data-theme="light"]` in `src/index.css`; design history in `palettes.md`.
