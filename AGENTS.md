<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Project notes

## Commands

- `npm run dev` — dev server (Turbopack) on :3000
- `npm run build` — production build (runs TypeScript)
- `npm run lint` — ESLint
- `npm start` — serve the production build

## Layout

- `src/app/` — routes. `page.tsx` is the single animated page; `resume/page.tsx`
  is the print-ready résumé.
- `src/components/` — nav, footer, portrait, project card, and the two motion
  primitives (`enter.tsx`, `reveal.tsx`).
- `src/content/` — all copy and data. Edit here, not in components.
- `src/lib/` — `site.ts` (canonical origin), `cn.ts` (class merge).

## Rules

- **Read `DESIGN.md` before writing UI.** The palette and type are locked there.
- **Never hardcode a colour.** Both themes come from the tokens in
  `globals.css`; a literal hex will only be correct in one of them. Use
  `text-on-accent` for text on an accent fill, and the `light:` variant when a
  style must differ per theme.
- **One anchor offset.** `html { scroll-padding-top }` in `globals.css` is the
  only source. `HEADER_OFFSET` in `scrollspy.tsx` must equal it. Never add
  `scroll-margin-top` to section targets — the offsets stack.
- **The scrollspy must always have exactly one `aria-current="location"`.**
- **No hardcoded colours.** Use the tokens from `globals.css`; never inline a
  hex value in a component.
- **Motion must never hide content.** Above-the-fold uses CSS `Enter`; below-the-
  fold uses `Reveal`, which renders visible and only animates after hydration.
  Never render `opacity: 0` on the server.
- **One source for the résumé.** `/resume` is the document; regenerate
  `public/Raven-Reyes-Resume.pdf` from it. See `README.md`.
- **The backdrop is decorative.** `pointer-backdrop.tsx` stays behind everything
  (`z-index: -10`, `pointer-events: none`) and must never gate content. Motion it
  drives is skipped under reduced-motion and on touch.
- **Real content only.** Nothing is invented. Placeholders never ship.
