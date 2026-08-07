# Decisions Log

## 2026-08-07 — Project filters derived from data
`Projects.jsx` previously hardcoded `['All', 'Production', 'Internship', 'Client', 'Research', 'Academic']`. The list drifted from the data: the `Hackathon` project (Nine Lives) had no filter, and `Production` rendered an empty grid after Solen was staged out.
Decision: derive filters from `projects.map(p => p.category)` with `'All'` prepended.
Why: single source of truth — a new category automatically gets a filter, and an empty category disappears until real content exists.

## 2026-08-07 — Single `tech` array per project
Projects carried two tech lists: top-level `tech` (cards) and `detail.techStack` (modal). They had already drifted apart per project.
Decision: collapse into one `tech` array (full stack); cards slice to 5, modal renders all.
Why: removes a duplicated-source-of-truth bug class with no downside at this scale.

## 2026-08-07 — Solen staged in `forfuture.js`, not rendered
Solen's `live` link was a placeholder (`https://...`) because deployment is blocked and the product isn't ready.
Decision: remove from `projects.js`, keep in `forfuture.js` (a staging file nothing imports).
Why: no dead links or unfinished work on the live portfolio; the WIP stays nearby for a fast return when ready.

## 2026-08-07 — Accessibility pass (cards + modal)
Project cards were focusable but not keyboard-activatable; the modal had no dialog semantics or focus management.
Decision: add Enter/Space handling to cards; give the modal `role="dialog"`, `aria-modal`, a focus trap, and focus restore on close.
Why: functional keyboard support was a real gap, not a polish issue.

## 2026-08-07 — Reveal hidden state gated on `.js`
Scroll-reveal content started at `opacity: 0` unconditionally; without JS the page text was invisible.
Decision: only hide `.reveal` content under `html.js` (class added by the pre-hydration inline script).
Why: progressive-enhancement guard; costs ~3 lines.

## 2026-08-07 — Z-index tokens
Layer values were magic literals (`90`, `1000`, `2000`, `2001`, `9999`), and the noise overlay (9999) sits above every other layer.
Decision: expose `--z-*` custom properties in `:root` and reference them.
Why: future overlays need a documented place in the stack, not a guess above 9999.

## 2026-08-07 — Lint gate in CI
`deploy.yml` built without running the (already configured) ESLint setup.
Decision: `npm run lint` runs before `npm run build` on every push.
Why: lint failures were shipping silently.

## Prior decisions (implicit in code, now recorded)
- **Single-page, no-router**: the portfolio is one long page navigated by anchors. Chosen because it fits the content, and subpath routing on GitHub Pages adds complexity. Trade-off: project details aren't deep-linkable.
- **Content as static data modules**: components are thin presenters over `src/data/*.js`. Chosen for solo-maintainability.
- **Single global stylesheet** with CSS custom properties + `data-theme` light/dark: proportionate for this scale vs. introducing a CSS architecture.
- **GitHub Pages at `/portfolio/` subpath** (`base` in `vite.config.js`): free static hosting for a project site. All asset references must respect `BASE_URL` (e.g. CV download uses `import.meta.env.BASE_URL`).
