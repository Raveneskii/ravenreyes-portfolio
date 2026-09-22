import Image from "next/image";

export function Portrait() {
  return (
    <div className="relative mx-auto aspect-square w-64 sm:w-80 lg:w-[22rem]">
      {/* soft glow */}
      <div
        aria-hidden
        className="absolute inset-0 rounded-full bg-accent/20 blur-3xl"
      />
      {/* rotating conic ring */}
      <div
        aria-hidden
        className="absolute inset-[-14px] rounded-full animate-spin-slow"
        style={{
          background:
            "conic-gradient(from 0deg, transparent 0deg, transparent 250deg, var(--color-accent) 320deg, transparent 360deg)",
          maskImage:
            "radial-gradient(farthest-side, transparent calc(100% - 2px), #000 calc(100% - 1px))",
          WebkitMaskImage:
            "radial-gradient(farthest-side, transparent calc(100% - 2px), #000 calc(100% - 1px))",
        }}
      />
      {/* dashed ring, counter-spinning */}
      <div
        aria-hidden
        className="absolute inset-[-28px] rounded-full border border-dashed border-line-strong animate-spin-slower"
        style={{ animationDirection: "reverse" }}
      />
      <div className="absolute inset-0 overflow-hidden rounded-full border border-line-strong bg-surface animate-float">
        <Image
          src="/avatar.jpeg"
          alt="Portrait of Raven A. Reyes"
          fill
          priority
          sizes="(max-width: 640px) 16rem, (max-width: 1024px) 20rem, 22rem"
          className="object-cover object-[center_20%]"
        />
      </div>
    </div>
  );
}
