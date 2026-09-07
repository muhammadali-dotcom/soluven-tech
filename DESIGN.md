# Design & Style Guide — Soluven

Bold, premium agency aesthetic. Warm, confident, not corporate-sterile.

## 1. Color Palette

| Token | Hex | Usage |
|---|---|---|
| `--color-background` | `#FFF8EE` (Warm Cream) | Primary background |
| `--color-blue` | `#63CBF8` | Accent — links, highlights, secondary CTAs |
| `--color-green` | `#7ED957` | Accent — success states, primary CTAs, badges |

**Notes / to confirm:**
- Only a background + two accents are defined so far. Before build, define: a near-black/dark **text** color (don't default to pure `#000000` against the cream background — something like a warm charcoal reads more premium), a **surface** color for cards (slightly off from the cream background), and **border/muted** tones.
- Define hover/active state variants of blue and green (e.g. 10% darker) for interactive elements.
- Confirm AA contrast for text-on-cream and white-text-on-accent combinations before finalizing button styles.

## 2. Typography

| Role | Font | Weight |
|---|---|---|
| Main headings (H1–H3) | Sora | 600–700 |
| Body text | Manrope | 400–500 |
| Buttons / navigation | Manrope | 600 |
| Small labels | Manrope | 600, with slightly increased letter-spacing |

**Notes:**
- Load both via `next/font` (Google Fonts) for performance and no layout shift.
- Suggested scale (to confirm during build): H1 ~48–64px, H2 ~32–40px, H3 ~24–28px, body ~16–18px, labels ~12–13px with `letter-spacing: 0.05em`.

## 3. Spacing & Layout

- Use a consistent spacing scale (Tailwind default 4px-based scale is a good fit: 4, 8, 12, 16, 24, 32, 48, 64, 96).
- Max content width: ~1280px, with generous side padding (24px mobile, 64–96px desktop).
- Section vertical rhythm: generous — 80–120px between major sections on desktop, 48–64px on mobile, to support the "premium/bold" feel (avoid a cramped, template-y layout).

## 4. Components & Conventions

- **Buttons:** Primary (green fill), Secondary (blue outline or blue fill — decide during build), both in Manrope 600. Generous padding, rounded corners (define radius — suggest 8–12px for a modern-but-not-childish feel).
- **Cards** (Services, Portfolio): surface color distinct from page background, subtle shadow or border, consistent radius matching buttons.
- **Icons:** pick one icon set (e.g. Lucide) and use consistently.
- **Imagery:** portfolio/project screenshots should be real, high-quality; avoid stock photography that undercuts the "premium, real work" positioning.

## 5. Tone & Voice

- Bold, confident, direct — avoid generic agency buzzword-soup ("synergy," "cutting-edge solutions").
- Copy should work for both local (Pakistan) and international readers: clear English, no region-specific slang, professional but not stiff.

## 6. Open Items

- [ ] Finalize logo files (SVG preferred, plus favicon set: 16/32/180px, etc.)
- [ ] Define full neutral/text/surface color set beyond the 3 tokens above
- [ ] Confirm border radius and shadow scale
- [ ] Confirm icon library
