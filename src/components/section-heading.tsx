import { cn } from "@/lib/cn";

type SectionHeadingProps = {
  index: string;
  title: string;
  kicker?: string;
  className?: string;
};

export function SectionHeading({
  index,
  title,
  kicker,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn("flex items-end justify-between gap-6", className)}>
      <div>
        <div className="flex items-center gap-3 font-mono text-xs tracking-widest text-accent">
          <span>{index}</span>
          <span className="h-px w-8 bg-line-strong" aria-hidden />
          {kicker ? (
            <span className="text-faint uppercase">{kicker}</span>
          ) : null}
        </div>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-fg sm:text-4xl">
          {title}
        </h2>
      </div>
    </div>
  );
}
