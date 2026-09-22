# Product

## Platform

web (Next.js App Router, static; Vercel free tier)

## Who it's for

One audience: **the evaluator.** A hiring manager, a prospective client, or
anyone who lands here cold from a link — a résumé, an application, a DM —
usually on a phone, with a couple of minutes. They will not sign up. Their job
is to decide, by looking, whether the work is real and worth a conversation.

## Purpose

The personal portfolio of **Raven A. Reyes**, an AI Specialist. It presents his
skills, shipped projects, and work history as a fast, animated single page,
with a print-ready résumé on its own route. Success means the evaluator
understands what he does in the first screen and can reach him in one more.

## Positioning

This is a real portfolio, not a demo. Every project, role, date, and skill
traces to his own résumé and his own words. Nothing is invented — no stock
claims, no fabricated metrics, no client logos.

## Operating context

- Reached by link, judged on a phone first.
- No account, no login, no backend of any kind.
- Explored by scrolling, not by reading a spec.

## Capabilities and constraints

- **Static only.** No database, no auth, no server actions. Content lives in
  `src/content/*.ts` and is compiled at build time.
- **Free tier only.** Vercel free. No paid services, no licensed fonts.
- **Real work only.** If Raven did not supply it, it does not ship.
- **Résumé has one source.** The `/resume` page is the document; the print
  stylesheet exports `public/Raven-Reyes-Resume.pdf` from it. Edit the content
  once, regenerate the PDF.
- Contact is mailto and tel links only. There is no contact form.

## Principles

1. The work and the person lead; prose supports.
2. Motion is decoration, never a gate — the page is fully readable with
   JavaScript disabled and with reduced motion enabled.
3. Phone first.
4. Quiet metadata: dates, stacks, and categories are labels, never headlines.
