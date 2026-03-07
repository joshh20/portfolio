import type { APIRoute } from "astro";

const getRobotsTxt = (sitemapURL: URL) => `\
User-agent: *
Allow: ${import.meta.env.ROBOTS_PATH_ALLOWED ?? ""}
Disallow: ${import.meta.env.ROBOTS_PATH_DISALLOWED ?? "/"}

Sitemap: ${sitemapURL.href}
`;

export const GET: APIRoute = ({ site }) => {
  const sitemapURL = new URL("sitemap-index.xml", site);
  return new Response(getRobotsTxt(sitemapURL));
};
