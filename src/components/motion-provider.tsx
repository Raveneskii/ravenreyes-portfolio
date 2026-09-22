"use client";

import { MotionConfig } from "motion/react";
import type { ReactNode } from "react";

/* Motion respects the OS "reduce motion" setting globally, so no component has
   to check it individually: with `reducedMotion="user"` transform/opacity
   animations resolve instantly for users who asked for less motion. */
export function MotionProvider({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
