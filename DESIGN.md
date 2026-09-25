# Design & Style Guide — Soluven

Premium, editorial agency style: large confident typography, generous whitespace, structured asymmetric layouts, thin borders, minimal corner rounding. Dual brand accents (blue + green) used deliberately, not a single-accent palette.

## 1. Color Palette

| Token | Hex | Usage |
|---|---|---|
| `--soluven-cream` (`--color-background`) | `#FFF8EE` | Primary background |
| `--soluven-ink` (`--color-ink` / `--color-text`) | `#16242A` | Body/heading text, dark section backgrounds (footer, CTA, loader) |
| `--soluven-muted` (`--color-muted` / `--color-text-muted`) | `#637075` | Secondary text |
| `--soluven-blue` (`--color-blue`) | `#63CBF8` | Primary accent — CTAs, links, Websites service, hero highlight |
| `--soluven-green` (`--color-green`) | `#7ED957` | Secondary accent — Ecommerce service, decorative shapes, marquee accents |

Derived utility shades (not new brand colors, just tints of ink for hairline UI, kept out of the 5 core tokens): `--color-border` (ink @ 15%), `--color-surface` (ink @ 4% over cream), `--color-blue-hover` (blue mixed toward ink), `--color-blue-deep` (55% blue, 45% ink; 4.2:1 on cream, used for large blue text on light backgrounds where brand blue alone fails contrast).

**Notes:**
- Both blue and green are used as bright, controlled accents. No purple/violet/gold/dark gradients.
- **No rainbow or multi-hue gradients.** Where a gradient is used at all it is a single brand hue fading to transparent (decorative blur orbs, the marquee sweep line). Solid brand fills are the default.
- Primary buttons use ink text on blue fill (not white) to keep AA contrast against the light blue; verify contrast whenever a new blue/green-filled surface carries body text.

## 2. Typography

Dual typeface system:

| Role | Font | Weight |
|---|---|---|
| Logo, headings, large statements | Sora | 600–800 |
| Navigation, body, buttons, labels | Manrope | 400–700 |

- Self-hosted from `app/fonts/` (latin, variable weight) via `next/font/local` in `app/layout.tsx` as `--font-sora` / `--font-manrope`, mapped to `--font-heading` / `--font-body`.
- Editorial headings: large size, tight tracking; body: comfortable line-height, 16px minimum.

## 3. Spacing & Layout

- Content sections use the `page-container` utility (`app/globals.css`): an 896px column set by `--content-max`, with 24px mobile / 64px tablet+ gutters. Change the width there, not per section. Heroes and page intros keep the wider `mx-auto max-w-[1280px] px-6 md:px-[85px]` frame, and the header uses its own `max-w-[1440px]`. Four-across card grids don't fit the 896px column; use 2 columns.
- Section vertical rhythm: 80–120px desktop, 48–64px mobile.
- Minimal corner rounding (`rounded-md`/`rounded-lg`), thin (1px) borders, no rounded-card-heavy SaaS look. `rounded-full` is reserved for small circular icon containers, avatars and dots, not for text chips or cards.
- **No drop shadows anywhere.** Elevation is expressed with a 1px `border border-[var(--color-border)]`, never `shadow-*`, `drop-shadow-*` or a custom `shadow-[...]` value.
- **No glassmorphism.** No `backdrop-blur` over translucent fills. Surfaces sitting above other content (sticky header, dropdowns, dialogs, floating mockup cards) use opaque `--color-background` or `--color-surface`.
- **No colored left stripes.** Don't use `border-l-*` as an accent. Use a top border, a background tint, or drop the accent.
- **No 3-across feature card rows.** Feature/benefit grids are 1- or 2-column, or an asymmetric layout. Avoid `sm:grid-cols-3` and similar.

## 4. Components & Conventions

- **Buttons:** Primary (blue fill, ink text), Secondary (ink border outline), Inverted (for dark backgrounds), Manrope 600–700, `rounded-md`. Primary text is always `--soluven-ink`, including inside `.section-dark`.
- **Cards** (Services, Projects): thin 1px border, `--color-surface` tint, no shadow of any kind.
- **Icons:** `@phosphor-icons/react` (import from the `@phosphor-icons/react/dist/ssr` subpath so icons stay server-rendered), used sparingly: one minimal abstract icon per service card, not colorful icon collections. Lucide is no longer used. **No emoji glyphs in UI or data** and **no checkmark-bullet lists** (`CheckCircle` rows): use plain text, numbered markers or dots instead. **No sparkle icons or ✦-style glyphs.**
- **Popups:** only the welcome popup (`components/layout/WelcomePopup.tsx`): a native `<dialog>` shown 1s after the page loader, bottom sheet on mobile, capped to once per 7 days via `localStorage`, never on `/contact`. It rotates 3 sourced industry insights from `data/popup-hooks.ts` every 6s (pause button; holds still while keyboard focus is on a slide; no hover pause, since the centred popup sits under the resting pointer; no auto-advance under reduced motion), each with one link, and never asks for details. Every hook must be a real statistic that cites its source. Uses the `section-dark` ink surface with stat numbers in brand blue. No other on-load popups.
- **Cookie consent:** `components/layout/CookieConsent.tsx`, a compact non-blocking bottom-right card (360px on desktop, full width on phones, `section-dark` ink surface) that appears once the welcome popup is closed or skipped. Accept all / Reject all are equally prominent, Customize expands switches for Analytics and Marketing (Necessary always on). The choice is stored in the `soluven_consent` cookie for 180 days and reopened from the footer's "Cookie settings". Any analytics or marketing script must check `getConsent()` from `lib/consent.ts` (or listen for `soluven:consent-changed`) before loading, and must be added to the table on `/cookie-policy`.
- **Service page hero:** every `/services/[slug]` page uses `components/sections/ServiceHero.tsx`, with copy from each service's `hero` field in `data/services.ts`. It uses the `section-dark` ink surface with a 3-line uppercase Sora headline (last line in brand blue). Slow blue/green bezier lines (`components/ui/hero-ribbons.tsx`, 2D canvas) are masked to the right half on desktop and dimmed behind the copy on phones. It ends with a row of 4 service facts: plain statements with no numbers, each taken from what that service actually includes. The homepage hero is separate and unchanged.
- **Page hero:** `components/sections/PageHero.tsx` is shared and every hero is dark. Service pages (via `ServiceHero`, content in `data/services.ts`) use `motion="sweep"`: ribbons drift across the right half and the copy fades in. Work, About and Why Soluven use `motion="fan"`: ribbons spread from the right edge (blue, green and one faint cream line), the three headline lines rise in one after another, and a hairline separates the hero from the dark section below. The Work hero swaps the ribbons for slowly reshaping topographic contour lines (`components/ui/hero-contours.tsx`), and the Why Soluven hero uses short line fragments that drift, then settle into parallel rules and loosen again: confusion becoming clarity (`components/ui/hero-alignment.tsx`). The About hero weaves fine threads row by row into a plain weave (blue and green weft over faint cream warp), then unravels and starts again (`components/ui/hero-weave.tsx`). Their bottom rows are page-specific; Work's row links to its project cards. A `theme="light"` variant (cream, `--color-blue-deep` accent) is kept for reuse but isn't used right now.
- **Imagery:** no stock photography; abstract/CSS-driven interface mockups only. Portfolio section shows labeled concept work, not fabricated client case studies.
- **No fake stats or testimonials** — sections for these were intentionally removed; do not reintroduce them without real data.

## 5. Motion

- Framer Motion is the animation library; the marquee/ticker is pure CSS (`@keyframes`) to keep client JS minimal.
- **No hover-triggered motion.** Cards, buttons and links don't lift, scale or slide on hover (no `hover:-translate-y`, `hover:scale-*`, `group-hover:translate-x-*`). Hover state is a color or border change only. This keeps client JS and layout work minimal for Core Web Vitals.
- All pointer-driven effects (tilt card, magnetic buttons, cursor light) detect `matchMedia("(pointer: fine)")` on mount and render statically otherwise (touch devices).
- Every animation respects `prefers-reduced-motion: reduce` — see the global rule in `app/globals.css` and the explicit checks in `PageLoader`, `CursorLight`, `MagneticButton`, `TiltCard`.
- Page loader is session-gated (`sessionStorage`) and never blocks content from being present in the DOM — it's a dismissible overlay, not a load gate.

## 6. Tone & Voice

- Bold, confident, direct. Avoid generic agency buzzword-soup ("synergy," "cutting-edge solutions").
- **No em dashes (—) in copy.** Use commas, periods, colons or parentheses instead. This applies to `/data/*.ts` content as well as JSX.
- Copy should work for both local (Pakistan) and international readers: clear English, no region-specific slang, professional but not stiff.

## 7. Open Items

- [ ] Export a dedicated favicon/OG image set from the new SVG `Logo` component (currently `public/Soluvenlogo.png` is unused by the app but left in place).
- [ ] Real portfolio project details, contact-form email delivery, WhatsApp number, and social handles are still pending — see `REQUIREMENTS.md`/`ARCHITECTURE.md` open items.
