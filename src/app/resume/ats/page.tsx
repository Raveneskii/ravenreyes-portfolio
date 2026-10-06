import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Download } from "lucide-react";
import {
  resumeHeader,
  resumeLinks,
  resumeSummary,
  resumeSkills,
  videoProjects,
  resumeWebProjects,
  resumeExperience,
  resumeEducation,
} from "@/content/resume";

export const metadata: Metadata = {
  title: "Résumé (ATS)",
  description: `Plain single-column résumé of ${resumeHeader.name} for applicant tracking systems.`,
  alternates: { canonical: "/resume/ats" },
  /* A duplicate of /resume for machines; keep it out of search results. */
  robots: { index: false, follow: false },
};

const ATS_PDF_HREF = "/Raven-Reyes-Resume-ATS.pdf";

/* Deliberately unstyled by the design system: one column, no icons, no colour,
   standard headings and real lists. This is the copy that has to survive an ATS
   parser, so it stays plain even though it looks plain. */
export default function ResumeAtsPage() {
  return (
    <main className="min-h-dvh bg-white text-black">
      <div className="no-print mx-auto flex max-w-[760px] flex-wrap items-center justify-between gap-4 px-8 pt-6">
        <Link
          href="/resume"
          className="inline-flex items-center gap-2 text-sm text-zinc-600 hover:text-black"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden />
          Back to résumé
        </Link>
        <a
          href={ATS_PDF_HREF}
          download
          className="inline-flex items-center gap-2 rounded-full bg-black px-5 py-2.5 text-sm font-medium text-white"
        >
          <Download className="h-4 w-4" aria-hidden />
          Download ATS PDF
        </a>
      </div>

      <article className="resume-sheet mx-auto max-w-[760px] px-8 py-8 text-[11pt] leading-[1.45]">
        <header>
          <h1 className="text-[20pt] font-bold">{resumeHeader.name}</h1>
          <p className="text-[12pt] font-semibold">{resumeHeader.headline}</p>
          <p>
            {resumeHeader.location} | {resumeHeader.phone} | {resumeHeader.email}
          </p>
          <p>
            <a href={resumeLinks.portfolio.href}>{resumeLinks.portfolio.label}</a>
            {" | "}
            <a href={resumeLinks.gitHub.href}>{resumeLinks.gitHub.label}</a>
            {" | Reel: "}
            <a href={resumeLinks.reel.href}>{resumeLinks.reel.label}</a>
            {" | AI ad sample: "}
            <a href={resumeLinks.aiAd.href}>{resumeLinks.aiAd.label}</a>
          </p>
        </header>

        <AtsSection title="Professional Summary">
          <p>{resumeSummary}</p>
        </AtsSection>

        <AtsSection title="Skills">
          {resumeSkills.map((group) => (
            <p key={group.label}>
              <strong>{group.label}:</strong> {group.items.join(" · ")}
            </p>
          ))}
        </AtsSection>

        <AtsSection title="Video Projects">
          {videoProjects.map((project) => (
            <div key={project.name} className="mb-3">
              <p className="font-bold">
                {project.name} - {project.subtitle} ({project.year})
              </p>
              <ul className="ml-5 list-disc">
                {project.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
              <p>
                Tools: {project.tools.join(", ")}
                {project.links.map((link) => (
                  <span key={link.href}>
                    {" | "}
                    <a href={link.href}>{link.href}</a>
                  </span>
                ))}
              </p>
            </div>
          ))}
        </AtsSection>

        <AtsSection title="AI Systems & Web Builds">
          {resumeWebProjects.map((project) => (
            <div key={project.name} className="mb-3">
              <p className="font-bold">
                {project.name} - {project.subtitle} ({project.year})
              </p>
              <ul className="ml-5 list-disc">
                {project.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
              <p>
                Stack: {project.stack.join(", ")}
                {project.live ? (
                  <>
                    {" | "}
                    <a href={project.live.href}>{project.live.href}</a>
                  </>
                ) : null}
              </p>
            </div>
          ))}
        </AtsSection>

        <AtsSection title="Work Experience">
          {resumeExperience.map((job) => (
            <div key={`${job.title}-${job.org}`} className="mb-3">
              <p className="font-bold">
                {job.title} - {job.org} ({job.period})
              </p>
              <ul className="ml-5 list-disc">
                {job.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </div>
          ))}
        </AtsSection>

        <AtsSection title="Education">
          <p>
            <strong>{resumeEducation.school}</strong> - {resumeEducation.degree}{" "}
            ({resumeEducation.year})
          </p>
        </AtsSection>
      </article>
    </main>
  );
}

function AtsSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-5">
      <h2 className="mb-1 border-b border-black pb-0.5 text-[11pt] font-bold uppercase tracking-wide">
        {title}
      </h2>
      <div className="space-y-1">{children}</div>
    </section>
  );
}
