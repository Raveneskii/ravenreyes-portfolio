"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/cn";

export type ScrollspyItem = {
  id: string;
  label: string;
};

/* Row height in px. The sliding accent bar is positioned by multiplying this by
   the active index, so the constant and the `h-9` class must stay in sync. */
const ROW = 36;

/* The activation line, just under the sticky header. Must match
   `scroll-padding-top` in globals.css so a click and the spy agree. */
const HEADER_OFFSET = 88;

export function Scrollspy({ items }: { items: readonly ScrollspyItem[] }) {
  const [active, setActive] = useState(items[0]?.id ?? "");

  useEffect(() => {
    const targets = items
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => Boolean(el));
    if (targets.length === 0) return;

    /* The active section is the last one whose top has crossed the activation
       line. Reading geometry here (rather than trusting `isIntersecting`) keeps
       it exact at section boundaries, where two adjacent sections touch the
       line and an edge-touching intersection would otherwise report as active. */
    const update = () => {
      const doc = document.documentElement;
      const atBottom =
        window.innerHeight + window.scrollY >= doc.scrollHeight - 4;

      if (atBottom) {
        /* The last section is too short to ever reach the line, so pin it when
           the page bottoms out. */
        const last = items[items.length - 1];
        if (last) setActive(last.id);
        return;
      }

      let current = items[0]?.id ?? "";
      for (const item of items) {
        const el = document.getElementById(item.id);
        if (el && el.getBoundingClientRect().top <= HEADER_OFFSET + 1) {
          current = item.id;
        }
      }
      setActive(current);
    };

    /* Watching every section target is what drives the spy; the rootMargin
       offsets the activation zone down by the sticky header's height. */
    const observer = new IntersectionObserver(update, {
      rootMargin: `-${HEADER_OFFSET}px 0px -60% 0px`,
      threshold: [0, 1],
    });

    targets.forEach((target) => observer.observe(target));
    window.addEventListener("scroll", update, { passive: true });
    update();

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", update);
    };
  }, [items]);

  const activeIndex = Math.max(
    0,
    items.findIndex((item) => item.id === active),
  );

  return (
    <nav aria-label="On this page" className="text-sm">
      <p className="mb-4 font-mono text-[11px] uppercase tracking-widest text-faint">
        On this page
      </p>
      <div className="relative">
        <span
          aria-hidden
          className="absolute left-0 top-0 z-10 w-[2px] rounded-full bg-accent transition-transform duration-300 ease-out motion-reduce:transition-none"
          style={{ height: ROW, transform: `translateY(${activeIndex * ROW}px)` }}
        />
        <ul className="border-l border-line">
          {items.map((item) => {
            const isActive = item.id === active;
            return (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  aria-current={isActive ? "location" : undefined}
                  className={cn(
                    "flex h-9 items-center pl-4 transition-colors",
                    isActive
                      ? "font-medium text-fg"
                      : "text-faint hover:text-muted",
                  )}
                >
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
