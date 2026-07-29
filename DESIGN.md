---
name: The Agentic State
description: A literary, public-policy-grade visual system for an AI-and-government think tank. Editorial whitespace, italic Newsreader serif headlines, ultralight Inter body, and a single soft-lilac accent against pure white.
colors:
  background: "#ffffff"
  surface: "#ffffff"
  surface-muted: "#f9f9f9"
  surface-soft: "#f8f9fa"
  surface-tint: "#faf9ff"
  surface-code: "#f4f4f8"
  surface-accent-soft: "#d9d0ff"
  on-surface: "#000000"
  on-surface-variant: "#333333"
  on-surface-muted: "#666666"
  outline: "#eeeeee"
  outline-variant: "#e9e6ff"
  outline-code: "#e8e8ef"
  primary: "#a491fc"
  on-primary: "#ffffff"
  primary-hover: "#8b7ae8"
  primary-soft-fill: "rgba(164, 145, 252, 0.12)"
  inverse-on-primary: "#eeeeee"
  link: "#a491fc"
  link-hover: "#8b7ae8"
  footer-surface: "#a491fc"
  on-footer: "#ffffff"
typography:
  fontFamilies:
    serif: "Newsreader, Helvetica, sans-serif"
    sans: "Inter, Helvetica, sans-serif"
    mono: "ui-monospace, SFMono-Regular, Menlo, Consolas, 'Liberation Mono', monospace"
  hero-display:
    fontFamily: Newsreader
    fontSize: 5rem
    fontWeight: "350"
    fontStyle: italic
    lineHeight: "1"
    letterSpacing: "0"
  hero-title:
    fontFamily: Newsreader
    fontSize: 3rem
    fontWeight: "350"
    fontStyle: italic
    lineHeight: "1"
  hero-subtitle-lg:
    fontFamily: Inter
    fontSize: 2rem
    fontWeight: "200"
    fontStyle: normal
    lineHeight: "1.4"
    color: "{colors.primary}"
  hero-subtitle:
    fontFamily: Inter
    fontSize: 1.25rem
    fontWeight: "200"
    lineHeight: "1.4"
  section-title:
    fontFamily: Newsreader
    fontSize: 1.5rem
    fontWeight: "350"
    fontStyle: italic
    lineHeight: "1.2"
  section-body:
    fontFamily: Inter
    fontSize: 1.2rem
    fontWeight: "150"
    lineHeight: "1.4"
    color: "{colors.on-surface-variant}"
  body-base:
    fontFamily: Inter
    fontSize: 1.2rem
    fontWeight: "200"
    lineHeight: "1.5"
    color: "{colors.on-surface}"
  body-reader:
    fontFamily: Inter
    fontSize: 1rem
    fontWeight: "200"
    lineHeight: "1.65"
  reader-h1:
    fontFamily: Newsreader
    fontSize: 1.5rem
    fontWeight: "350"
    fontStyle: italic
    color: "{colors.primary}"
  reader-h2:
    fontFamily: Inter
    fontSize: 1.3rem
    fontWeight: "300"
    lineHeight: "1.3"
  reader-h3:
    fontFamily: Inter
    fontSize: 1.1rem
    fontWeight: "300"
    fontStyle: italic
  nav-link:
    fontFamily: Newsreader
    fontSize: 1.2rem
    fontWeight: "300"
    fontStyle: italic
  button-label:
    fontFamily: Newsreader
    fontSize: 1rem
    fontWeight: "350"
    fontStyle: italic
  card-title:
    fontFamily: Inter
    fontSize: 1.1rem
    fontWeight: "300"
    lineHeight: "1.3"
  card-meta:
    fontFamily: Inter
    fontSize: 0.9rem
    fontWeight: "200"
    lineHeight: "1.4"
    color: "{colors.on-surface-muted}"
  footer-text:
    fontFamily: Inter
    fontSize: 0.9rem
    fontWeight: "200"
  inline-code:
    fontFamily: "{typography.fontFamilies.mono}"
    fontSize: 0.95em
    fontWeight: "400"
emphasis:
  strong-weight: "400"
  italic-style: italic
  italic-display: "Newsreader italic — used for serif tonal accents in copy"
spacing:
  base: 8px
  xxs: 0.25rem
  xs: 0.5rem
  sm: 0.75rem
  md: 1rem
  gutter: 1.5rem
  lg: 2rem
  xl: 3rem
  xxl: 4rem
  section-bottom: 6rem
  hero-top: 13rem
  hero-bottom: 18rem
  grid-gap: 1.5rem
  container-padding-desktop: 2rem
  container-padding-mobile: 1rem
layout:
  site-max-width: 1200px
  header-height: 4rem
  grid-columns: 6
  grid-template: "repeat(6, 1fr)"
  grid-mobile: "1fr"
  breakpoint-mobile: 768px
  root-font-size-desktop: 16px
  root-font-size-mobile: 20px
rounded:
  none: "0"
  sm: 4px
  md: 8px
  lg: 16px
  pill: 40px
  full: 9999px
borders:
  hairline: "1px solid #eeeeee"
  divider-accent: "1px solid #a491fc"
  table-divider-soft: "1px solid #e9e6ff"
  blockquote-accent: "4px solid #a491fc"
  button-secondary: "2px solid #a491fc"
  code: "1px solid #e8e8ef"
elevation:
  e0: "none"
  e1-hover-lift: "translateY(-1px)"
  shadow-none: "none"
motion:
  durations:
    fast: 150ms
    base: 200ms
    medium: 400ms
  easings:
    standard: "cubic-bezier(0.19, 1, 0.22, 1)"
    ease-in-expo: "cubic-bezier(0.95, 0.05, 0.795, 0.035)"
    ease-out-expo: "cubic-bezier(0.19, 1, 0.22, 1)"
    ease-in-out-expo: "cubic-bezier(1, 0, 0, 1)"
    button: "ease"
  presets:
    color-link: "color 150ms"
    nav-link: "color 150ms"
    card-hover: "background-color 200ms ease, color 200ms ease"
    button: "all 200ms ease"
    theme-shift: "background 400ms cubic-bezier(0.19, 1, 0.22, 1), color 400ms cubic-bezier(0.19, 1, 0.22, 1)"
components:
  header:
    height: "{layout.header-height}"
    backgroundColor: "{colors.background}"
    borderBottom: "{borders.hairline}"
    position: fixed
    paddingX: "{spacing.lg}"
    logo:
      typography: "{typography.nav-link}"
      color: "{colors.on-surface}"
    nav-link:
      typography: "{typography.nav-link}"
      color: "{colors.on-surface}"
      hoverColor: "{colors.primary}"
      transition: "{motion.presets.nav-link}"
    nav-gap: "{spacing.lg}"
  mobile-modal:
    backgroundColor: "{colors.background}"
    item-spacing: "{spacing.md}"
    link-typography: "{typography.body-base}"
    link-hover-color: "{colors.primary}"
  hero:
    paddingTop-desktop: "{spacing.hero-top}"
    paddingBottom-desktop: "{spacing.hero-bottom}"
    paddingTop-mobile: "{spacing.md}"
    paddingBottom-mobile: "{spacing.section-bottom}"
    title: "{typography.hero-display}"
    subtitle: "{typography.hero-subtitle-lg}"
    title-max-width: 700px
    subtitle-max-width: 800px
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button-label}"
    rounded: "{rounded.pill}"
    paddingY: "{spacing.sm}"
    paddingX: "{spacing.gutter}"
    border: "none"
    transition: "{motion.presets.button}"
  button-primary-hover:
    backgroundColor: "{colors.primary-hover}"
    transform: "{elevation.e1-hover-lift}"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.primary}"
    border: "{borders.button-secondary}"
    rounded: "{rounded.pill}"
    typography: "{typography.button-label}"
    paddingY: "{spacing.sm}"
    paddingX: "{spacing.gutter}"
  button-secondary-hover:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
  section:
    marginBottom: "{spacing.section-bottom}"
    title: "{typography.section-title}"
    body: "{typography.section-body}"
  link-inline:
    color: "{colors.link}"
    textDecoration: "none"
    hoverColor: "{colors.link-hover}"
    hoverTextDecoration: "underline"
  divider:
    height: "1px"
    backgroundColor: "{colors.primary}"
    marginY: "2.4545454545rem"
  card-news:
    backgroundColor: "{colors.surface-muted}"
    border: "{borders.hairline}"
    rounded: "{rounded.sm}"
    padding: "{spacing.gutter}"
    title: "{typography.card-title}"
    excerpt: "{typography.card-meta}"
    transition: "{motion.presets.card-hover}"
  card-news-hover:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.inverse-on-primary}"
    titleColor: "{colors.on-primary}"
    excerptColor: "{colors.on-primary}"
  card-news-accent:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    border: "1px solid #a491fc"
    rounded: "{rounded.sm}"
  card-news-accent-hover:
    backgroundColor: "{colors.primary-hover}"
    border: "1px solid #8b7ae8"
  layer-link:
    paddingY: "{spacing.md}"
    borderBottom: "{borders.hairline}"
    typography: "{typography.body-base}"
    color: "{colors.on-surface}"
    hoverColor: "{colors.primary}"
    transition: "color 200ms ease"
  logo-grid:
    columns-desktop: 3
    columns-mobile: 2
    gap: "{spacing.gutter}"
    item-min-height: 90px
    item-max-image-width: 200px
    item-max-image-height: 80px
    item-rounded: "{rounded.sm}"
  intro-tag:
    typography: "{typography.section-title}"
    color: "{colors.on-surface}"
    align: left
  stay-connected:
    backgroundColor: "{colors.surface-soft}"
    paddingY: "{spacing.xl}"
    columns: 3
    gap: "{spacing.xl}"
    title: "{typography.section-title}"
    description: "{typography.section-body}"
    link-color: "{colors.link}"
  footer:
    backgroundColor: "{colors.footer-surface}"
    textColor: "{colors.on-footer}"
    paddingY: "{spacing.lg}"
    typography: "{typography.footer-text}"
    link-hover: "underline"
  reader-blockquote:
    borderLeft: "{borders.blockquote-accent}"
    rounded: "{rounded.md}"
    backgroundColor: "{colors.surface-tint}"
    textColor: "{colors.on-surface-variant}"
    fontStyle: italic
    padding: "0.75rem 1rem"
  reader-code-inline:
    fontFamily: "{typography.fontFamilies.mono}"
    backgroundColor: "{colors.surface-code}"
    border: "{borders.code}"
    rounded: "{rounded.sm}"
    padding: "0.1rem 0.35rem"
  reader-table:
    border: "{borders.divider-accent}"
    rounded: "{rounded.md}"
    cellDivider: "{borders.table-divider-soft}"
    headerBackground: "{colors.surface-accent-soft}"
    headerTextColor: "{colors.on-surface}"
    headerWeight: "350"
    cellPadding: "0.75rem 1rem"
  reader-note-tldr:
    border: "{borders.divider-accent}"
    rounded: "{rounded.md}"
    firstRowBackground: "{colors.surface-accent-soft}"
    firstRowTextColor: "{colors.on-surface}"
  hamburger:
    bar-width: 20px
    bar-height: 2px
    bar-gap: 4px
    color: currentColor
brand:
  theme-color: "#a491fc"
  social-image-aspect: "1200x630"
  voice: "Calm, considered, public-interest. Confident but never marketing-loud."
---

## Brand & Style

The Agentic State is the digital home of a global policy initiative on agentic AI in government. The visual identity has to do two things at once: signal **serious public-interest scholarship** (this is, after all, a vision paper distributed at international summits) and signal **forward motion** (this is a future-of-government argument, not an archive).

The system resolves that tension through deliberate **editorial restraint**. The page is mostly white. Headlines lean on a single italic serif (Newsreader) to register as *thinking*, while body and UI copy shift to a near-light-weight Inter that feels modern, calm, and unornamented. A single soft-lilac accent (#a491fc) does almost all the work of color: it marks links, primary calls to action, the footer, the horizontal rule, the active state in the paper reader, and the small italic flourishes inside paragraphs. Nothing else is colored. There are no shadows, no gradients, no decorative photography. The result reads like a long-form essay that happens to also be a website.

The personality is **unhurried, scholarly, optimistic**. Generous vertical rhythm (sections breathe at 6rem of bottom margin; the home hero opens with 13rem of top space) signals that the project is patient with its reader. Italic serif accents — the wordmark, the hero, the section titles, even the buttons — give the surface a literary register that contrasts intentionally with the technological subject matter.

## Colors

The palette is essentially a duotone: a near-pure white canvas and a single accent.

- **Canvas:** Pure white (#ffffff) is the default surface for almost everything — header, hero, sections, paper reader. A 1px hairline at #eeeeee is used everywhere structure is needed; borders never darken.
- **Ink:** Body copy is true black (#000) for headlines and a softer #333 for paragraph copy. Secondary metadata sits at #666. There is no warm/cool drift in the grays — they are neutral by design.
- **Accent (#a491fc):** A soft, slightly cool lilac. It is the *only* color the design uses for emphasis. It carries the primary button, the inline link, the underline-on-hover for navigation, the horizontal rule between essays, the active scrollspy state in the paper reader, the blockquote rule, and the footer fill. Its hover state is one perceptual step deeper (#8b7ae8). A 12% tint of the accent is reserved for hover-fills inside dropdowns; a flat tint at #d9d0ff (pale lilac) is reserved for "TL;DR" header rows in the paper's tables.
- **Surface variations:** Three near-whites differentiate quiet zones — #f9f9f9 for news cards, #f8f9fa for the "Stay Connected" band, and #faf9ff for blockquote backgrounds inside the paper reader.
- **Inversion:** The footer fully inverts: lilac fill, white text, white links. This is the only "loud" color block on the entire site, and it functions as a firm visual close to every page.

Avoid introducing additional hues. If a new state needs to be expressed (warning, success, error), prefer typographic emphasis or a tint of the existing lilac before reaching for new color.

## Typography

The system runs on two typefaces, used with disciplined separation of duty.

- **Newsreader (serif, italic):** Reserved for *voice*. The wordmark, navigation links, hero titles, section titles, button labels, and the H1 of the paper reader are all set in Newsreader Italic, almost always at weight 300–350. The italic is intentional and constant — upright Newsreader is rarely seen. This typeface does the editorial signaling.
- **Inter (sans, ultralight):** Reserved for *information*. Subtitles, body paragraphs, list items, news card titles, dates, footer copy, paper-reader H2/H3 are set in Inter, frequently at weight 150–300. The light weight is part of the brand: heavier weights would flatten the air the design is built around.

Hierarchy is established by **size and weight contrast**, not by typeface switching mid-paragraph. Body text uses a comfortable 1.5 line-height in marketing pages and 1.65 in the long-form paper reader, where reading endurance matters more. Strong/bold inside copy steps only to weight 400 — nothing on this site is set bolder than 400 except CSS-default headings — so emphasis stays gentle. Italic emphasis inside paragraphs occasionally swaps to Newsreader Italic with the accent color to call out the project name *The Agentic State* — a recurring, deliberate flourish.

The root font-size scales from 16px on desktop to 20px on mobile, which proportionally enlarges every rem-based dimension on small screens; mobile is not a smaller copy of the layout but a recalibrated one.

## Layout & Spacing

Layout is built on a **6-column CSS grid** capped at 1200px, gutters at 1.5rem, page padding 2rem on desktop and 1rem on mobile. Below 768px, the grid collapses to a single column and column spans fold accordingly.

The spacing scale is rem-based and generous:

- Inline rhythm uses 0.5–1.5rem.
- Section bottom margin defaults to 6rem; the home hero is intentionally extreme (13rem top, 18rem bottom on desktop) to give the wordmark room to breathe.
- The header is a fixed 4rem strip; a `--headerHeight` variable is the canonical offset used wherever scroll-margin or padding-top compensation is needed.
- The paper reader uses `scroll-margin-top: calc(headerHeight + 16px)` so deep links never land flush against the fixed nav.

The visual logic is **whitespace as gravitas**. Don't crowd. When in doubt, the right answer is more vertical air.

## Elevation & Depth

There is **no shadow language** on this site. No box-shadow, no scrim, no glassmorphism. Depth is expressed instead through:

- **Hairline borders** at #eeeeee (cards, dividers, the header bottom edge).
- **Tonal shifts** between #fff, #f9f9f9, and #f8f9fa for sectioning.
- **Color inversion** on hover for cards (white-on-lilac) and permanently for the footer.
- **Microlift** on primary buttons: a 1px upward translate on hover (`translateY(-1px)`), no shadow, just motion.

Interactive feedback is intentionally quiet. Links underline on hover; navigation links shift to lilac; cards swap their entire fill to lilac with white text. The page never "pops" — it shifts.

## Shapes & Radii

Three radii cover the system:

- **4px (sm):** News cards, logo tiles. Crisp but not boxy.
- **8px (md):** Blockquote pills, code chips, paper-reader notes and tables. Soft enough to feel editorial.
- **40px (pill):** All buttons and the dropdown toggle in the paper reader. The pill silhouette is a recurring brand signature — combined with the italic Newsreader label, it produces a button that feels almost like a printed badge or a stamp.

Avoid sharp 0px corners and avoid full-circular badges; the system has no need for them.

## Motion

Motion is **fast, soft, and almost invisible**. The default transition is 150–200ms with a gentle ease, and the design's most expressive curve — `cubic-bezier(0.19, 1, 0.22, 1)` (ease-out-expo) — is reserved for the 400ms color/background transitions on `<body>` to handle theme-level shifts gracefully.

Concrete patterns:

- Nav and inline link colors transition over 150ms.
- News-card backgrounds and text colors swap over 200ms ease.
- Buttons transition `all` for 200ms ease and lift `-1px` on hover.
- Scroll behavior is `smooth` throughout, both on the document and inside the paper reader's scroll box.

There is no entrance animation, no parallax, no autoplay. Motion supports interaction; it never performs.

## Components

### Buttons

The primary button is a lilac pill with an italic Newsreader label in white. Its size is generous (0.75rem × 1.5rem padding desktop, smaller on mobile) and it never carries a shadow. The secondary variant inverts: transparent fill, 2px lilac border, lilac italic label — a classic "ghost pill." On hover, secondary fills with lilac and its label goes white, mirroring the primary state. Buttons appear sparingly, usually one per section, and almost always either "Read our Vision Paper," "Read Online," "Download PDF," or "Join the mailing list."

### Header & Navigation

A fixed 4rem-tall strip on white with a single hairline at the bottom. The wordmark sits left in italic Newsreader; navigation sits right with three labels: Vision Paper, Projects, Contact. Spacing is wide (2rem gaps) and links shift to lilac on hover. Below 768px, the inline links collapse and a hamburger toggle reveals a full-screen modal with stacked links — the same labels, the same italic register, just larger.

### Cards (News / Projects)

Cards are flat: a #f9f9f9 fill with a 4px radius and a hairline border. Title sits in Inter weight 300 at 1.1rem; an excerpt or date sits at 0.9rem in #666. On hover, the entire card flips to the lilac accent with white text — no border change, no shadow, just a 200ms color transition. A persistent **accent variant** (`news-card--accent`) ships the lilac state by default and is used as the recurring "Follow us on LinkedIn" prompt at the end of card grids.

### Layer / Layers List

A vertical stack of single-line links separated by hairline rules, each with 1rem of vertical padding. Hovering shifts the link color to lilac. Used to enumerate the twelve "layers" of the vision paper on the home page in two parallel three-column grids.

### Stay Connected Block

A full-width band on #f8f9fa with 3rem of vertical padding and a three-column grid of: italic-serif heading, descriptive paragraph with an inline lilac mailto link, and a CTA paragraph with a primary pill button. Below 768px the columns collapse vertically.

### Footer

A solid lilac band, white text, two link clusters (legal on the left, social/contact on the right). Underline on hover. This is the only place the lilac becomes the surface rather than the accent — a deliberate visual full stop.

### Paper Reader (Bootstrap Scrollspy surface)

The vision paper is a long-form HTML document inside a scrollable container. It carries its own scoped overrides under `.tas-scope`:

- **H1** in italic Newsreader, lilac, 1.5rem.
- **H2** in Inter weight 300 at 1.3rem with 3rem of top space.
- **H3** in Inter italic at 1.1rem.
- Body paragraphs at 1.65 line-height.
- Inline links re-enable underline (the marketing pages suppress it).
- **Blockquotes** carry a 4px lilac left border, an 8px radius, and a #faf9ff tint — a very pale lilac wash.
- **Inline code** sits in #f4f4f8 with a hairline border at #e8e8ef and a 4px radius.
- **wp-table** uses a lilac border, an 8px radius, a pale-lilac (#d9d0ff) header row, and #e9e6ff hairline dividers between rows.
- **wp-note** ("TL;DR" callout) uses the same palette: lilac outer border, 8px radius, pale-lilac first row.

The scrollspy active state and dropdown active state both pick up the lilac accent automatically; hover/focus states inside the dropdown use the 12% lilac tint for a soft, non-jarring fill.

## Voice & Composition Notes

- Treat **whitespace as a first-class component**. If something feels cramped, the answer is almost always more spacing, not a smaller font.
- Use the **italic serif sparingly and consistently**: wordmark, hero, section titles, button labels, the recurring "*The Agentic State*" inline flourish. Don't extend it to body copy.
- Reach for the **lilac** for emphasis before reaching for weight, size, or a new color. The system is designed to be monochromatic plus accent.
- Prefer **tonal shifts and hairlines** over shadows for any sense of depth.
- Long-form reading (the paper reader) is the most important surface; tune line-height, type size, and spacing there for endurance, not for marketing punch.
- Buttons are pill-shaped and italic. Avoid square buttons or upright sans-serif buttons; they break the brand instantly.
