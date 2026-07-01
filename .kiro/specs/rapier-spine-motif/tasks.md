# Implementation Plan: Rapier Spine Motif

## Overview

This plan implements the Rapier Spine Motif as an incremental, test-driven build. It starts by
standing up the test tooling (vitest + fast-check + jsdom), then builds the pure geometry/logic
module in isolation and validates it against all seven correctness properties, then builds the
`RapierSpine` React component (desktop spine, scroll-linked draw, resize/media-query handling,
mobile fallback) with example-based unit tests, adds the supporting CSS using existing tokens, and
finally wires everything into `App.jsx`, removes the old `NodeNetwork` motif from `Hero.jsx`, and
deletes the orphaned source files. Each step builds on the previous one and ends integrated into the
page with build/lint smoke checks.

The pure logic is built and tested before the component so property failures surface early, and the
component is wired into `App` last so there is no orphaned code.

## Tasks

- [x] 1. Set up test tooling (vitest + fast-check + jsdom)
  - Add `vitest`, `fast-check`, `jsdom`, `@testing-library/react`, and `@testing-library/jest-dom`
    as devDependencies
  - Add a `test` script using single-run mode (`vitest run`) — not watch mode
  - Configure `vite.config.js` (or a `vitest.config.js`) with `test.environment: 'jsdom'`,
    `globals: true`, and a setup file registering `@testing-library/jest-dom`
  - Verify the runner executes with a trivial placeholder test, then remove the placeholder
  - _Requirements: 8.5, 8.6_

- [x] 2. Implement the pure geometry/logic module
  - [x] 2.1 Implement scalar logic helpers in `src/components/rapierSpine.geometry.js`
    - Implement `computeScrollProgress(scrollY, docHeight, viewportHeight)` returning a value
      clamped to `[0, 1]`, returning `0` when `docHeight - viewportHeight <= 0` (guard divide-by-zero)
    - Implement `progressToDashoffset(progress, pathLength)` mapping progress `0 -> pathLength` and
      `1 -> 0`, monotonically non-increasing, result clamped to `[0, pathLength]`, returning `0` when
      `pathLength` is `0`
    - Implement `resolveViewportMode(width, breakpoint)` returning `'mobile'` iff `width <= breakpoint`
    - Implement `resolveMotionMode(prefersReduced)` returning `'static'` iff `prefersReduced` is true
    - _Requirements: 5.1, 5.2, 5.3, 5.4, 6.1, 6.3, 7.1, 7.2, 7.3_

  - [x] 2.2 Write property test for scroll-to-dashoffset mapping
    - **Property 1: Scroll-linked draw is a monotonic mapping with correct endpoints**
    - **Validates: Requirements 5.1, 5.2, 5.3, 5.4, 7.2**
    - Tag: `// Feature: rapier-spine-motif, Property 1: Scroll-linked draw is a monotonic mapping with correct endpoints`
    - Use `fast-check` with `{ numRuns: 100 }`; generate `pathLength >= 0` and pairs `a <= b` in `[0,1]`

  - [x] 2.3 Write property test for viewport-mode boundary
    - **Property 6: Viewport mode switches exactly at the breakpoint**
    - **Validates: Requirements 6.1, 6.3**
    - Tag: `// Feature: rapier-spine-motif, Property 6: Viewport mode switches exactly at the breakpoint`
    - Generate `width >= 0` and `breakpoint > 0`, including values at/around the breakpoint; `{ numRuns: 100 }`

  - [x] 2.4 Write property test for motion-mode resolution
    - **Property 7: Motion mode is a total function of the motion preference**
    - **Validates: Requirements 7.1, 7.3**
    - Tag: `// Feature: rapier-spine-motif, Property 7: Motion mode is a total function of the motion preference`
    - Generate booleans for `prefersReduced`; `{ numRuns: 100 }`

  - [x] 2.5 Implement `buildSpineGeometry` and the fixed part sequence
    - Add `SectionRect` / `PartAnnotation` / `SpineGeometry` shapes and the fixed top→bottom part
      sequence (hero→pommel, about→grip, projects→guard, philosophy/timeline/skills/contact→blade
      regions ending at the point)
    - Implement `buildSpineGeometry(sections, width, docHeight)` producing `height === docHeight`,
      anchors within `[0, docHeight]` (hero anchor in top region, contact anchor in bottom region),
      annotations in fixed canonical order with non-decreasing `y`, each annotation `y` within its
      section bounds and `x` within `[0, width]`, part tokens covering `{pommel, grip, guard, blade}`,
      the `pathD` string, and measurement ticks
    - Skip any `sectionId` missing from input without throwing (fail-safe)
    - _Requirements: 2.2, 2.4, 2.5, 3.3, 3.5, 4.1, 4.2, 4.3, 4.4_

  - [x] 2.6 Write property test for spine extent
    - **Property 2: Spine extent matches the document and section span**
    - **Validates: Requirements 2.2, 2.5**
    - Tag: `// Feature: rapier-spine-motif, Property 2: Spine extent matches the document and section span`
    - Generate ordered `SectionRect` lists (hero first, contact last, `height > 0`, strictly
      increasing `top`) and `docHeight >= contactBottom`; `{ numRuns: 100 }`

  - [x] 2.7 Write property test for fixed anatomical order
    - **Property 3: Anatomical parts follow a single fixed top-to-bottom order**
    - **Validates: Requirements 2.4, 4.4**
    - Tag: `// Feature: rapier-spine-motif, Property 3: Anatomical parts follow a single fixed top-to-bottom order`
    - Assert annotations follow the canonical sequence with non-decreasing anchor `y`; `{ numRuns: 100 }`

  - [x] 2.8 Write property test for annotation placement
    - **Property 4: Each annotation is validly and non-intrusively placed**
    - **Validates: Requirements 4.1, 4.2, 4.3**
    - Tag: `// Feature: rapier-spine-motif, Property 4: Each annotation is validly and non-intrusively placed`
    - Assert each annotation's `sectionId` exists in input, `y` within its section bounds, `x` within
      `[0, width]`; `{ numRuns: 100 }`

  - [x] 2.9 Write property test for required part tokens
    - **Property 5: Required rapier part tokens are always present**
    - **Validates: Requirements 3.5**
    - Tag: `// Feature: rapier-spine-motif, Property 5: Required rapier part tokens are always present`
    - Assert emitted part-token set is a superset of `{pommel, grip, guard, blade}`; `{ numRuns: 100 }`

  - [x] 2.10 Write example-based unit tests for geometry edge cases
    - Cover `docHeight <= viewportHeight` (progress clamps to 0), `pathLength === 0` (dashoffset 0),
      and a missing `sectionId` (skipped, no throw)
    - _Requirements: 2.5, 5.2, 5.3_

- [x] 3. Checkpoint - Ensure all geometry tests pass
  - Ensure all tests pass, ask the user if questions arise.

- [x] 4. Add RapierSpine styles to `src/index.css`
  - Add `.rapier-spine` layer rules: `position: absolute; top: 0; z-index: 0; pointer-events: none;`,
    column width `clamp(160px, 18vw, 280px)`, and opacity in `(0, 0.5]` (e.g. `0.32`)
  - Style paths as `fill: none` with a single-weight stroke using `var(--accent)`; label text uses
    `var(--font-mono)` with `var(--accent)`; hairline feel from `var(--border)`
  - Add the mobile-fallback rule (contained emblem, no full-height line, no horizontal overflow) and
    the `main { position: relative; z-index: 1; }` rule so content layers above the spine
    (use only existing Design_Tokens — no new hard-coded color/font literals)
  - _Requirements: 2.3, 2.7, 3.1, 3.2, 3.4, 3.6, 3.7, 6.2, 6.4, 8.2_

- [x] 5. Implement the RapierSpine component
  - [x] 5.1 Implement desktop spine render and measurement in `src/components/RapierSpine.jsx`
    - Create the component with props (`sectionIds`, `mobileBreakpoint=768`, `maxOpacity=0.32`,
      `columnWidth`) defaulting so `<RapierSpine />` works with no props
    - Measure `documentElement.scrollHeight` and section rects, call `buildSpineGeometry`, and render
      an `aria-hidden="true"` container with an svg (`focusable="false"`, `role="presentation"`)
      containing the spine path, measurement ticks, and monospace part-annotation labels
    - Guard against unmeasured/degenerate state (render zero-length/nothing until first measurement)
    - _Requirements: 2.1, 2.3, 2.6, 3.1, 3.3, 3.4, 3.5, 8.1_

  - [x] 5.2 Implement scroll-linked progressive draw
    - Compute `pathLength` via `getTotalLength()` (treat unavailable/0 as 0), set `stroke-dasharray`
      to path length, and drive `stroke-dashoffset` from `progressToDashoffset(computeScrollProgress(...))`
    - Attach a passive, rAF-throttled `scroll` listener that performs a single `stroke-dashoffset`
      write per frame (no layout-triggering reads/writes in the hot path)
    - _Requirements: 5.1, 5.2, 5.3, 5.4, 5.6_

  - [x] 5.3 Implement resize and media-query handling
    - Re-measure and rebuild geometry on `ResizeObserver`(body) and window `resize` (debounced to a
      trailing frame); fall back to `resize`-only if `ResizeObserver` is unsupported
    - Read `matchMedia('(prefers-reduced-motion: reduce)')` and `matchMedia('(max-width: 768px)')`
      via `resolveMotionMode`/`resolveViewportMode`; default to desktop + animated when `matchMedia`
      is unavailable; react to `change` events
    - On `static`, set `stroke-dashoffset = 0` (fully drawn) and detach the scroll listener; on
      `animated`, re-attach; register all listeners in `useEffect` and clean them up on unmount
    - _Requirements: 2.5, 5.5, 6.3, 7.1, 7.2, 7.3, 7.5_

  - [x] 5.4 Implement the mobile fallback presentation
    - When `resolveViewportMode` is `'mobile'`, render a small contained schematic emblem (static, no
      scroll linkage) that does not span full page height and stays within viewport width, preserving
      `var(--accent)` stroke and `fill: none` line-art treatment
    - _Requirements: 6.1, 6.2, 6.4_

  - [x] 5.5 Write unit tests for RapierSpine rendering and behavior
    - Desktop render: one spine path; container `aria-hidden="true"`, svg `focusable="false"`;
      `fill: none` with stroke width; stroke references `var(--accent)`; label uses `var(--font-mono)`;
      at least one measurement tick
    - Layering/opacity: `pointer-events: none` and `0 < opacity <= 0.5`
    - Reduced-motion: renders fully drawn (`stroke-dashoffset: 0`), no scroll listener attached, no
      global animation toggling
    - Hot-path discipline: scroll handler writes only `stroke-dashoffset`
    - Mobile fallback: at mobile width no full-height single vertical line; footprint within viewport
      width; still uses `var(--accent)` stroke with `fill: none`
    - Decorative-contrast branch: layer is `aria-hidden` (satisfies Req 7.4 hidden branch)
    - _Requirements: 2.1, 2.3, 2.6, 2.7, 3.1, 3.2, 3.4, 3.6, 5.6, 6.1, 6.2, 6.4, 7.1, 7.2, 7.4, 7.5_

- [x] 6. Checkpoint - Ensure component tests pass
  - Ensure all tests pass, ask the user if questions arise.

- [x] 7. Integrate into the page and remove the old motif
  - [x] 7.1 Remove NodeNetwork usage from `src/components/Hero.jsx`
    - Remove the `import NodeNetwork from './NodeNetwork'` and the `<NodeNetwork />` usage inside
      `.hero-atmosphere`, leaving the container as an empty decorative slot
    - Leave all other Hero markup (eyebrow, title, sub, both action buttons, all three
      `hero-timeline` domain items) byte-for-byte unchanged
    - _Requirements: 1.1, 1.2, 1.4_

  - [x] 7.2 Mount RapierSpine once in `src/App.jsx`
    - Import and render a single `<RapierSpine />` as a sibling of `<main>` (behind content), and
      confirm `main` layers above via the CSS added in task 4
    - _Requirements: 2.1, 8.3, 8.4_

  - [x] 7.3 Delete orphaned NodeNetwork source files
    - After confirming no `src/` module references `NodeNetwork`, delete
      `src/components/NodeNetwork.jsx` and `src/components/NodeNetworkStatic.jsx`
    - _Requirements: 1.3_

  - [x] 7.4 Write integration unit tests for App/Hero
    - App renders exactly one `RapierSpine` instance and it is present in output
    - Hero renders without the old NodeNetwork svg but retains eyebrow, title, sub, both buttons, and
      all three domain items; a `Reveal`-wrapped element still receives `.visible` with the spine mounted
    - _Requirements: 1.1, 1.4, 5.5, 8.3, 8.4_

- [x] 8. Final checkpoint - Verify build, lint, and no orphaned references
  - Run `npm run build` (Vite) and confirm it completes successfully
  - Run `npm run lint` and confirm no new errors
  - Search `src/` to confirm no remaining `NodeNetwork` references
  - Ensure all tests pass, ask the user if questions arise.
  - _Requirements: 1.3, 8.5, 8.6_

## Notes

- Tasks marked with `*` are optional test sub-tasks and can be skipped for a faster MVP, but they
  validate the correctness properties (P1–P7) and rendering/integration facts.
- Each task references specific granular requirements for traceability.
- Property-based tests use `fast-check` + `vitest` with `{ numRuns: 100 }`, exactly one property
  test per correctness property, each tagged `// Feature: rapier-spine-motif, Property {n}: ...`.
- Automated tests run in single-run mode (`vitest run`); dev-server/build-watch commands are run
  manually by the developer.
- Checkpoints ensure incremental validation before moving to the next layer.

## Task Dependency Graph

```json
{
  "waves": [
    { "id": 0, "tasks": ["1"] },
    { "id": 1, "tasks": ["2.1", "2.5", "4"] },
    { "id": 2, "tasks": ["2.2", "2.3", "2.4", "2.6", "2.7", "2.8", "2.9", "2.10"] },
    { "id": 3, "tasks": ["5.1"] },
    { "id": 4, "tasks": ["5.2", "5.3", "5.4"] },
    { "id": 5, "tasks": ["5.5", "7.1"] },
    { "id": 6, "tasks": ["7.2", "7.3"] },
    { "id": 7, "tasks": ["7.4"] }
  ]
}
```
