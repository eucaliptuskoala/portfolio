# Architecture

## Stack
- **React 19 + Vite** SPA, no router, no state library, no CSS framework.
- **Vite** build with `base: '/portfolio/'` (subpath deploy to GitHub Pages).
- **ESLint** (flat config) for linting; no test suite (by design).

## Structure
```
src/
  main.jsx          entry, StrictMode root
  App.jsx           composes all sections; no routing, anchor-link navigation
  index.css         single global stylesheet, token-driven
  components/       one file per section + shared primitives (Reveal, ThemeToggle, ScrollLine)
  data/             content as static JS modules (projects, skills, education, philosophy)
public/             static assets (favicon, CV PDF)
.github/workflows/  deploy.yml — build + lint on push to main
```

## Patterns
- **Content/data separation**: all copy lives in `src/data/`; components render it. Adding a project = editing one data file.
- **Thin presentational components**: sections are stateless aside from local UI state (filters, modal, theme).
- **`Reveal`** — reusable scroll-reveal wrapper (IntersectionObserver + above-the-fold fast path). Hidden state is gated on `.js` on `<html>` so content is visible without JS.
- **`ThemeToggle`** — `localStorage`-persisted; applied pre-hydration by an inline script in `index.html` to avoid FOUC. Light/dark via `html[data-theme]` overrides.
- **`ScrollLine`** — scroll progress line, rAF-batched updates, `aria-hidden`.
- **`ProjectModal`** — ephemeral state in `Projects.jsx` (`selected`), so project details are not deep-linkable (accepted trade-off of no router).

## Styling
- CSS custom properties for tokens (colors, fonts, spacing, easing, z-index).
- Z-index scale: `--z-scroll-line` 90, `--z-nav` 1000, `--z-modal` 2000, `--z-modal-close` 2001, `--z-noise` 9999.
- Auto-grid `.g` infers column counts from child counts via `:has()` — clever but brittle; section-specific caps guard the text-heavy sections.
- `prefers-reduced-motion` respected (CSS override).

## Accessibility
- Keyboard activation on project cards (Enter/Space).
- Modal: `role="dialog"`, `aria-modal`, focus trap, focus restore, Escape to close, body scroll lock.
