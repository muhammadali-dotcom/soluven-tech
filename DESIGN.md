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
- Both blue and green are used as bright, controlled accents — no purple/violet/gold/dark gradients.
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
- Minimal corner rounding (`rounded-md`/`rounded-lg`), thin (1px) borders, no glassmorphism, no rounded-card-heavy SaaS look.

## 4. Components & Conventions

- **Buttons:** Primary (blue fill, ink text), Secondary (ink border outline), Inverted (for dark backgrounds), Manrope 600–700, `rounded-md`.
- **Cards** (Services, Projects): thin border, `--color-surface` tint, no heavy shadow.
- **Icons:** Lucide, used sparingly (minimal abstract icon per service card, not colorful icon collections).
- **Imagery:** no stock photography; abstract/CSS-driven interface mockups only. Portfolio section shows labeled concept work, not fabricated client case studies.
- **No fake stats or testimonials** — sections for these were intentionally removed; do not reintroduce them without real data.

## 5. Motion

- Framer Motion is the animation library; the marquee/ticker is pure CSS (`@keyframes`) to keep client JS minimal.
- All pointer-driven effects (tilt card, magnetic buttons, cursor light) detect `matchMedia("(pointer: fine)")` on mount and render statically otherwise (touch devices).
- Every animation respects `prefers-reduced-motion: reduce` — see the global rule in `app/globals.css` and the explicit checks in `PageLoader`, `CursorLight`, `MagneticButton`, `TiltCard`.
- Page loader is session-gated (`sessionStorage`) and never blocks content from being present in the DOM — it's a dismissible overlay, not a load gate.

## 6. Tone & Voice

- Bold, confident, direct — avoid generic agency buzzword-soup ("synergy," "cutting-edge solutions").
- Copy should work for both local (Pakistan) and international readers: clear English, no region-specific slang, professional but not stiff.

## 7. Open Items

- [ ] Export a dedicated favicon/OG image set from the new SVG `Logo` component (currently `public/Soluvenlogo.png` is unused by the app but left in place).
- [ ] Real portfolio project details, contact-form email delivery, WhatsApp number, and social handles are still pending — see `REQUIREMENTS.md`/`ARCHITECTURE.md` open items.
