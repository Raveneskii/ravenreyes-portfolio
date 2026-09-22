"use client";

import { useEffect, useRef } from "react";

/* Decorative, pointer-reactive backdrop. It writes two normalised coordinates
   (--px / --py, 0..1) onto itself; the grid parallaxes and the glow follows via
   CSS, so nothing re-renders per frame.

   Skipped entirely for reduced-motion and for coarse pointers (touch), where
   the element keeps its default centred state. Content is never hidden: the
   layer is behind everything and ignores pointer events. */
export function PointerBackdrop() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    const coarse = window.matchMedia("(hover: none)");
    if (reduce.matches || coarse.matches) return;

    const target = { x: 0.5, y: 0.25 };
    const current = { x: 0.5, y: 0.25 };
    let frame = 0;

    const tick = () => {
      current.x += (target.x - current.x) * 0.09;
      current.y += (target.y - current.y) * 0.09;
      el.style.setProperty("--px", current.x.toFixed(4));
      el.style.setProperty("--py", current.y.toFixed(4));

      const settled =
        Math.abs(target.x - current.x) < 0.0005 &&
        Math.abs(target.y - current.y) < 0.0005;
      frame = settled ? 0 : requestAnimationFrame(tick);
    };

    const onMove = (event: PointerEvent) => {
      target.x = event.clientX / window.innerWidth;
      target.y = event.clientY / window.innerHeight;
      if (!frame) frame = requestAnimationFrame(tick);
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onMove);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div ref={ref} aria-hidden className="pointer-backdrop">
      <div className="pointer-backdrop__grid" />
      <div className="pointer-backdrop__glow" />
    </div>
  );
}
