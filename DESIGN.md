# Design & Style Guide — Soluven

Clean, clear, simple — content and typography carry the page, not color. Inspired by fleekbiz.com: a near-monochrome neutral palette with a single accent used sparingly.

## 1. Color Palette

| Token | Hex | Usage |
|---|---|---|
| `--color-background` | `#FFF8EE` (Warm Cream) | Primary background |
| `--color-text` | `#241F1A` | Body/heading text |
| `--color-text-muted` | `#5C5248` | Secondary text |
| `--color-surface` | `#F0DFBA` | Card/section surface, distinct from background |
| `--color-border` | `#C9AC78` | Dividers, card borders |
| `--color-blue` | `#2F6FB3` | The single accent — primary CTA fill, key action links (mailto/WhatsApp), quantified outcome highlights. Not used for nav hovers, decorative gradients, or general body emphasis. |
| `--color-blue-hover` | `#245789` | Hover state for the accent |

**Notes:**
- Only one accent color exists now (blue) — green was removed. Keep it rare: one clear primary action per view should use it, not every interactive element.
- AA contrast confirmed: white-on-blue ≥ 5:1, blue-on-cream ≥ 4.9:1, text/muted-on-background and -on-surface all ≥ 6:1.

## 2. Typography

Single typeface site-wide (per user reference, fleekbiz.com) — a clean, modern geometric sans rather than mixing a display + body font.

| Role | Font | Weight |
|---|---|---|
| Main headings (H1–H3) | Plus Jakarta Sans | 700–800 |
| Body text | Plus Jakarta Sans | 400–500 |
| Buttons / navigation | Plus Jakarta Sans | 600 |
| Small labels | Plus Jakarta Sans | 600, with slightly increased letter-spacing |

**Notes:**
- Load both via `next/font` (Google Fonts) for performance and no layout shift.
- Suggested scale (to confirm during build): H1 ~48–64px, H2 ~32–40px, H3 ~24–28px, body ~16–18px, labels ~12–13px with `letter-spacing: 0.05em`.

## 3. Spacing & Layout

- Use a consistent spacing scale (Tailwind default 4px-based scale is a good fit: 4, 8, 12, 16, 24, 32, 48, 64, 96).
- Max content width: ~1280px, with generous side padding (24px mobile, 64–96px desktop).
- Section vertical rhythm: generous — 80–120px between major sections on desktop, 48–64px on mobile, to support the "premium/bold" feel (avoid a cramped, template-y layout).

## 4. Components & Conventions

- **Buttons:** Primary (blue fill, white text), Secondary (neutral border outline), Inverted (for use on dark backgrounds), all in Manrope 600. Generous padding, rounded corners (`rounded-lg`).
- **Cards** (Services, Portfolio): surface color distinct from page background, subtle shadow or border, consistent radius matching buttons.
- **Icons:** pick one icon set (e.g. Lucide) and use consistently.
- **Imagery:** portfolio/project screenshots should be real, high-quality; avoid stock photography that undercuts the "premium, real work" positioning.

## 5. Tone & Voice

- Bold, confident, direct — avoid generic agency buzzword-soup ("synergy," "cutting-edge solutions").
- Copy should work for both local (Pakistan) and international readers: clear English, no region-specific slang, professional but not stiff.

## 6. Open Items

- [ ] Finalize logo files (SVG preferred, plus favicon set: 16/32/180px, etc.)
- [ ] Confirm icon library (using Lucide by default)
