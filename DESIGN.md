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

Derived utility shades (not new brand colors, just tints of ink for hairline UI, kept out of the 5 core tokens): `--color-border` (ink @ 15%), `--color-surface` (ink @ 4% over cream), `--color-blue-hover` (blue mixed toward ink).

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

- Loaded via `next/font/google` in `app/layout.tsx` as `--font-sora` / `--font-manrope`, mapped to `--font-heading` / `--font-body`.
- Editorial headings: large size, tight tracking; body: comfortable line-height, 16px minimum.

## 3. Spacing & Layout

- Max content width: ~1280px, generous side padding (24px mobile, 64–96px desktop).
- Section vertical rhythm: 80–120px desktop, 48–64px mobile.
- Minimal corner rounding (`rounded-md`/`rounded-lg`), thin (1px) borders, no rounded-card-heavy SaaS look. `rounded-full` is reserved for small circular icon containers, avatars and dots, not for text chips or cards.
- **No drop shadows anywhere.** Elevation is expressed with a 1px `border border-[var(--color-border)]`, never `shadow-*`, `drop-shadow-*` or a custom `shadow-[...]` value.
- **No glassmorphism.** No `backdrop-blur` over translucent fills. Surfaces sitting above other content (sticky header, dropdowns, dialogs, floating mockup cards) use opaque `--color-background` or `--color-surface`.
- **No colored left stripes.** Don't use `border-l-*` as an accent. Use a top border, a background tint, or drop the accent.
- **No 3-across feature card rows.** Feature/benefit grids are 1- or 2-column, or an asymmetric layout. Avoid `sm:grid-cols-3` and similar.

## 4. Components & Conventions

- **Buttons:** Primary (blue fill, ink text), Secondary (ink border outline), Inverted (for dark backgrounds), Manrope 600–700, `rounded-md`.
- **Cards** (Services, Projects): thin 1px border, `--color-surface` tint, no shadow of any kind.
- **Icons:** `@phosphor-icons/react` (import from the `@phosphor-icons/react/dist/ssr` subpath so icons stay server-rendered), used sparingly: one minimal abstract icon per service card, not colorful icon collections. Lucide is no longer used. **No emoji glyphs in UI or data** and **no checkmark-bullet lists** (`CheckCircle` rows): use plain text, numbered markers or dots instead. **No sparkle icons or ✦-style glyphs.**
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
