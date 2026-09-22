# Design

The visual system, and the rules that hold it. Read this before writing UI.

## Direction

Dark, animated, engineered. Based on the Lightswind `portfolio01` reference
(the "peg"): near-black canvas, one bright accent, a typing hero, a rotating
portrait, scroll reveals, and an animated mobile menu. Rebuilt as our own code
rather than copied from the paid template.

## Tokens

Defined once in `src/app/globals.css` under `@theme`. Use the Tailwind
utilities they generate — do not hardcode hex values in components.

| Token | Dark | Light | Use |
| --- | --- | --- | --- |
| `--color-ink` | `#0a0a0a` | `#fafafa` | page background |
| `--color-surface` | `#111113` | `#ffffff` | cards, raised blocks |
| `--color-line` | `#26262c` | `#e4e4e7` | default borders, dividers |
| `--color-line-strong` | `#34343c` | `#d4d4d8` | hover borders, chips |
| `--color-fg` | `#f4f4f5` | `#18181b` | primary text |
| `--color-muted` | `#a1a1aa` | `#52525b` | body text |
| `--color-faint` | `#71717a` | `#71717a` | metadata, labels |
| `--color-accent` | `#2dd4bf` | `#0f766e` | the single accent |
| `--color-on-accent` | `#04211f` | `#ffffff` | text and icons on an accent fill |
| `--color-grid` | `rgba(255,255,255,0.04)` | `rgba(0,0,0,0.05)` | hero grid lines |

The accent is the teal family carried over from Raven's résumé. It is the only
chromatic colour in the UI.

## Theme

Dark is the base. Light is a `.light` class on `<html>`.

- `@theme` holds the dark values; `.light` redefines the same custom properties.
  Tailwind v4 compiles `bg-ink` to `var(--color-ink)`, so every utility flips at
  once. **No component branches on the theme.**
- An inline script in `layout.tsx` sets the class before first paint — stored
  choice first, then `prefers-color-scheme`. No flash of the wrong theme.
- The visible icon is chosen in CSS via the `light:` variant
  (`@custom-variant light`), so it is correct before hydration.
  `ThemeToggle` reads the class through `useSyncExternalStore` only to keep its
  `aria-label` accurate.
- The accent darkens on light: teal-400 clears AA on a dark canvas, but on
  `#fafafa` it drops to ~3.6:1, so light uses teal-700.
- The résumé sheet is deliberately theme-independent — it is a paper document, so
  it keeps its own light palette in both themes.

## Type

- **Geist Sans** (`--font-sans`) for all prose and headings.
- **Geist Mono** (`--font-mono`) for section indices, stack tags, dates, and
  the marquee. Mono is a label voice, never body copy.
- Headings are tight-tracked and semibold. The hero name is the largest type on
  the site; nothing else competes with it.

## Layout

- Max content width `max-w-[1440px]`, gutters `px-5` / `sm:px-8`.
- On `xl` and up the home page is a two-column grid: a `180px` scrollspy rail,
  then the content. Below `xl` the rail is hidden and the content is full width.
- Sections are separated by `border-line` rules and generous vertical rhythm
  (`py-20` / `lg:py-28`).
- Two-column grids collapse to one column below `lg`.

## Scrollspy rail

`src/components/scrollspy.tsx`, mounted only on the home page, `xl` and up.

- A labeled `<nav aria-label="On this page">` of same-document fragment links.
- An `IntersectionObserver` watches each section target; the active section is
  the last one whose top has crossed the activation line. Reading geometry in the
  callback keeps it exact at section boundaries — `isIntersecting` alone reports
  true when two adjacent sections merely touch.
- Exactly one link carries `aria-current="location"` at all times.
- The indicator is a `2px` accent bar that slides between rows, plus a stronger
  (white, medium-weight) label. Both follow the section in view.
- The last section is pinned when the page bottoms out, since it is too short to
  reach the activation line.

**One scroll offset, one place.** `html { scroll-padding-top }` in `globals.css`
is the only anchor offset. `scrollspy.tsx`'s `HEADER_OFFSET` must equal it.
Never add `scroll-margin-top` to the targets — the two stack, and sections land
at twice the offset.

## Materials

- **Grid backdrop** behind the hero only: `.backdrop-grid`, masked with a radial
  fade so it dissolves into the canvas.
- **Cards**: `rounded-2xl`, `border-line`, `bg-surface/60`; border lightens on
  hover. No drop shadows on the dark canvas.
- **Portrait**: circular, with a rotating conic-gradient arc and a counter-
  spinning dashed ring. The only place a glow is allowed.

## Motion

Motion is layered, never load-bearing.

- **Entrance (above the fold):** the `Enter` component — pure CSS
  (`animate-enter`), so it runs without JavaScript and is neutralised by the
  reduced-motion media query.
- **Reveal (below the fold):** the `Reveal` component. Content renders visible;
  only after hydration, and only for off-screen elements, does it hide and
  animate in. A crawler and a no-JS visitor see everything.
- **Continuous:** the typing hero line, the floating portrait, the tool marquee,
  and the scroll progress bar.
- **Reduced motion:** `MotionConfig reducedMotion="user"` plus a global
  `prefers-reduced-motion` rule. When set, every animation resolves instantly.

## Accessibility

- Keyboard-operable nav and menu; visible focus ring (`:focus-visible`).
- Alt text on the portrait; decorative marks are `aria-hidden`.
- Contrast held to AA on the dark palette; the accent is used for text only
  where it meets contrast against `--color-ink`.
- Colour is never the only signal.
