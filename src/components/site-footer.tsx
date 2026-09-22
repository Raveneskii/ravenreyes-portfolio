import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import { profile } from "@/content/profile";
import { GitHubIcon } from "@/components/icons";

export function SiteFooter() {
  return (
    <footer className="no-print border-t border-line">
      <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-mono text-xs tracking-widest text-faint uppercase">
              Get in touch
            </p>
            <a
              href={`mailto:${profile.email}`}
              className="mt-2 inline-flex items-center gap-2 text-lg font-medium text-fg transition-colors hover:text-accent"
            >
              {profile.email}
              <ArrowUpRight className="h-4 w-4" aria-hidden />
            </a>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted">
            <span className="inline-flex items-center gap-2">
              <Phone className="h-3.5 w-3.5 text-faint" aria-hidden />
              {profile.phone}
            </span>
            <span className="inline-flex items-center gap-2">
              <MapPin className="h-3.5 w-3.5 text-faint" aria-hidden />
              {profile.location}
            </span>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 transition-colors hover:text-fg"
            >
              <GitHubIcon className="h-3.5 w-3.5 text-faint" />
              GitHub
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 transition-colors hover:text-fg"
            >
              <Mail className="h-3.5 w-3.5 text-faint" aria-hidden />
              Email
            </a>
          </div>
        </div>
        <p className="mt-10 font-mono text-xs text-faint">
          © {new Date().getFullYear()} {profile.name}. Built and shipped by hand.
        </p>
      </div>
    </footer>
  );
}
