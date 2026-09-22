import Link from "next/link";
import { ArrowDown, ArrowUpRight, Download, Mail, MapPin, Phone } from "lucide-react";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { ScrollProgress } from "@/components/scroll-progress";
import { Reveal } from "@/components/reveal";
import { Enter } from "@/components/enter";
import { TypingText } from "@/components/typing-text";
import { SectionHeading } from "@/components/section-heading";
import { Portrait } from "@/components/portrait";
import { ProjectCard } from "@/components/project-card";
import { Scrollspy } from "@/components/scrollspy";
import { GitHubIcon } from "@/components/icons";
import { profile } from "@/content/profile";
import { skills } from "@/content/skills";
import { projects } from "@/content/projects";
import { experience } from "@/content/experience";
import { education } from "@/content/education";

const marquee = [
  "ChatGPT",
  "Claude",
  "Gemini",
  "opencode",
  "n8n",
  "Next.js",
  "Supabase",
  "Vercel",
  "ElevenLabs",
  "CapCut",
  "Photoshop",
  "Illustrator",
];

/* Section ids the scrollspy watches, in document order. */
const spyItems = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "work", label: "Work" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
] as const;

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <SiteNav />
      <main id="main-content" className="overflow-x-clip">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8">
          <div className="grid grid-cols-1 gap-x-12 xl:grid-cols-[180px_minmax(0,1fr)]">
            <aside className="hidden xl:block">
              <div className="sticky top-[5.5rem]">
                <Scrollspy items={spyItems} />
              </div>
            </aside>

            <div className="min-w-0">
              {/* Hero */}
              <section className="relative isolate">
                <div aria-hidden className="backdrop-grid absolute inset-0 -z-10" />
                <div className="grid items-center gap-14 pb-20 pt-32 lg:grid-cols-[1.15fr_0.85fr] lg:pb-28 lg:pt-40">
                  <div>
                    <Enter>
                      <span className="inline-flex items-center gap-2 rounded-full border border-line-strong px-3 py-1 font-mono text-xs text-muted">
                        <span className="relative flex h-2 w-2">
                          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
                          <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
                        </span>
                        Available for AI &amp; web work
                      </span>
                    </Enter>

                    <Enter delay={0.08}>
                      <h1 className="mt-6 text-5xl font-semibold tracking-tight text-fg sm:text-7xl">
                        {profile.name}
                      </h1>
                    </Enter>

                    <Enter delay={0.16}>
                      <p className="mt-4 font-mono text-lg text-accent sm:text-xl">
                        <TypingText lines={profile.typingLines} />
                      </p>
                    </Enter>

                    <Enter delay={0.24}>
                      <p className="mt-6 max-w-xl text-base leading-relaxed text-muted">
                        {profile.tagline} I design and direct the build, use AI tools to
                        write and ship it, and take it to production myself.
                      </p>
                    </Enter>

                    <Enter delay={0.32}>
                      <div className="mt-9 flex flex-wrap items-center gap-3">
                        <a
                          href="#work"
                          className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-[#04211f] transition-transform hover:-translate-y-0.5"
                        >
                          View work
                          <ArrowDown className="h-4 w-4" aria-hidden />
                        </a>
                        <Link
                          href="/resume"
                          className="inline-flex items-center gap-2 rounded-full border border-line-strong px-5 py-2.5 text-sm font-medium text-fg transition-colors hover:border-accent hover:text-accent"
                        >
                          <Download className="h-4 w-4" aria-hidden />
                          Download résumé
                        </Link>
                        <a
                          href={`mailto:${profile.email}`}
                          className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium text-muted transition-colors hover:text-fg"
                        >
                          <Mail className="h-4 w-4" aria-hidden />
                          Email
                        </a>
                      </div>
                    </Enter>
                  </div>

                  <Enter delay={0.24} className="lg:justify-self-end">
                    <Portrait />
                  </Enter>
                </div>

                {/* Tool marquee */}
                <div className="relative overflow-hidden border-y border-line py-4">
                  <div className="flex w-max animate-marquee gap-10 pr-10">
                    {[...marquee, ...marquee].map((item, i) => (
                      <span
                        key={`${item}-${i}`}
                        className="font-mono text-sm text-faint whitespace-nowrap"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </section>

              {/* About */}
              <section id="about" className="section-anchor border-b border-line">
                <div className="py-20 lg:py-28">
                  <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
                    <Reveal>
                      <SectionHeading index="01" kicker="About" title="Designer who learned to build." />
                    </Reveal>
                    <div className="space-y-5">
                      {profile.about.map((para, i) => (
                        <Reveal key={para} delay={i * 0.05}>
                          <p className="text-base leading-relaxed text-muted">{para}</p>
                        </Reveal>
                      ))}
                    </div>
                  </div>
                </div>
              </section>

              {/* Skills */}
              <section id="skills" className="section-anchor border-b border-line">
                <div className="py-20 lg:py-28">
                  <Reveal>
                    <SectionHeading index="02" kicker="Skills" title="What I work with." />
                  </Reveal>
                  <div className="mt-12 grid gap-6 sm:grid-cols-2">
                    {skills.map((group, i) => (
                      <Reveal key={group.label} delay={i * 0.05}>
                        <div className="h-full rounded-2xl border border-line bg-surface/60 p-6">
                          <h3 className="font-mono text-xs uppercase tracking-widest text-accent">
                            {group.label}
                          </h3>
                          <ul className="mt-4 flex flex-wrap gap-2">
                            {group.items.map((item) => (
                              <li
                                key={item}
                                className="rounded-full border border-line px-2.5 py-1 text-xs text-muted"
                              >
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </Reveal>
                    ))}
                  </div>
                </div>
              </section>

              {/* Work */}
              <section id="work" className="section-anchor border-b border-line">
                <div className="py-20 lg:py-28">
                  <Reveal>
                    <SectionHeading index="03" kicker="Selected work" title="Things I've built and shipped." />
                  </Reveal>
                  <div className="mt-12 grid gap-6">
                    {projects.map((project, i) => (
                      <Reveal key={project.name} delay={i * 0.05}>
                        <ProjectCard project={project} />
                      </Reveal>
                    ))}
                  </div>
                </div>
              </section>

              {/* Experience */}
              <section id="experience" className="section-anchor border-b border-line">
                <div className="py-20 lg:py-28">
                  <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
                    <Reveal>
                      <SectionHeading index="04" kicker="Experience" title="Where I've worked." />
                    </Reveal>
                    <div className="relative space-y-10 border-l border-line pl-6">
                      {experience.map((job) => (
                        <Reveal key={`${job.title}-${job.org}`}>
                          <div className="relative">
                            <span
                              aria-hidden
                              className="absolute -left-[1.6rem] top-2 h-2 w-2 rounded-full bg-accent"
                            />
                            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                              <h3 className="text-lg font-semibold tracking-tight text-fg">
                                {job.title}{" "}
                                <span className="font-normal text-muted">— {job.org}</span>
                              </h3>
                              <span className="font-mono text-xs text-faint">
                                {job.period}
                              </span>
                            </div>
                            <ul className="mt-3 space-y-1.5">
                              {job.bullets.map((bullet) => (
                                <li
                                  key={bullet}
                                  className="flex gap-3 text-sm leading-relaxed text-muted"
                                >
                                  <span
                                    aria-hidden
                                    className="mt-2 h-1 w-1 shrink-0 rounded-full bg-line-strong"
                                  />
                                  {bullet}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </Reveal>
                      ))}
                    </div>
                  </div>

                  <Reveal>
                    <div className="mt-16 grid gap-4 rounded-2xl border border-line bg-surface/60 p-6 sm:grid-cols-[0.9fr_1.1fr] sm:p-8">
                      <h3 className="font-mono text-xs uppercase tracking-widest text-accent">
                        Education
                      </h3>
                      <div>
                        <p className="font-medium text-fg">{education.degree}</p>
                        <p className="text-sm text-muted">
                          {education.school} · {education.year}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                </div>
              </section>

              {/* Contact */}
              <section id="contact" className="section-anchor">
                <div className="py-20 lg:py-28">
                  <Reveal>
                    <p className="font-mono text-xs uppercase tracking-widest text-accent">
                      05 — Contact
                    </p>
                    <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-fg sm:text-5xl">
                      Building something and need an AI specialist who ships?
                    </h2>
                    <a
                      href={`mailto:${profile.email}`}
                      className="mt-8 inline-flex items-center gap-2 text-xl font-medium text-accent transition-opacity hover:opacity-80 sm:text-2xl"
                    >
                      {profile.email}
                      <ArrowUpRight className="h-5 w-5" aria-hidden />
                    </a>
                  </Reveal>

                  <Reveal delay={0.05}>
                    <div className="mt-10 flex flex-wrap gap-x-8 gap-y-4 text-sm text-muted">
                      <a
                        href={`tel:${profile.phoneHref}`}
                        className="inline-flex items-center gap-2 transition-colors hover:text-fg"
                      >
                        <Phone className="h-4 w-4 text-faint" aria-hidden />
                        {profile.phone}
                      </a>
                      <span className="inline-flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-faint" aria-hidden />
                        {profile.location}
                      </span>
                      <a
                        href={profile.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 transition-colors hover:text-fg"
                      >
                        <GitHubIcon className="h-4 w-4 text-faint" />
                        github.com/Raveneskii
                      </a>
                    </div>
                  </Reveal>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
