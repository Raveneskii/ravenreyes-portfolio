import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SITE_URL } from "@/lib/site";
import { profile } from "@/content/profile";
import { MotionProvider } from "@/components/motion-provider";
import { PointerBackdrop } from "@/components/pointer-backdrop";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

const description =
  "Raven A. Reyes — AI Specialist building systems, websites, and automations. Portfolio of shipped AI-assisted products and AI video work.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${profile.name} — ${profile.role}`,
    template: `%s — ${profile.name}`,
  },
  description,
  applicationName: `${profile.name} Portfolio`,
  authors: [{ name: profile.name }],
  creator: profile.name,
  keywords: [
    "Raven Reyes",
    "AI Specialist",
    "AI Automations",
    "Portfolio",
    "Prompt Engineering",
    "Vibe Coding",
    "Next.js",
    "Supabase",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: SITE_URL,
    title: `${profile.name} — ${profile.role}`,
    description,
    siteName: profile.name,
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} — ${profile.role}`,
    description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafafa" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
};

/* Runs before first paint so the correct theme is on <html> from the start and
   there is no flash of the wrong one. Stored choice wins; otherwise the OS
   setting decides. Kept as a string because it must not be bundled or deferred. */
const themeScript = `(function(){try{var s=localStorage.getItem("theme");var dark=s?s==="dark":!window.matchMedia("(prefers-color-scheme: light)").matches;document.documentElement.classList.toggle("light",!dark);}catch(e){}})();`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="min-h-dvh bg-ink text-fg antialiased">
        <PointerBackdrop />
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
