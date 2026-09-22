import { ArrowUpRight, Play } from "lucide-react";
import type { Project } from "@/content/projects";

/* Outline by default, filled with the accent on hover — the colour change is the
   affordance, so the link reads as a button rather than as body text. */
const linkButton =
  "inline-flex items-center gap-2 rounded-full border border-line-strong px-4 py-2 text-sm font-medium text-fg transition-colors duration-200 hover:border-accent hover:bg-accent hover:text-on-accent";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group relative flex flex-col rounded-2xl border border-line bg-surface/60 p-6 transition-colors duration-300 hover:border-line-strong sm:p-8">
      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
        <h3 className="text-xl font-semibold tracking-tight text-fg sm:text-2xl">
          {project.name}
          <span className="ml-2 font-normal text-muted">— {project.subtitle}</span>
        </h3>
        <span className="font-mono text-xs text-faint">
          {project.year} · {project.kind}
        </span>
      </div>

      <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted">
        {project.summary}
      </p>

      <ul className="mt-5 space-y-2">
        {project.bullets.map((bullet) => (
          <li key={bullet} className="flex gap-3 text-sm leading-relaxed text-muted">
            <span
              aria-hidden
              className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent"
            />
            {bullet}
          </li>
        ))}
      </ul>

      <div className="mt-auto pt-6">
        <div className="flex flex-wrap gap-2">
          {project.stack.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-line-strong px-2.5 py-1 font-mono text-[11px] text-muted"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-5 flex flex-wrap items-center gap-3">
          {project.live ? (
            <a
              href={project.live.href}
              target="_blank"
              rel="noopener noreferrer"
              className={linkButton}
            >
              {project.live.label}
              <ArrowUpRight className="h-4 w-4" aria-hidden />
            </a>
          ) : null}
          {project.video ? (
            <a
              href={project.video.href}
              target="_blank"
              rel="noopener noreferrer"
              className={linkButton}
            >
              <Play className="h-4 w-4" aria-hidden />
              {project.video.label}
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}
