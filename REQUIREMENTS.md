# Requirements — Soluven Marketing Website

## 1. Overview

Soluven is a software house/agency. This site is its primary marketing presence: it must establish credibility with both local (Pakistani) and international clients, showcase real project work, and drive inbound contact for web, mobile, ecommerce, and consulting engagements.

## 2. Goals

- Communicate what Soluven does and why a client should hire them, within seconds of landing.
- Showcase real portfolio work to build trust.
- Rank well in traditional search (SEO) and be well-represented in AI-powered answer engines (AEO/GEO) — this is a high priority.
- Make it effortless for a prospective client to get in touch, via form, email, WhatsApp, or social channels.
- Feel premium and bold — not like a templated freelancer site.

## 3. Target Audience

- **International clients** — startups/businesses in the US/EU/etc. looking to outsource web, mobile, or ecommerce work.
- **Local clients** — Pakistani businesses needing the same services.
- Site copy and trust signals (currency framing, availability/timezone, communication style) should work for both without alienating either.

## 4. Functional Requirements

### 4.1 Pages / Sections (Launch Scope)

1. **Home** — hero/value proposition, services overview, featured portfolio pieces, social proof, CTA to contact.
2. **Services** — full range: Web Development, Mobile App Development, Ecommerce Setup, Consulting. Each with a short description and what's included.
3. **Portfolio** — real client/personal projects. Project list TBD (to be supplied later); structure should support adding projects easily (title, description, tech used, link/screenshot).
4. **About** — company story/positioning, why Soluven, team/founder info.
5. **Contact** — contact form, direct email link, WhatsApp click-to-chat link, and social media links.

### 4.2 Contact Page Requirements

- Contact form: name, email, message (minimum); submits to a backend/email service (endpoint TBD).
- Email: direct `mailto:` link.
- WhatsApp: click-to-chat link (`wa.me/<number>`), number TBD.
- Socials: icon links (e.g. LinkedIn, Instagram, X/Twitter, Facebook — confirm which accounts exist).

### 4.3 Portfolio

- Must support real, currently-existing client/personal projects.
- Exact project list to be provided later — build the section as a reusable/data-driven component so projects can be added without restructuring the page.

## 5. Non-Functional Requirements

### 5.1 SEO / AEO / GEO

This is a high priority, not an afterthought:

- Semantic HTML, proper heading hierarchy, descriptive metadata (title/description) per page.
- Structured data (JSON-LD) for Organization, Service, and BreadcrumbList at minimum.
- Fast Core Web Vitals (see Performance below) — a major ranking factor.
- Clean, crawlable URLs; sitemap.xml and robots.txt.
- Content written in clear, directly-answerable language so AI answer engines (ChatGPT Search, Perplexity, Gemini) can extract and cite it accurately.
- Open Graph / Twitter Card metadata for link previews.

### 5.2 Performance

- Target Lighthouse scores of 90+ across Performance, Accessibility, Best Practices, SEO.
- Optimized images (Next.js `<Image>`), minimal client-side JS where server components suffice.

### 5.3 Responsiveness

- Fully responsive: mobile, tablet, desktop. Mobile-first, since a large share of local traffic will be mobile.

### 5.4 Accessibility

- WCAG AA color contrast, keyboard navigability, semantic landmarks, alt text on all images.

### 5.5 Browser Support

- Latest 2 versions of Chrome, Safari, Firefox, Edge; iOS Safari and Chrome Android.

## 6. Hosting & Deployment

- Hosted on Vercel.
- Deploys automatically from the `main` branch.

## 7. Open Items

- [ ] Final portfolio project list (names, descriptions, links)
- [ ] Contact form backend/email service choice
- [ ] WhatsApp business number
- [ ] Confirmed social media accounts/handles
- [ ] Final logo file(s) in required formats (SVG/PNG, favicon set)
- [ ] Domain confirmation (assumed `soluven.com` — placeholder in README)
