# ravenreyes-portfolio

The personal portfolio of **Raven A. Reyes** — AI Video Editor & AI Specialist.
A dark, animated single page presenting his skills, shipped projects, and work
history, plus a résumé that exports to two PDFs: a designed one and an ATS-plain
one.

Live: https://ravenreyes-portfolio.vercel.app

## Status

| Piece | State |
| --- | --- |
| Scaffold — Next.js, TypeScript, Tailwind v4, ESLint | done |
| `PRODUCT.md`, `DESIGN.md`, this file | done |
| Content — profile, projects, experience, skills, education | done |
| Single animated page — hero, about, skills, work, experience, contact | done |
| Scrollspy rail — sticky "On this page", IntersectionObserver, `aria-current` | done |
| Dark / light theme toggle — pre-paint script, persisted, no flash | done |
| `/resume` page + print stylesheet | done |
| `/resume/ats` plain ATS route | done — single column, no icons, standard headings |
| `public/Raven-Reyes-Resume.pdf` | done — generated from `/resume` |
| `public/Raven-Reyes-Resume-ATS.pdf` | done — generated from `/resume/ats` |
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
| `projects.ts` | project cards (Jet, Luisa & Son, GroundingMat, Leadline) |
| `experience.ts` | work history |
| `skills.ts` | skill groups |
| `education.ts` | degree, school, year |
| `resume.ts` | the résumé's own copy — headline, summary, skill groups, video projects. Imports the rest, so facts have one source. |

Change a value there and the page, the résumé, and the metadata update
together. Nothing else needs touching.

## Regenerating the résumé PDFs

`/resume` and `/resume/ats` are the two sources. `/resume/ats` is deliberately
plain — one column, no icons, no colour — so an ATS parser can read it. Do not
add design to it.

1. `npm run build` then `npm start` (or `npm run dev`).
2. Print each page to PDF with headers/footers off.

On Windows, headless Edge does both in one step:

```powershell
$edge = "C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"
& $edge --headless --disable-gpu --no-pdf-header-footer `
  --print-to-pdf="public\Raven-Reyes-Resume.pdf" "http://localhost:3000/resume"
& $edge --headless --disable-gpu --no-pdf-header-footer `
  --print-to-pdf="public\Raven-Reyes-Resume-ATS.pdf" "http://localhost:3000/resume/ats"
```

Visitors can also press **Print / Save as PDF** on the page.

**If a build fails with `EPERM` on a `.next` path**, a stale `next` process or
OneDrive sync is holding the folder. Kill `node` processes whose command line
contains `next`, delete `.next`, and rebuild.

## Source material

Content comes from Raven's own résumé, his notes, and the work he actually did.
Nothing is invented. In particular the résumé lists **no paid clients and no ad
metrics** — he has not had paid video work yet, and the two video projects are
his own. Keep it that way.

## Deploy

Vercel, free tier, auto-deploying from `main`. The canonical origin is set in
`src/lib/site.ts` and must match the deployed URL (it feeds `metadataBase`,
`sitemap.xml`, and `robots.txt`). Change that one line if the domain changes.
