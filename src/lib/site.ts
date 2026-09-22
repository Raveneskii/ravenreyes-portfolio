/* The one canonical origin, imported by `metadataBase`, `sitemap.ts` and
   `robots.ts`. Those three must agree or a crawler is handed URLs that
   contradict the metadata, so the value lives in exactly one place.

   Hardcoded rather than an env var on purpose: an unset env var would silently
   emit a sitemap of relative or empty URLs, which is worse than no sitemap. If
   the site ever moves to a custom domain, this line is the change. */
export const SITE_URL = "https://ravenreyes-portfolio.vercel.app";
