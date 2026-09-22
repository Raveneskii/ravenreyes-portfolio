# ravenreyes-portfolio

The personal portfolio of **Raven A. Reyes**, an AI Specialist. A dark, animated
single page presenting his skills, shipped projects, and work history, plus a
print-ready résumé that exports to PDF.

Live: https://ravenreyes-portfolio.vercel.app

## Status

| Piece | State |
| --- | --- |
| Scaffold — Next.js, TypeScript, Tailwind v4, ESLint | done |
| `PRODUCT.md`, `DESIGN.md`, this file | done |
| Content — profile, projects, experience, skills, education | done |
| Single animated page — hero, about, skills, work, experience, contact | done |
| Scrollspy rail — sticky "On this page", IntersectionObserver, `aria-current` | done |
| `/resume` page + print stylesheet | done |
| `public/Raven-Reyes-Resume.pdf` | done — generated from `/resume` |
| SEO — metadata, Open Graph image, sitemap, robots, icon | done |
| Deploy to Vercel | done — auto-deploys from `main` |

## Stack

- Next.js 16 (App Router, Turbopack) · React 19 · TypeScript
- Tailwind v4 (CSS-first tokens in `src/app/globals.css`)
- Framer Motion (`motion`)
- No database, no auth, no backend.

## Run it

```
npm install
npm run dev
```

Then open http://localhost:3000.

Production check: `npm run build`, then `npm start`. Lint: `npm run lint`.

## Editing content

Everything the page shows lives in `src/content/`:

| File | Holds |
| --- | --- |
| `profile.ts` | name, role, tagline, about paragraphs, contact, typing lines |
| `projects.ts` | project cards (Leadline, Luisa & Son, GroundingMat) |
| `experience.ts` | work history |
| `skills.ts` | skill groups |
| `education.ts` | degree, school, year |

Change a value there and the page, the résumé, and the metadata update
together. Nothing else needs touching.

## Regenerating the résumé PDF

The `/resume` page is the single source. Its print stylesheet produces
`public/Raven-Reyes-Resume.pdf`. To regenerate it after a content change:

1. `npm run build` then `npm start` (or `npm run dev`).
2. Print `http://localhost:3000/resume` to PDF with headers/footers off.

On Windows, headless Edge does it in one step:

```powershell
& "C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe" `
  --headless --disable-gpu --no-pdf-header-footer `
  --print-to-pdf="public\Raven-Reyes-Resume.pdf" `
  "http://localhost:3000/resume"
```

Visitors can also just press **Print / Save as PDF** on the page.

## Source material

Content comes from Raven's own résumé (`../resume/resume.html`) and his notes.
Nothing is invented — see the honesty constraint in `PRODUCT.md`.

## Deploy

Vercel, free tier, auto-deploying from `main`. The canonical origin is set in
`src/lib/site.ts` and must match the deployed URL (it feeds `metadataBase`,
`sitemap.xml`, and `robots.txt`). Change that one line if the domain changes.
