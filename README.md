# Soluven — Marketing Website

Soluven is a software house offering web development, mobile app development, ecommerce setup, and consulting services to local (Pakistan) and international clients. This repo contains the marketing/company website.

## Tech Stack

- **Framework:** Next.js (App Router) + TypeScript
- **Styling:** Tailwind CSS
- **Hosting:** Vercel
- **Fonts:** Sora (headings), Manrope (body/UI)

See `ARCHITECTURE.md` for full details.

## Getting Started

```bash
# Install dependencies
npm install

# Run the dev server
npm run dev

# Open http://localhost:3000
```

### Build & Deploy

```bash
npm run build
npm run start   # local production preview
```

Pushes to `main` auto-deploy to Vercel.

## Environment Variables

Create a `.env.local` file in the project root:

```
NEXT_PUBLIC_SITE_URL=https://soluven.com
CONTACT_FORM_ENDPOINT=
NEXT_PUBLIC_WHATSAPP_NUMBER=
```

(Fill in real values once the contact form backend and WhatsApp number are finalized.)

## Project Structure

See `ARCHITECTURE.md` for the folder layout and key decisions.

## Docs

| File | Purpose |
|---|---|
| `REQUIREMENTS.md` | Functional & non-functional requirements |
| `DESIGN.md` | Colors, typography, spacing, UI conventions |
| `ARCHITECTURE.md` | Tech stack, folder structure, key decisions |
| `CLAUDE.md` | Conventions/instructions for AI-assisted development in this repo |

## Status

🚧 In active development — no fixed launch deadline. Portfolio project list to be finalized.
