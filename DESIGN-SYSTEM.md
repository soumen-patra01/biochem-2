# BIOCHEM TECHNOLOGIES — Enterprise Design System v1.0

**Single source of truth for all BIOCHEM TECHNOLOGIES digital properties.**
Premium industrial identity for a textile chemical manufacturer serving B2B textile mills across India.

Brand attributes: Scientific Innovation · Industrial Precision · Premium Quality · Technical Expertise · Trust · Long-Term Partnership · Engineering Excellence.

Design principle: **Less but Better.** Every pixel has purpose. Clarity over decoration. Trust before beauty. Desktop first.

---

## 1. COLOR SYSTEM

Dark, laboratory-grade palette. Deep blue-black foundations, precise blue accents, restrained cyan glow.

| Token | HEX | RGB | HSL | Usage |
|---|---|---|---|---|
| `--bg-0` Primary Background | `#070B14` | 7, 11, 20 | 222°, 48%, 5% | 60% of every page. Body background. |
| `--bg-1` Secondary Background | `#0B121F` | 11, 18, 31 | 219°, 48%, 8% | 20%. Alternating sections, footer. |
| `--surface-2` Elevated Surface | `#101A2C` | 16, 26, 44 | 219°, 47%, 12% | Raised panels, dropdowns, sticky bars. |
| `--surface-glass` Glass Surface | `rgba(13,20,34,0.62)` | 13, 20, 34 @ 62% | 218°, 45%, 9% | Navbar, hero panels, feature cards. Always with `backdrop-filter: blur(18px)`. |
| `--surface-card` Card Surface | `#0E1626` | 14, 22, 38 | 220°, 46%, 10% | 10%. Default card fill. |
| `--surface-int` Interactive Surface | `#16233A` | 22, 35, 58 | 218°, 45%, 16% | Hover fills, active list rows, chips. |
| `--border` Border | `rgba(148,163,184,0.14)` | 148, 163, 184 @ 14% | — | Card & input borders (1px). |
| `--divider` Divider | `rgba(148,163,184,0.08)` | 148, 163, 184 @ 8% | — | Section separators, table rules. |
| `--blue-500` Primary Blue | `#2F7BF5` | 47, 123, 245 | 217°, 91%, 57% | 7%. Primary CTAs, links, active states. AA on `--bg-0` (4.6:1 large / pair with white text on fills). |
| `--blue-300` Secondary Blue | `#6EA8FE` | 110, 168, 254 | 216°, 99%, 71% | Link hover, secondary accents, charts. 7.4:1 on `--bg-0`. |
| `--glow` Accent Glow | `#37C8F5` | 55, 200, 245 | 194°, 90%, 59% | 3%. Highlights, keylines, focus, data accents. 9.8:1 on `--bg-0`. |
| `--success` | `#34D399` | 52, 211, 153 | 158°, 64%, 52% | Validation, availability, eco badges. |
| `--warning` | `#FBBF24` | 251, 191, 36 | 43°, 96%, 56% | Cautions, stock notices. |
| `--error` | `#F87171` | 248, 113, 113 | 0°, 91%, 71% | Errors, destructive actions. |
| `--info` | `#38BDF8` | 56, 189, 248 | 199°, 93%, 60% | Informational banners, tooltips. |
| `--text-1` Text Primary | `#EDF2FA` | 237, 242, 250 | 217°, 57%, 95% | Headings, key values. 16.4:1 on `--bg-0`. |
| `--text-2` Text Secondary | `#A9B6CC` | 169, 182, 204 | 218°, 25%, 73% | Body copy. 8.5:1. |
| `--text-3` Text Muted | `#6B7A93` | 107, 122, 147 | 218°, 16%, 50% | Captions, meta, placeholders. 4.6:1. |
| `--disabled` | `#46536B` | 70, 83, 107 | 219°, 21%, 35% | Disabled text/icons. Decorative only. |
| Hover tint | `rgba(110,168,254,0.08)` | — | — | Row/ghost-button hover wash. |
| Focus ring | `#37C8F5` @ 100%, 2px + 3px offset shadow @ 25% | — | — | All keyboard focus. Never remove. |
| Selection | `rgba(47,123,245,0.35)` | — | — | `::selection` background, `--text-1` text. |
| Scrollbar | track `#0B121F`, thumb `#22304A`, hover `#2F4162` | — | — | Custom slim scrollbar (8px). |
| Overlay | `rgba(4,7,13,0.72)` | — | — | Behind modals & drawers. |
| Modal Background | `#0F1828` | 15, 24, 40 | 218°, 45%, 11% | Dialog surface + Elevation 3. |
| Tooltip Background | `#1B2740` | 27, 39, 64 | 220°, 41%, 18% | Tooltips, hover hints. |
| Skeleton Loader | base `#101A2C`, sheen `#1B2A45` | — | — | 1.4s shimmer sweep. |

**Distribution rule:** ~60% `--bg-0`, 20% `--bg-1`, 10% card surfaces, 7% primary blue, 3% glow/status. Accent colors are never used as large fills.

## 2. TYPOGRAPHY

Headings **Space Grotesk** · Body **Inter** · Numbers/data **Manrope**. Loaded via Google Fonts with `display=swap`.

| Level | Size (desktop → mobile) | Weight | Letter-spacing | Line-height | Margin below |
|---|---|---|---|---|---|
| H1 | clamp(40px → 64px via vw) | 600 | −0.025em | 1.05 | 24px |
| H2 | clamp(32px → 44px) | 600 | −0.02em | 1.1 | 20px |
| H3 | 28px → 24px | 600 | −0.015em | 1.2 | 16px |
| H4 | 22px → 20px | 600 | −0.01em | 1.3 | 12px |
| H5 | 18px | 600 | 0 | 1.4 | 8px |
| H6 / Overline | 13px | 500 (Space Grotesk) | +0.16em, UPPERCASE | 1.4 | 16px |
| Subtitle | 19px → 17px | 400 (Inter) | 0 | 1.6 | 24px |
| Body Large | 18px | 400 | 0 | 1.65 | 16px |
| Body | 16px | 400 | 0 | 1.7 | 16px |
| Small | 14px | 400 | +0.01em | 1.6 | 8px |
| Caption | 12.5px | 500 | +0.02em | 1.5 | 4px |
| Button | 15px (lg 16 / sm 13.5) | 600 (Space Grotesk) | +0.01em | 1 | — |
| Navigation | 14.5px | 500 | +0.02em | 1 | — |
| Table | 14px body / 12.5px header UPPERCASE +0.1em | 400 / 600 | — | 1.5 | — |
| Label | 13px | 600 | +0.04em | 1.4 | 8px |
| Code / Product code | 13.5px Manrope | 700 | +0.08em | 1.4 | — |
| Stat number | 40–56px Manrope | 700 | −0.02em | 1 | 4px |

Responsive scaling uses `clamp()`; headings never wrap tighter than 12ch on mobile. Max body measure: 68ch.

## 3. SPACING — 8-point system

| Token | px | Use |
|---|---|---|
| `--s-1` | 4 | Icon↔label gap, badge padding-y |
| `--s-2` | 8 | Chip gaps, caption↔value, input icon inset |
| `--s-3` | 12 | Button padding-y, small-card inner gaps |
| `--s-4` | 16 | Default component gap, card grid gutter (mobile) |
| `--s-5` | 20 | Card padding (compact) |
| `--s-6` | 24 | Card padding (default), form row gap |
| `--s-7` | 32 | Card padding (feature), grid gutters (desktop) |
| `--s-8` | 40 | Sub-section spacing, card group ↔ heading |
| `--s-9` | 48 | Heading block ↔ content |
| `--s-10` | 64 | Intra-section rhythm |
| `--s-11` | 80 | Section padding-y (tablet) |
| `--s-12` | 96 | Section padding-y (laptop) |
| `--s-13` | 128 | Section padding-y (desktop) |
| `--s-14` | 160 | Hero padding, landmark transitions |

## 4. GRID

- **Desktop (≥1280px):** 12 columns · max container **1440px** · content width 1216px · margins 112px · gutter 32px. Long-form text capped at 8 columns.
- **Laptop (1024–1279):** 12 cols · margins 64px · gutter 24px.
- **Tablet (768–1023):** 8 cols · margins 40px · gutter 20px.
- **Mobile (<768):** 4 cols · margins 20px · gutter 16px.
- **Card grid:** features 3-up desktop / 2-up tablet / 1-up mobile. **Product grid:** 4 / 3 / 2 / 1.

## 5. RADIUS

`--r-sm` 6px (badges, chips, code) · `--r-md` 10px (buttons, inputs) · `--r-lg` 14px (cards, dropdowns) · `--r-xl` 20px (feature cards, media) · `--r-2xl` 28px (hero panels, modals) · `--r-pill` 999px (pills, toggles, filter chips).

## 6. SHADOWS (soft, layered, never harsh)

- **E1** `0 1px 2px rgba(2,6,14,.5), 0 8px 24px -16px rgba(2,6,14,.6)` — cards at rest
- **E2** `0 2px 4px rgba(2,6,14,.5), 0 16px 40px -20px rgba(2,6,14,.7)` — dropdowns, sticky bars
- **E3** `0 4px 8px rgba(2,6,14,.5), 0 32px 80px -24px rgba(2,6,14,.8)` — modals
- **Hover** E2 + `0 0 0 1px rgba(110,168,254,.18)`
- **Floating** `0 24px 64px -24px rgba(47,123,245,.25)` — hero cards
- **Glass** `inset 0 1px 0 rgba(255,255,255,.06), 0 16px 48px -24px rgba(2,6,14,.8)`
- **Glow** `0 0 0 1px rgba(55,200,245,.28), 0 8px 40px -8px rgba(47,123,245,.35)` — primary CTA hover only

## 7. BORDERS

Card `1px solid --border` · Input `1px solid rgba(148,163,184,.2)` · Hover `rgba(110,168,254,.35)` · Active/selected `--blue-500` · Divider `--divider` · Glass `1px solid rgba(255,255,255,.08)` · Glow keyline `rgba(55,200,245,.4)` (reserved for focus & featured elements).

## 8. GLASSMORPHISM

`background: --surface-glass` + `backdrop-filter: blur(18px) saturate(140%)` + glass border + glass shadow + optional 1px top highlight. **Limit: navbar + max 2 glass moments per viewport.** Never stack glass on glass.

## 9. ICONOGRAPHY — Lucide

Stroke 1.75px (1.5px ≥28px sizes) · round joins · sizes 16/20/24 · icon containers 40–56px, `--r-lg`, `--surface-int` fill, icon in `--blue-300` · hover: border brightens + icon shifts to `--glow` (150ms). Custom SVG only for molecules, process diagrams, hexagon motifs — 1.5px stroke, same palette.

## 10. BUTTONS

Sizes: **LG** 52px/28px pad · **MD** 44px/22px · **SM** 36px/16px · Icon button 44×44. Radius `--r-md`. Type: Button spec above.

- **Primary** — gradient `#2F7BF5 → #2563EB`, white text, E1; hover: Glow shadow + lift −1px; active: translate 0, darken 6%.
- **Secondary** — `--surface-int` fill, `--text-1`, border `--border`; hover border `--blue-300` @35%.
- **Outline** — transparent, 1px `rgba(110,168,254,.4)`, text `--blue-300`; hover: fill hover-tint.
- **Ghost** — text-only `--text-2`; hover: text `--text-1` + hover-tint.
- **Danger** `--error` fill (dark text) · **Success** `--success` fill (dark text).
- **Loading:** label → 60% opacity + 16px spinner; width locked. **Disabled:** 40% opacity, no shadow, `cursor: not-allowed`.
- **Focus:** 2px `--glow` ring, 3px offset. All transitions 150–200ms ease-out.

## 11. INPUTS

Height 48px (textarea min 120px) · `--r-md` · fill `#0C1424` · input border · label 13px/600 above, 8px gap · placeholder `--text-3`. Focus: border `--blue-500` + 3px ring `rgba(47,123,245,.2)`. Error: `--error` border + 13px message with icon. Success: `--success` border. Search: leading icon 20px, inset 14px. Checkbox/radio 20px, checked `--blue-500`. Toggle 44×24 pill, thumb 18px, checked track `--blue-500`. Upload: dashed 1.5px border zone, hover glow border. Dropdown panel: `--surface-2`, E2, `--r-lg`, option hover `--surface-int`.

## 12. CARDS

All cards: `--surface-card`, card border, E1, hover = Hover shadow + border brighten + translateY(−3px), 250ms ease-out.

| Card | Padding | Radius | Notes |
|---|---|---|---|
| Feature | 32 | `--r-xl` | Icon container top, H4, body-small, arrow link |
| Product | 24 | `--r-lg` | Code (Manrope) → name (H5) → summary → chips → doc actions row |
| Statistic | 24/28 | `--r-lg` | Manrope number + caption, optional count-up |
| Glass | 32 | `--r-xl` | Glass recipe; hero/overlay contexts only |
| Download | 20 | `--r-lg` | File icon, name, type·size meta, trailing download button |
| Client/Testimonial | 32 | `--r-xl` | Quote, name, role, company; 20px avatar-less monogram |
| Timeline | 24 | `--r-lg` | Numbered node on 1px vertical rule, connective line in `--divider` |
| Article | 0 (media) + 24 | `--r-xl` | 16:9 media, category badge overlay, H5, meta row |
| Contact | 28 | `--r-lg` | Icon container, channel label, value in `--text-1`, action link |

## 13. BADGES & CHIPS

Badge: 24px height, 4/10px pad, `--r-sm`, 12px/600 +0.06em UPPERCASE. Category = blue tint `rgba(47,123,245,.14)` + `--blue-300` text; Status/Eco = success tint; New = glow tint; Featured = warning tint; Industry/Tech = neutral `--surface-int` + `--text-2`.
Chips: 36px, `--r-pill`, 14px/500, border `--border`, fill transparent; hover border brighten; **active:** fill `rgba(47,123,245,.16)`, border `--blue-500`, text `--blue-300`, leading ✓ 14px. Dismissible tag chips get trailing × 14px.

## 14. TABLES (technical data)

Header: 12.5px UPPERCASE `--text-3` on `--bg-1`, 12/16 pad. Rows: 14px `--text-2`, values `--text-1`, 14/16 pad, `--divider` rules only (no vertical lines, no zebra). Numeric cells Manrope, right-aligned. Row hover `--surface-int`. Wrapper: card border + `--r-lg`, `overflow-x:auto`. Prefer spec-list presentation on public pages; tables reserved for dense compatibility/spec data.

## 15. NAVIGATION

- **Navbar:** 72px, glass recipe, sticky; on scroll >24px: height 64px + E2. Links: Navigation type, `--text-2`; active/hover `--text-1` + 2px `--glow` underline animating width 0→100% (200ms).
- **Mega menu (Products):** full-width panel, `--surface-2`, E2, `--r-lg`(bottom), 32px pad; category columns with icon+name+2-line description; 150ms fade+4px rise.
- **Breadcrumb:** 13px, `--text-3`, "/" separators, current `--text-2`.
- **Footer:** `--bg-1`, top divider; 5-column link grid, 13px headings (H6 style), 14.5px links `--text-3`→`--text-2` hover.
- **Mobile:** hamburger → full-screen overlay (`--bg-0` @ 98%, blur), 20px links, staggered 40ms fade-in; filters/mega menus become bottom drawers.

## 16. MOTION

Curves: standard `cubic-bezier(.2,.6,.2,1)` · enter `cubic-bezier(.16,1,.3,1)` · exit `ease-in`.
Durations: micro 150ms · hover 200ms · reveal 500ms · modal 250ms · page fade 300ms.
Scroll reveal: opacity 0→1 + translateY(24px→0), staggered 60ms, triggered at 20% viewport via IntersectionObserver, runs once. Counters: 1.2s ease-out on first view. Accordion: height auto-animate 250ms + chevron rotate. Parallax: hero decoration only, ≤12px drift. **`prefers-reduced-motion: reduce` disables all transforms/parallax/auto-scroll; opacity-only fallback.**

## 17. IMAGERY

Authentic industrial photography only: laboratory glassware, dyeing/finishing machinery, fabric close-ups, QC instruments. No generic stock, no smiling-handshake clichés. Treatment: cool grade (+blue shadows), 10–20% navy overlay `linear-gradient(rgba(7,11,20,.2), rgba(7,11,20,.6))` for text safety. Aspect ratios: hero media 4:5, cards 16:9 or 3:2, strip panoramas 21:9. Radius `--r-xl`. Grayscale-to-color hover reserved for client logos.

## 18. ILLUSTRATION & BACKGROUNDS

Minimal scientific line-work: molecule node graphs, hexagon lattices (6% opacity max), flow lines, process diagrams. 1.5px stroke, `--blue-300`/`--glow` at low opacity.
Backgrounds: **Mesh gradient** (2–3 radial blue glows ≤18% opacity on `--bg-0`) · **Hexagon pattern** (SVG tile, 5–6% opacity, masked fade) · **Noise** 2–3% opacity tile · **Glow layer** single radial per section max · **Section dividers**: 1px `--divider` or 120px gradient fade between `--bg-0`/`--bg-1`.

## 19. ACCESSIBILITY & RESPONSIVE

WCAG AA minimum: body text ≥7:1 here, interactive ≥4.5:1, focus always visible (glow ring), full keyboard paths (skip-link, roving tabs in menus, `aria-expanded`/`aria-controls` on disclosure, `role="dialog"` + focus trap in modals/drawers). Breakpoints: 1440 design canvas · 1280 · 1024 · 768 · 480 — each intentionally re-laid-out, not auto-stacked.

## 20. COMPONENT PHILOSOPHY

Reusable · Scalable · Accessible · Responsive · Consistent · Maintainable. All values consumed via CSS custom properties in `assets/css/base.css`. No component may introduce off-token colors, radii, or spacing.
