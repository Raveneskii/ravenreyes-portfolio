"use client";

import { useCallback, useSyncExternalStore } from "react";
import { Moon, Sun } from "lucide-react";
import { cn } from "@/lib/cn";

type Theme = "dark" | "light";

/* The theme lives on <html> as a class, not in React state, so read it from
   there and let a MutationObserver push changes back. This keeps the accessible
   label honest without a setState-in-effect, and the visible icon is chosen by
   CSS (`light:` variant) so it is already correct before hydration. */
function subscribe(onChange: () => void) {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["class"],
  });
  return () => observer.disconnect();
}

function getSnapshot(): Theme {
  return document.documentElement.classList.contains("light") ? "light" : "dark";
}

function getServerSnapshot(): Theme {
  return "dark";
}

export function ThemeToggle({ className }: { className?: string }) {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const toggle = useCallback(() => {
    const next: Theme = document.documentElement.classList.contains("light")
      ? "dark"
      : "light";
    document.documentElement.classList.toggle("light", next === "light");
    try {
      window.localStorage.setItem("theme", next);
    } catch {
      /* Storage can be blocked; the class change still applies for this visit. */
    }
  }, []);

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={
        theme === "light" ? "Switch to dark mode" : "Switch to light mode"
      }
      className={cn(
        "inline-flex h-9 w-9 items-center justify-center rounded-full border border-line-strong text-muted transition-colors hover:border-accent hover:text-accent",
        className,
      )}
    >
      <span className="relative block h-4 w-4">
        <Sun
          aria-hidden
          className="absolute inset-0 h-4 w-4 rotate-0 opacity-100 transition-all duration-300 light:-rotate-90 light:opacity-0 motion-reduce:transition-none"
        />
        <Moon
          aria-hidden
          className="absolute inset-0 h-4 w-4 rotate-90 opacity-0 transition-all duration-300 light:rotate-0 light:opacity-100 motion-reduce:transition-none"
        />
      </span>
    </button>
  );
}
