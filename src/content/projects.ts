export type Project = {
  name: string;
  subtitle: string;
  year: string;
  kind: string;
  summary: string;
  bullets: string[];
  stack: string[];
  live?: { label: string; href: string };
  video?: { label: string; href: string };
};

export const projects: Project[] = [
  {
    name: "Leadline",
    subtitle: "AI-Assisted CRM",
    year: "2026",
    kind: "Personal Project",
    summary:
      "A working CRM built end to end, with AI capture and scoring wired in on the server side.",
    bullets: [
      "Built and shipped a working CRM web app end to end: authentication, contacts, deal pipeline, and activity log.",
      "Added an AI quick-capture feature that turns a pasted message into a structured contact and deal, reviewed before saving.",
      "Added AI lead scoring and drafted follow-ups, called server-side so credentials never reach the browser.",
      "Applied row-level security so each user only reaches their own records; deployed to production on Vercel on free tiers.",
    ],
    stack: ["Next.js", "React", "Supabase", "Google Gemini"],
    live: { label: "leadline-topaz.vercel.app", href: "https://leadline-topaz.vercel.app" },
  },
  {
    name: "Luisa & Son",
    subtitle: "Cake Ordering System",
    year: "2026",
    kind: "Personal Project",
    summary:
      "A complete cake-ordering system with a server-authoritative pricing engine and a no-code admin panel.",
    bullets: [
      "Built and shipped a complete cake-ordering system: storefront, custom-cake builder, cart, checkout, order tracking, and a no-code admin panel.",
      "Engineered a server-authoritative pricing engine shared by the on-screen estimate and server checkout, so client tampering cannot change the total and every placed order stores frozen price snapshots.",
      "Designed a 13-table Postgres database with row-level security on every table and a security-definer admin gate; stored customer reference photos in a private bucket with server-side file validation.",
      "Deployed to production on Vercel from a public GitHub repository on free tiers, backed by a seeded Supabase database and a demo admin account.",
    ],
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind",
      "Supabase",
      "Vercel",
    ],
    live: { label: "luisa-and-son.vercel.app", href: "https://luisa-and-son.vercel.app" },
  },
  {
    name: "GroundingMat",
    subtitle: "AI-Generated Video Ad",
    year: "2026",
    kind: "AI Video Production",
    summary:
      "A full AI-generated, photorealistic video ad for a grounding sheet, produced without any filmed footage.",
    bullets: [
      "Produced a full AI-generated, photorealistic video ad for The Grounding Co's grounding sheet, aimed at perimenopause-related sleep issues.",
      "Generated the clips in Gemini Flow, produced the voiceover in ElevenLabs, and cut the sequence in CapCut with burned-in captions matching the voiceover, an offer card, and a CTA.",
      "Delivered the ad in a scripted mechanism format — hook, mechanism breakdown, turn, reveal, and CTA — with no filmed footage at any point.",
    ],
    stack: ["Gemini Flow", "ElevenLabs", "CapCut"],
    video: {
      label: "Watch the ad",
      href: "https://drive.google.com/file/d/1UwkqEfvvX-WV9padXiyhTEADSNiSyIAL/view",
    },
  },
];
