# CLAUDE.md — Conventions for AI-assisted work in this repo

This file tells Claude (or any AI assistant) how to work in the Soluven marketing website repo. Read `REQUIREMENTS.md`, `DESIGN.md`, and `ARCHITECTURE.md` first for full context.

## Project Summary

Soluven — a software house's marketing website. Next.js (App Router) + TypeScript + Tailwind CSS, hosted on Vercel. Audience: local (Pakistan) + international clients. SEO/AEO/GEO is a top priority.

## Ground Rules

- **Server components by default.** Only mark a component `"use client"` when it genuinely needs interactivity (contact form, nav toggle, etc.). Don't default to client components.
- **Data-driven content.** Services and Portfolio content live in `/data/*.ts` as typed arrays — don't hardcode project/service content directly into JSX. New portfolio projects should be addable by editing `/data/portfolio.ts` alone.
- **Use the design tokens.** Colors, fonts, and spacing must come from the values in `DESIGN.md` / the Tailwind config — don't introduce ad-hoc colors or fonts.
- **Every page needs metadata.** New pages/routes must export proper `metadata` (title, description, Open Graph) via the Next.js Metadata API — see `lib/seo.ts`.
- **Structured data matters here.** When adding a page that represents an entity (service, project, org info), check whether it needs JSON-LD and use the shared helper in `lib/seo.ts`.
- **Accessibility isn't optional.** Semantic HTML, alt text, keyboard-navigable interactive elements, AA contrast — check `DESIGN.md` for color pairing notes.
- **Mobile-first.** Build and test the mobile layout first, then expand up to tablet/desktop breakpoints.
- **Keep client-side JS minimal.** Performance (Core Web Vitals) directly affects SEO — avoid unnecessary client-side libraries or heavy animation frameworks.

## Commands

```bash
npm run dev      # local dev server
npm run build    # production build
npm run lint     # lint
```

## When Making Changes

- If adding a new page/route, update `app/sitemap.ts` if it should be indexed.
- If adding a new portfolio project, add it to `data/portfolio.ts` — do not create one-off page components per project unless `ARCHITECTURE.md`'s open item on detail pages has been resolved.
- If touching color/typography, update `DESIGN.md` to keep it in sync with the code.
- Flag any open item from `REQUIREMENTS.md` or `ARCHITECTURE.md` you're blocked on rather than guessing (e.g. contact form backend, WhatsApp number, final logo assets) — check the "Open Items" sections in those files first.

## Out of Scope (for now)

- No CMS integration — content is static/local-data driven until content-update frequency requires otherwise.
- No blog/pricing pages at launch (not in current requirements).

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
