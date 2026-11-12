# 08 — Design System

Decisions are recorded here as they're made. Exact values get tuned once the page layouts are built.

## Decided

| Decision | Choice | Notes |
|----------|--------|-------|
| Theme | **Light only** | No dark mode and no theme toggle. The site sets `color-scheme: light`, so browsers don't switch form controls or scrollbars to dark either. |
| Mascot colour | **Orange fox** (classic red-fox colourway) | Fixed; the palette has to work with orange. See [10-mascot-character.md](10-mascot-character.md). |

## Colour

### How the palette is structured

| Role | Share of the page | Used for |
|------|-------------------|----------|
| Neutrals | ~85–90% | Background, cards, text, borders. Slightly tinted, never pure black on pure white. |
| Brand colour | ~8–10% | Buttons, links, "Hire me", focus rings. One colour only. |
| Fox orange | ~2% | The mascot, plus an occasional small highlight. |

### Neutrals: pure black and white (chosen)

Matched to paulkalkbrenner.net, which uses `#000` text on a `#fff` background.

| Token | Hex | Used for |
|-------|-----|----------|
| `canvas` | `#FFFFFF` | Page background |
| `paper` | `#FFFFFF` | Cards, raised surfaces |
| `ink` | `#000000` | Main text, the name, underlines (21:1) |
| `muted` | `#666666` | Secondary text (5.7:1, passes AA) |
| `line` | `#C5C5C5` | Borders, dividers (their grey) |

Midnight ink (`#171C25` on `#F3F4F6`) was the previous pick; switch back to it if pure black feels too harsh.

### Personality colour (to choose)

Earlier brand-colour options, kept for reference. The current direction is blue and a few others used sparingly on top of the neutrals; see `roadmap/design-preview/colour-idea.html`.

| Option | Brand colour | Feel |
|--------|--------------|------|
| 1. Green + orange *(recommended)* | Deep forest green | Calm, trustworthy, natural partner to the fox |
| 2. Navy + orange | Orange as the brand colour, navy text and dark sections | Techy, confident |
| 3. Blue + neutrals | Strong blue | Clean, corporate-safe, least memorable |
| 4. Plum + peach | Muted plum | Friendly, creative, can read "designer" more than "engineer" |

Avoid: red, pink or yellow as the brand colour (they clash with the fox or fail contrast), and more than one bright colour.

### Rules
- Body text and buttons must meet WCAG AA contrast (4.5:1).
- Colours are defined once as Tailwind tokens in the `@theme` block of `src/styles/index.css`; components use the token classes (`text-ink`, `bg-accent`), never raw hex values.

## Typography

| Role | Font | Tailwind class | Status |
|------|------|----------------|--------|
| Display | Dirtyline 36daysoftype 2022 | `font-display` | Installed, self-hosted |
| Body (default) | Chillax, variable 200–700 | `font-sans` | Installed, self-hosted |
| Mono | System monospace for now | `font-mono` | 3rd font still to choose |

## Still to decide
- [x] Neutrals: pure black `#000` on white `#fff` (matched to paulkalkbrenner.net)
- [ ] Personality / accent colour(s) and exact shades
- [ ] Third font (mono)
- [ ] Spacing scale and corner radius
- [ ] Animation style (page transitions, scroll reveals, hover states)
