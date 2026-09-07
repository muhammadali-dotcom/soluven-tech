# Architecture — Soluven Marketing Website

## 1. Tech Stack

- **Framework:** Next.js (App Router), TypeScript
- **Styling:** Tailwind CSS
- **Fonts:** Plus Jakarta Sans via `next/font/google`
- **Hosting/Deploy:** Vercel (auto-deploy from `main`)
- **Forms:** Contact form posts to a backend/email service (provider TBD — e.g. Resend, Formspree, or a custom API route)

## 2. Key Decisions

- **App Router over Pages Router** — current Next.js default, better support for server components, layouts, and metadata API (important given the SEO/AEO priority).
- **Server components by default** — keep client-side JS minimal; only interactive pieces (contact form, nav toggle, any animations) are client components.
- **Data-driven Portfolio & Services sections** — content lives in typed local data files (not hardcoded JSX) so projects/services can be added or edited without touching layout code. Sets up cleanly for a future CMS migration if needed.
- **Structured data via the Metadata API** — JSON-LD for Organization/Service/Breadcrumb generated per-page rather than hand-written `<script>` tags scattered through components.
- **No CMS at launch** — content is static/local-data driven, given portfolio content isn't finalized yet and this keeps the initial build simple. Revisit if content-update frequency grows.

## 3. Folder Structure

```
soluven/
├── app/
│   ├── layout.tsx              # Root layout, fonts, global metadata
│   ├── page.tsx                # Home
│   ├── services/
│   │   └── page.tsx
│   ├── portfolio/
│   │   ├── page.tsx
│   │   └── [slug]/page.tsx     # Individual project detail (if needed)
│   ├── about/
│   │   └── page.tsx
│   ├── contact/
│   │   └── page.tsx
│   ├── api/
│   │   └── contact/route.ts    # Contact form submission handler
│   ├── sitemap.ts
│   └── robots.ts
├── components/
│   ├── ui/                     # Buttons, inputs, cards — shared primitives
│   ├── layout/                 # Header, Footer, Nav
│   └── sections/                # Hero, ServicesGrid, PortfolioGrid, ContactForm, etc.
├── data/
│   ├── services.ts              # Typed service entries
│   └── portfolio.ts             # Typed project entries (populate once list is finalized)
├── lib/
│   ├── seo.ts                   # Shared metadata/JSON-LD helpers
│   └── constants.ts             # Site-wide constants (contact info, socials, WhatsApp #)
├── public/
│   ├── images/
│   └── favicon assets
├── styles/
│   └── globals.css              # Tailwind entry + CSS variables (color tokens from DESIGN.md)
├── README.md
├── REQUIREMENTS.md
├── DESIGN.md
├── ARCHITECTURE.md
├── CLAUDE.md
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

## 4. Data Flow

- **Services / Portfolio:** static typed arrays in `/data`, imported directly into server components at build time. No client fetching needed at launch.
- **Contact form:** client component → `POST /api/contact` → email/notification service. No database needed at launch (add one later only if lead-tracking becomes a requirement).

## 5. SEO/AEO Implementation Notes

- Central `lib/seo.ts` generates consistent `<title>`, meta description, Open Graph, and Twitter Card tags per page.
- JSON-LD (Organization, Service, Breadcrumb) injected via the Metadata API's `other` field or a small server-rendered `<script type="application/ld+json">`.
- `app/sitemap.ts` and `app/robots.ts` use Next's built-in file conventions rather than static files.

## 6. Open Items

- [ ] Choose contact form backend/email provider
- [ ] Decide whether Portfolio needs individual detail pages (`[slug]`) or a single-page grid is sufficient — depends on the finalized project list
- [ ] Confirm domain and set `NEXT_PUBLIC_SITE_URL`
