# Terra Drone Arabia — Design System

Colours, Avenir type, logos, photography and page components for **Terra Drone Arabia (TDSA)**. Use it for every web page, deck, document, dashboard and social graphic made for TDSA.

Open [`index.html`](index.html) for the visual overview, or [`examples/landing-page.html`](examples/landing-page.html) for a full page built from the components. With GitHub Pages enabled on this repo, both work as live pages.

> **Before you push:** the Avenir LT Std fonts are a commercial typeface. Keep this repository **private** unless your licence allows redistribution — or delete `fonts/*.woff2`, add them to `.gitignore`, and the system falls back to Avenir Next / Nunito Sans. See [NOTICE.md](NOTICE.md).

## Quick start

**Plain HTML / any site** — copy the repo (or add it as a submodule) and link one stylesheet:

```html
<link rel="stylesheet" href="tdsa-design-system/tdsa.css">

<header class="td-header">
  <img class="td-logo" src="tdsa-design-system/assets/logos/tdsa-logo-long-positive.png" alt="Terra Drone Arabia">
</header>
<a class="td-btn td-btn-primary" href="/contact">Contact Us</a>
```

`tdsa.css` imports, in order: `fonts/avenir.css` → `tokens/tokens.css` → `components/tdsa-components.css`. Import them separately if you only need tokens.

**Dark sections** — put `data-theme="dark"` on any element (footer, closing band); the semantic tokens (`--surface`, `--ink`, `--action`, `--link`…) switch to their dark values inside it.

**Tailwind** — load `tokens/tokens.css`, then:

```js
// tailwind.config.js
module.exports = { presets: [require('./tdsa-design-system/tokens/tailwind.preset.js')], content: ['./src/**/*.{html,js,jsx,tsx}'] };
```

Gives `bg-surface`, `text-ink-brand`, `bg-action`, `p-6`, `rounded-md`, `text-display`, `font-sans` and so on. `require('…/tailwind.preset.js').raw` has resolved hex values.

**Sass** — `@use 'tdsa-design-system/tokens/tokens' as *;` then `$tdsa-dusk`, `$tdsa-ink`, `$tdsa-space-6`; dark values in the `$tdsa-dark` map.

**Other tools** (Figma Tokens, Style Dictionary, slide templates) — read [`tokens/tokens.json`](tokens/tokens.json), the source every other token file is generated from.

## What's in here

```
tdsa.css                    one import: fonts + tokens + components
index.html                  visual overview (cover, colours, type, logos, components)
tokens/
  tokens.json               source of truth: colours (light + dark), type, spacing, radius
  tokens.css                CSS custom properties + .display/.h1/.body… type classes
  _tokens.scss              Sass variables
  tailwind.preset.js        Tailwind preset
fonts/
  avenir.css                @font-face for Avenir LT Std (300–900, roman + oblique)
  *.woff2                   12 font files
components/
  tdsa-components.css       all component styles (class prefix td-)
  <Component>/README.md     guidelines
  <Component>/example.html  standalone working example
assets/
  logos/                    long + square lockups (black and white), symbol icon
  photography/              approved photography
  concept/                  AI concept images — internal mockups only
docs/
  website-pattern.md        how terra-drone.com.sa composes a page
  charts.md                 chart colours and rules
  checklist.md              pre-delivery checklist
examples/
  landing-page.html         a full page built from the components
```

## Components

| Component | Class | Use |
| --- | --- | --- |
| [Button](components/Button/README.md) | `.td-btn .td-btn-primary` / `.td-btn-secondary` | Verb-led actions: Contact Us, Schedule Meeting |
| [TextLink](components/TextLink/README.md) | `.td-link` | "View All …", "Read More" with arrow (flips in RTL) |
| [Header](components/Header/README.md) | `.td-header`, `.td-nav`, `.td-lang` | Logo, nav, Arabic switch |
| [Hero](components/Hero/README.md) | `.td-hero`, `.td-display`, `.td-lead` | Three-beat headline, two CTAs, photo |
| [ProofStrip](components/ProofStrip/README.md) | `.td-proof`, `.td-proof-item` | Partners, clients, certifications |
| [ServiceCard](components/ServiceCard/README.md) | `.td-cards`, `.td-card` | Photo-led service / case-study cards |
| [CTABand](components/CTABand/README.md) | `.td-band` | Dark closing band |
| [Footer](components/Footer/README.md) | `.td-scrim .td-news`, `.td-footer` | Newsletter over Riyadh skyline, offices, white logo |
| [Chart](components/Chart/README.md) | `.td-chart` | Brand series colours, gridlines, labels |

Supporting classes: `.td-img` (photo filling its frame), `.td-scrim` (78% Night overlay for text on photos), `.td-logo`, `.td-input`.

## Brand guidelines


The brand system for Terra Drone Arabia (TDSA): colours, Avenir type, logos and the page patterns the website uses. Use it for every slide deck, document, web page, design, dashboard, chart and social graphic made for TDSA.

The live website, https://terra-drone.com.sa/, is the reference for how the brand is applied in practice (layout, logo placement, tone). When this system and the site disagree on something this system doesn't define, match the site. Never approximate the logo or invent new brand colours. If something isn't defined here, choose a sensible neutral value and say you did.

### Brand at a glance

TDSA is an industrial drone and geospatial partner for Saudi Arabia. The brand reads **confident, precise and proven**: short declarative headlines, real aerial photography of Saudi sites, and proof (partners, clients, certifications) on display. Pages open light and close dark.

### Content fundamentals

- **Headlines in three beats or two parts.** "Every Terrain. Every Angle. One Partner." · "Data you can trust, Operations you can scale". Short, parallel, no hype words.
- **Buttons are short and verb-led:** "Contact Us", "Schedule Meeting", "View All Drone Services", "Learn More", "Full Case Study", "Read More".
- **Proof over claims.** Back statements with client names, certifications (GACA, GEOSA, ISO 9001 / 22301 / 45001, Vision 2030) and case studies.
- **Bilingual-ready.** Every layout must work mirrored for Arabic (RTL). Leave room: Arabic headlines often run longer, and icons with direction flip.
- **Avoid** purple gradients, emoji decoration, clip art, stock illustrations and random accent colours.

### Colour

Seven brand colours, plus white. Roles are provisional — not yet confirmed against the website's CSS.

| Token | Hex | Role |
| --- | --- | --- |
| `night` | #0F0F56 | Primary dark: headings, body text on light, dark sections (footer, closing CTA band) |
| `dusk` | #143893 | Primary brand blue: titles, key shapes, primary buttons |
| `fineday` | #25A1F4 | Accent: highlights, hover states, links on dark, chart series 1 |
| `twilight` | #09AEBA | Secondary accent (teal): icons, chart series 3 |
| `dawn` | #094E59 | Deep teal: secondary dark surfaces, chart series 4 |
| `daytime` | #CCE6FF | Light blue tint: alternating section backgrounds, cards, table stripes |
| `sunset` | #DFD1D1 | Warm neutral: dividers, subtle backgrounds |

Build with the semantic tokens (`surface`, `surface-alt`, `surface-band`, `ink`, `ink-brand`, `ink-muted`, `line`, `action`, `on-action`, `link`) rather than raw brand names. The **Light** theme is the top of a page; the **Dark** theme is its closing band and footer.

#### Contrast rules

- Body text in `night` or `dusk` on `white`, `daytime` or `sunset`. On `night`, `dusk` or `dawn`, use white.
- `fineday` and `twilight` are too light for text on light grounds (2.8:1 and 2.7:1 on white — below even the 3:1 large-text bar). Use them for shapes, icons and chart marks. On `night` they pass (6.1:1 / 6.4:1).
- Links: `dusk` on light grounds, `fineday` on dark, with a `fineday` underline on hover.
- `dusk` on `night` is only 1.65:1, so a Dusk button inside a dark section has no visible edge. Dark sections use `fineday` fill with `night` label (`action` in the Dark theme) — an assumption to confirm with the brand owner.

### Typography

- Family: **Avenir** (Avenir LT Std) — Light 300, Book 350, Roman/Regular 400, Medium 500, Heavy 800, Black 900, each with its oblique. All twelve are in [`fonts/`](fonts/) as `.woff2`; [`fonts/avenir.css`](fonts/avenir.css) declares them as the family `Avenir`.
- Headings in Avenir Heavy or Black, `night` or `dusk` (white on dark sections).
- Body in Avenir Roman (400) or Book (350); captions and labels in Avenir Light or Medium.
- Fallback stack: `"Avenir", "Avenir Next", "Nunito Sans", system-ui, sans-serif`.
- The type scale (display 56 → caption 12) is a neutral starting point; the brand source defines weights, not sizes.

The CSS weights follow the brand names (Medium 500, Heavy 800, Black 900) rather than the files' internal weight classes (600, 700, 750), so `font-weight: 800` always means Heavy.

### Logos

All logo files are in [`assets/logos/`](assets/logos/). The marks are single-ink: black (positive) or white.

| File | Use |
| --- | --- |
| `tdsa-logo-long-positive.png` | Horizontal lockup, black, on light grounds (white, daytime, sunset). Website header. |
| `tdsa-logo-long-white.png` | Horizontal lockup, white, on dark grounds (night, dusk, dawn, photos with a night scrim). Website footer. |
| `tdsa-logo-square-positive.png` | Stacked lockup, black: avatars, social posts, tight spaces on light grounds. |
| `tdsa-logo-square-white.png` | Stacked lockup, white: the same on dark grounds. |
| `tdsa-icon-positive.png` | Symbol only, black: favicons, app icons, small marks, watermarks on light grounds. |

Don't recolour (not even to Dusk), stretch, crop or add effects to any logo. Keep clear space of at least the height of the "A" in Arabia on every side. Minimum size: long lockup 120px wide on screen, square lockup 64px wide. There is no white symbol-only file yet: on dark grounds use the white square lockup, and never invert the black icon.

### Photography

Photography first: real aerial and industrial imagery of Saudi sites — refineries, flare stacks, solar and wind farms, mining, construction, coastline. No stock illustration or clip art. Photos go in `radius-md` frames (`.td-img`); text on a photo only inside `.td-scrim` (78% Night overlay).

- [`assets/photography/`](assets/photography/) — production images: the Riyadh skyline at dusk (footer, closing slides) and a heavy-lift delivery drone (hero; confirm rights, it is a manufacturer photo).
- [`assets/concept/`](assets/concept/) — AI-generated images for internal mockups only. They show non-Saudi terrain and garbled text; never publish them.

### Layout patterns

- **Light top, dark bottom.** Open on `surface` (white) and `surface-alt` (daytime) sections; close on a `surface-band` (night) CTA band and footer.
- **Proof on display.** Partner, client and certification logos as clean single-colour rows on light backgrounds.
- **One primary button style** (`action` fill, `on-action` label) and one secondary outline style. Never more than one primary per view.
- Section padding `space-24` on desktop, `space-12` on mobile; card gaps `space-8`.

The full website page flow is in [docs/website-pattern.md](docs/website-pattern.md); chart rules in [docs/charts.md](docs/charts.md); the pre-delivery list in [docs/checklist.md](docs/checklist.md).
