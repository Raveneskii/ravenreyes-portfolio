import { profile } from "./profile";
import { experience } from "./experience";
import { education } from "./education";
import { projects } from "./projects";

/* The résumé's own content. Kept separate from the site's marketing copy because
   the résumé is video-first and keyword-led; it reuses `experience`, `education`
   and the web projects so those never drift from one source. */

export type ResumeSkillGroup = { label: string; items: string[] };
export type ResumeLink = { label: string; href: string };
export type ResumeProject = {
  name: string;
  subtitle: string;
  year: string;
  bullets: string[];
  tools: string[];
  links: ResumeLink[];
};

export const resumeHeader = {
  name: profile.name,
  headline: "AI Video Editor & AI Specialist",
  location: profile.location,
  phone: profile.phone,
  email: profile.email,
} as const;

export const resumeLinks = {
  portfolio: {
    label: "ravenreyes-portfolio.vercel.app",
    href: "https://ravenreyes-portfolio.vercel.app",
  },
  gitHub: { label: "github.com/Raveneskii", href: "https://github.com/Raveneskii" },
  reel: {
    label: "facebook.com/reel/1088015767308779",
    href: "https://www.facebook.com/reel/1088015767308779",
  },
  aiAd: {
    label: "drive.google.com/drive/folders/1EHPVi1nQ33-chCH4RYw7Ta4z-I4yfpRf",
    href: "https://drive.google.com/drive/folders/1EHPVi1nQ33-chCH4RYw7Ta4z-I4yfpRf?usp=sharing",
  },
} as const;

export const resumeSummary =
  "AI-first video editor and AI specialist producing short-form, direct-response style video end to end: hook and concept, generative video clips, AI voiceover, and a finished cut in CapCut with burned-in captions and motion text. Comfortable owning a brief from script to delivery, and equally at home building the AI-assisted systems behind content — prompt engineering, LLM features, and automation. Works in English and Filipino.";

export const resumeSkills: ResumeSkillGroup[] = [
  {
    label: "Video Editing & Post",
    items: [
      "Short-Form Vertical Video (TikTok, Instagram Reels, YouTube Shorts)",
      "Direct-Response & UGC-Style Ads",
      "Hook-Led Structure & Retention Pacing",
      "Burned-In Captions & Kinetic Typography",
      "Text Overlays, Lower Thirds & Transitions",
      "Sound Design, Music Ducking & Audio Cleanup",
      "Colour Correction & Platform Specs",
      "Ad Variants & A/B Hook Testing",
    ],
  },
  {
    label: "AI Video & Audio",
    items: [
      "Generative Video (Gemini Flow, Kling, Vibes.AI)",
      "Image-to-Video & Text-to-Video",
      "AI Voiceover (ElevenLabs, Google AI Studio)",
      "AI Scripting & Ideation (ChatGPT)",
      "Auto-Captioning",
    ],
  },
  {
    label: "AI & Automation",
    items: [
      "Prompt Engineering",
      "Generative AI Tools (ChatGPT, Claude, Gemini, opencode)",
      "AI Workflow Automation (n8n)",
      "AI-Assisted Content Production",
      "Human-in-the-Loop Review",
    ],
  },
  {
    label: "Software",
    items: [
      "CapCut (primary editing tool)",
      "Adobe Premiere Pro (working knowledge)",
      "DaVinci Resolve (working knowledge)",
      "Adobe Photoshop & Illustrator",
      "Canva",
    ],
  },
  {
    label: "Professional",
    items: [
      "English & Filipino (Tagalog)",
      "Client Briefs & Revision Rounds",
      "Fast Turnaround Under Deadlines",
      "Brand Consistency",
      "Organised Project & Asset Management",
    ],
  },
];

export const videoProjects: ResumeProject[] = [
  {
    name: "GroundingMat",
    subtitle: "AI-Generated Video Ad",
    year: "2026",
    bullets: [
      "Produced a fully AI-generated, photorealistic direct-response ad for a grounding sheet (perimenopause sleep angle) with no filmed footage at any point.",
      "Structured it on a mechanism format — hook, explainer body, turn, offer reveal, and CTA — with burned-in captions timed to the voiceover, an offer card, and an end card.",
      "Generated the clips with generative video tools, produced the voiceover in ElevenLabs, and cut and finished the sequence in CapCut.",
    ],
    tools: ["Gemini Flow", "ElevenLabs", "CapCut"],
    links: [
      {
        label: "Watch the ad",
        href: "https://drive.google.com/drive/folders/1EHPVi1nQ33-chCH4RYw7Ta4z-I4yfpRf?usp=sharing",
      },
    ],
  },
  {
    name: "Informative Diabetes",
    subtitle: "Filipino Health Explainer",
    year: "2026",
    bullets: [
      "Wrote and produced a 60-second Filipino-language vertical health explainer on high blood sugar, structured hook → mechanism → CTA for a lay audience.",
      "Built the full AI pipeline: script with ChatGPT, imagery in Gemini Flow, still images animated into video in Vibes.AI, and narration in Google AI Studio.",
      "Finished the cut in CapCut with burned-in captions and published it as a vertical short-form video.",
    ],
    tools: ["ChatGPT", "Gemini Flow", "Vibes.AI", "Google AI Studio", "CapCut"],
    links: [
      {
        label: "Watch the reel",
        href: "https://www.facebook.com/reel/1088015767308779",
      },
    ],
  },
];

/* AI-assisted web builds. GroundingMat is a video project above, so it is left
   out here rather than listed twice.

   Density is tuned for a two-page résumé: supporting web builds get 2 bullets
   each, and roles older than the two most recent collapse to a single line. The
   full copy stays in `projects.ts` / `experience.ts`, so there is still one
   source per fact. */
export const resumeWebProjects = projects
  .filter((project) => project.name !== "GroundingMat")
  .map((project) => ({ ...project, bullets: project.bullets.slice(0, 2) }));

export const resumeExperience = experience.map((job, index) => ({
  ...job,
  bullets: job.bullets.slice(0, index < 2 ? 3 : 1),
}));

export const resumeEducation = education;
