# Requirements Document

## Introduction

This feature replaces the existing generic `NodeNetwork` decorative element in the Hero section
with a distinctive signature motif: a single, long, technical-blueprint-style illustration of a
rapier (fencing sword). The rapier is rendered as a continuous vertical "spine" that runs the full
length of the page, acting as a visual through-line connecting all page sections (Hero, About,
Projects, Philosophy, Timeline, Skills, Contact).

The motif is drawn as thin, single-weight schematic line art in the site's muted gold accent color,
annotated with measurement ticks, callout labels, and part annotations (blade, quillon, hilt,
pommel) tied to nearby sections. The blade "draws itself" progressively as the user scrolls,
integrating with the site's existing scroll-reveal system. The design is thematically inspired
(not a literal copy) by the Apollo character from the game Deadlock, and reflects the site owner's
personal background as a martial artist.

The motif must feel native to the existing dark, warm, editorial aesthetic by reusing existing CSS
design tokens, must remain subtle enough not to compete with content, must degrade gracefully on
narrow screens where a full-height vertical sword is awkward, and must respect user motion
preferences for accessibility.

## Glossary

- **Portfolio_Site**: The React + Vite single-page portfolio application that hosts this feature.
- **Rapier_Spine**: The new decorative component rendering a schematic rapier as a vertical
  through-line spanning the full page height.
- **Node_Network**: The existing `NodeNetwork` / `NodeNetworkStatic` decorative SVG components in
  `src/components/`, currently rendered inside the Hero section, that this feature removes.
- **Page_Section**: One of the ordered content regions rendered in `src/App.jsx`: Hero, About,
  Projects, Philosophy, Timeline, Skills, Contact.
- **Spine_Path**: The continuous SVG path representing the rapier's central vertical line (blade
  through hilt to pommel) along which the illustration is drawn.
- **Blade_Draw_Animation**: The progressive scroll-linked animation that reveals the Rapier_Spine's
  stroke from top to bottom as the user scrolls the page.
- **Part_Annotation**: A schematic label naming a rapier component (Blade, Forte, Foible, Quillon,
  Guard, Grip, Pommel) positioned near an associated Page_Section.
- **Measurement_Tick**: A short perpendicular line-art mark evoking an engineering blueprint's
  dimension/scale markings along the Spine_Path.
- **Callout_Label**: Schematic text annotation rendered in the monospace font that describes a part
  or dimension of the rapier.
- **Reveal_System**: The site's existing scroll-reveal mechanism implemented by `Reveal.jsx` and the
  `.reveal` / `.reveal.visible` CSS classes in `src/index.css`.
- **Design_Tokens**: The existing CSS custom properties defined in `:root` in `src/index.css`,
  including `--accent`, `--bg`, `--border`, `--muted`, `--font-display`, `--font-body`,
  `--font-mono`.
- **Reduced_Motion_Mode**: The state in which the operating system or browser reports
  `prefers-reduced-motion: reduce`.
- **Mobile_Viewport**: A viewport whose width is at or below the site's mobile breakpoint, where a
  full-height vertical rapier illustration is considered visually awkward.
- **Desktop_Viewport**: A viewport whose width is above the mobile breakpoint.

## Requirements

### Requirement 1: Remove the existing Node Network motif

**User Story:** As the site owner, I want the generic node-network decoration removed, so that the
Hero no longer displays a placeholder visual that does not reflect my personal identity.

#### Acceptance Criteria

1. THE Portfolio_Site SHALL render the Hero section without the Node_Network component.
2. THE Portfolio_Site SHALL remove the import and usage of the Node_Network component from
   `src/components/Hero.jsx`.
3. WHERE the Node_Network source files (`NodeNetwork.jsx`, `NodeNetworkStatic.jsx`) are no longer
   referenced by any module, THE Portfolio_Site SHALL delete those source files.
4. THE Portfolio_Site SHALL preserve the Hero section's existing text content, action buttons, and
   domain-list markup unchanged after the Node_Network is removed.

### Requirement 2: Render the rapier as a full-page vertical spine

**User Story:** As a visitor, I want a single continuous sword motif running down the page, so that
the site feels cohesive and distinctive as I scroll.

#### Acceptance Criteria

1. THE Rapier_Spine SHALL render a single schematic rapier illustration oriented vertically along
   the page.
2. THE Rapier_Spine SHALL span from the top of the Hero section to the bottom of the Contact section.
3. THE Rapier_Spine SHALL render behind the Page_Section content so that section text and controls
   remain fully readable and interactive.
7. WHERE the Rapier_Spine overlaps Page_Section text areas, THE Rapier_Spine SHALL remain visible
   through those areas at reduced opacity or via a blend mode rather than being clipped or hidden.
4. THE Rapier_Spine SHALL order its anatomical parts along the vertical axis in a single fixed
   sequence from pommel-or-hilt to blade tip.
5. WHEN the page height changes due to responsive reflow or content changes, THE Rapier_Spine SHALL
   resize so that its total length continues to match the full scrollable page height.
6. THE Rapier_Spine SHALL render as a decorative element that is exposed to assistive technologies
   as non-content (for example, hidden from the accessibility tree or given an appropriate
   decorative role).

### Requirement 3: Technical blueprint visual treatment

**User Story:** As the site owner, I want the rapier drawn as an engineering blueprint, so that it
matches my editorial, technical aesthetic rather than looking like clip art.

#### Acceptance Criteria

1. THE Rapier_Spine SHALL render all illustration lines as single-weight stroked paths with no fill
   on the blade, hilt, and guard outlines.
2. THE Rapier_Spine SHALL render its strokes using the `--accent` Design_Token color.
3. THE Rapier_Spine SHALL render Measurement_Tick marks along the Spine_Path in the schematic style.
4. THE Rapier_Spine SHALL render Callout_Label text using the `--font-mono` Design_Token.
5. THE Rapier_Spine SHALL render Part_Annotation labels for the rapier components, including Blade,
   Guard-or-Quillon, Grip, and Pommel.
6. THE Rapier_Spine SHALL render at a reduced visual prominence, using opacity greater than 0.0 and
   at or below 0.5, so that it reads as a background motif rather than foreground content while never
   becoming fully invisible.
7. THE Rapier_Spine SHALL use only colors, fonts, and border styles derived from the Design_Tokens.

### Requirement 4: Section-anchored annotations

**User Story:** As a visitor, I want the sword's parts labeled next to relevant sections, so that
the motif feels intentional and connected to the content.

#### Acceptance Criteria

1. THE Rapier_Spine SHALL associate each Part_Annotation with a specific Page_Section.
2. WHILE a given Page_Section is within the viewport on a Desktop_Viewport, THE Rapier_Spine SHALL
   position that section's associated Part_Annotation adjacent to that section.
3. THE Rapier_Spine SHALL position each Part_Annotation so that it does not overlap the primary
   heading or body text of its associated Page_Section.
4. THE Rapier_Spine SHALL keep each Part_Annotation's anatomical order consistent with the fixed
   part sequence defined for the Spine_Path.

### Requirement 5: Scroll-linked progressive draw

**User Story:** As a visitor, I want the blade to draw itself as I scroll, so that the page feels
alive and rewards exploration.

#### Acceptance Criteria

1. WHILE Reduced_Motion_Mode is not active, THE Blade_Draw_Animation SHALL reveal the Spine_Path
   stroke progressively in proportion to the page scroll position.
2. WHEN the user has scrolled to the top of the page, THE Blade_Draw_Animation SHALL display only
   the topmost portion of the Spine_Path drawn.
3. WHEN the user has scrolled to the bottom of the page, THE Blade_Draw_Animation SHALL display the
   entire Spine_Path drawn.
4. WHEN the user scrolls upward, THE Blade_Draw_Animation SHALL reduce the drawn portion of the
   Spine_Path to match the current scroll position.
5. THE Blade_Draw_Animation SHALL integrate with the existing Reveal_System without altering the
   reveal behavior of existing Page_Section content.
6. WHILE the user is actively scrolling, THE Blade_Draw_Animation SHALL update the drawn length
   without producing visible stutter attributable to layout thrashing, by driving the animation
   through compositor-friendly stroke properties.

### Requirement 6: Mobile fallback

**User Story:** As a visitor on a phone, I want a graceful version of the motif, so that the layout
stays clean on a narrow screen.

#### Acceptance Criteria

1. WHILE the viewport is a Mobile_Viewport, THE Rapier_Spine SHALL render a fallback presentation
   that does not span the full page height as a single vertical line.
2. WHILE the viewport is a Mobile_Viewport, THE Rapier_Spine SHALL keep all Page_Section content
   fully readable without horizontal overflow, permitting content to be reorganized or condensed for
   the narrow layout as long as all information is preserved.
3. WHEN the viewport transitions between Mobile_Viewport and Desktop_Viewport widths, THE
   Rapier_Spine SHALL switch between the fallback presentation and the full-spine presentation.
4. WHILE the viewport is a Mobile_Viewport, THE Rapier_Spine SHALL preserve the accent color and
   schematic line-art treatment defined for the Desktop_Viewport presentation.

### Requirement 7: Motion and accessibility preferences

**User Story:** As a visitor sensitive to motion, I want animations disabled when I request reduced
motion, so that the site is comfortable to use.

#### Acceptance Criteria

1. WHILE Reduced_Motion_Mode is active, THE Blade_Draw_Animation SHALL be disabled.
5. WHILE Reduced_Motion_Mode is active, THE Rapier_Spine SHALL disable only the Blade_Draw_Animation
   and SHALL leave other Portfolio_Site animations, such as hover effects, unchanged.
2. WHILE Reduced_Motion_Mode is active, THE Rapier_Spine SHALL render the Spine_Path in a fully
   drawn static state.
3. IF the browser does not report a motion preference, THEN THE Rapier_Spine SHALL default to
   enabling the Blade_Draw_Animation.
4. THE Rapier_Spine SHALL maintain a color contrast for any Callout_Label text that meets or exceeds
   the WCAG 2.1 AA contrast ratio of 4.5:1 against the `--bg` Design_Token, OR SHALL expose that
   text as decorative and hidden from assistive technologies.

### Requirement 8: Native integration with existing design system

**User Story:** As the site owner, I want the motif to reuse my existing tokens and structure, so
that it stays maintainable and visually consistent.

#### Acceptance Criteria

1. THE Rapier_Spine SHALL be implemented as a React component under `src/components/`.
2. THE Rapier_Spine SHALL reference the `--accent`, `--bg`, `--border`, and font Design_Tokens
   rather than defining new hard-coded color or font literals for those roles.
3. THE Portfolio_Site SHALL mount the Rapier_Spine once so that a single instance spans all
   Page_Sections rather than one instance per section.
4. THE Portfolio_Site SHALL include a mounted Rapier_Spine component as a required element of the
   rendered page.
5. WHEN the Rapier_Spine is added, THE Portfolio_Site SHALL build successfully with the project's
   existing Vite build command.
6. WHEN the Rapier_Spine is added, THE Portfolio_Site SHALL produce no new linting errors under the
   project's existing ESLint configuration.
