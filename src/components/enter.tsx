import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

/* Entrance animation for above-the-fold content. Pure CSS, so it runs without
   JavaScript and is neutralised by the reduced-motion media query. */
export function Enter({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <div
      className={cn("animate-enter", className)}
      style={{ animationDelay: `${delay}s` }}
    >
      {children}
    </div>
  );
}
