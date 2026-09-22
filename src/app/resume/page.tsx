import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Download } from "lucide-react";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { PrintButton } from "@/components/print-button";
import { profile } from "@/content/profile";
import { experience } from "@/content/experience";
import { skills } from "@/content/skills";
import { projects } from "@/content/projects";
import { education } from "@/content/education";

export const metadata: Metadata = {
  title: "Résumé",
  description: `Résumé of ${profile.name} — AI Specialist / AI Automations.`,
  alternates: { canonical: "/resume" },
};

const PDF_HREF = "/Raven-Reyes-Resume.pdf";

export default function ResumePage() {
  return (
    <>
      <SiteNav />
      <main id="main-content" className="mx-auto max-w-4xl px-5 pb-24 pt-28 sm:px-8">
        <div className="no-print mb-6 flex flex-wrap items-center justify-between gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-fg"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden />
            Back to portfolio
          </Link>
          <div className="flex flex-wrap gap-3">
            <PrintButton />
            <a
              href={PDF_HREF}
              download
              className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-on-accent transition-transform hover:-translate-y-0.5"
            >
              <Download className="h-4 w-4" aria-hidden />
              Download PDF
            </a>
          </div>
        </div>

        <article className="resume-sheet mx-auto max-w-[820px] rounded-2xl bg-white p-8 text-[#16181d] shadow-2xl sm:p-12">
          <header className="border-b-2 border-[#16181d] pb-3">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
              {profile.name}
            </h1>
            <p className="mt-1 text-[0.7rem] font-bold uppercase tracking-[0.22em] text-[#0e6b6b]">
              AI Specialist · AI Automations
            </p>
            <p className="mt-2 text-xs text-[#5b626e]">
              {profile.location} · {profile.phone} · {profile.email}
            </p>
          </header>

          <ResumeSection title="Professional Summary">
            <p className="text-[0.82rem] leading-relaxed text-[#2b2f38]">
              {profile.summary}
            </p>
          </ResumeSection>

          <ResumeSection title="Projects">
            <div className="space-y-4">
              {projects.map((project) => (
                <div key={project.name}>
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                    <h3 className="text-[0.9rem] font-bold">
                      {project.name}{" "}
                      <span className="font-normal text-[#5b626e]">
                        — {project.subtitle} · {project.kind}
                      </span>
                    </h3>
                    <span className="text-[0.75rem] font-semibold text-[#5b626e]">
                      {project.year}
                    </span>
                  </div>
                  <ul className="mt-1 space-y-0.5">
                    {project.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="relative pl-3.5 text-[0.82rem] leading-relaxed text-[#2b2f38]"
                      >
                        <span
                          aria-hidden
                          className="absolute left-0 top-[0.55em] h-1 w-1 rounded-full bg-[#0e6b6b]"
                        />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-1 text-[0.72rem] text-[#5b626e]">
                    {project.stack.join(" · ")}
                    {project.live ? (
                      <>
                        {" · "}
                        <a
                          href={project.live.href}
                          className="font-semibold text-[#0e6b6b] no-underline"
                        >
                          {project.live.label}
                        </a>
                      </>
                    ) : null}
                    {project.video ? (
                      <>
                        {" · "}
                        <a
                          href={project.video.href}
                          className="font-semibold text-[#0e6b6b] no-underline"
                        >
                          Video
                        </a>
                      </>
                    ) : null}
                  </p>
                </div>
              ))}
            </div>
          </ResumeSection>

          <ResumeSection title="Work Experience">
            <div className="space-y-3.5">
              {experience.map((job) => (
                <div key={`${job.title}-${job.org}`}>
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                    <h3 className="text-[0.9rem] font-bold">
                      {job.title}{" "}
                      <span className="font-normal text-[#5b626e]">
                        — {job.org}
                      </span>
                    </h3>
                    <span className="text-[0.75rem] font-semibold text-[#5b626e]">
                      {job.period}
                    </span>
                  </div>
                  <ul className="mt-1 space-y-0.5">
                    {job.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="relative pl-3.5 text-[0.82rem] leading-relaxed text-[#2b2f38]"
                      >
                        <span
                          aria-hidden
                          className="absolute left-0 top-[0.55em] h-1 w-1 rounded-full bg-[#0e6b6b]"
                        />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </ResumeSection>

          <ResumeSection title="Core Competencies & Key Skills">
            <dl className="grid grid-cols-1 gap-y-1.5 sm:grid-cols-[130px_1fr]">
              {skills.map((group) => (
                <div key={group.label} className="contents">
                  <dt className="text-[0.8rem] font-bold">{group.label}</dt>
                  <dd className="text-[0.8rem] leading-relaxed text-[#2b2f38]">
                    {group.items.join(" · ")}
                  </dd>
                </div>
              ))}
            </dl>
          </ResumeSection>

          <ResumeSection title="Education" last>
            <div className="flex flex-wrap items-baseline justify-between gap-x-4">
              <p className="text-[0.85rem]">
                <span className="font-bold">{education.school}</span>{" "}
                <span className="text-[#5b626e]">— {education.degree}</span>
              </p>
              <span className="text-[0.8rem] text-[#5b626e]">{education.year}</span>
            </div>
          </ResumeSection>
        </article>
      </main>
      <SiteFooter />
    </>
  );
}

function ResumeSection({
  title,
  children,
  last = false,
}: {
  title: string;
  children: React.ReactNode;
  last?: boolean;
}) {
  return (
    <section className={last ? "mt-4" : "mt-4"}>
      <h2 className="mb-2 border-b border-[#dfe3e8] pb-1 text-[0.72rem] font-bold uppercase tracking-[0.14em]">
        {title}
      </h2>
      {children}
    </section>
  );
}
