"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "motion/react";

type TypingTextProps = {
  lines: readonly string[];
  className?: string;
};

export function TypingText({ lines, className }: TypingTextProps) {
  const reduce = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (reduce) return;
    const current = lines[index % lines.length];
    const done = text === current;
    const empty = text === "";

    let delay = deleting ? 38 : 74;
    if (done && !deleting) delay = 1500;
    if (empty && deleting) delay = 260;

    const timer = setTimeout(() => {
      if (!deleting && !done) {
        setText(current.slice(0, text.length + 1));
      } else if (!deleting && done) {
        setDeleting(true);
      } else if (deleting && !empty) {
        setText(current.slice(0, text.length - 1));
      } else {
        setDeleting(false);
        setIndex((i) => (i + 1) % lines.length);
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [text, deleting, index, lines, reduce]);

  const shown = reduce ? lines[0] : text;

  return (
    <span className={className} aria-label={lines[0]}>
      <span aria-hidden>{shown}</span>
      <span
        aria-hidden
        className="ml-0.5 inline-block w-[2px] translate-y-[2px] self-stretch bg-accent animate-blink"
        style={{ height: "1em" }}
      />
    </span>
  );
}
