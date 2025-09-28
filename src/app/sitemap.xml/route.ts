import { siteConfig } from "@/lib/config";
import { flattenByChildren, isInternalHref } from "@/lib/utils";

// when using SSG (output: 'export'), this is required
// https://github.com/vercel/next.js/issues/68667
export const dynamic = "force-static";

const xmlStart = `<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/xsl" href="sitemap.xsl"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`;
const xmlEnd = `</urlset>`;

export async function GET() {
  const rawSiteUrl = process.env.SITE_URL || "";
  const siteUrl = rawSiteUrl.replace(/\/$/, "");

  const allNavs = [...flattenByChildren(siteConfig.mainNav), ...flattenByChildren(siteConfig.sitemapOnlyNav)];

  const urlEntries = allNavs
    /* Remove external links */
    .filter((route) => isInternalHref(route.href))
    /* Add SITE_URL as prefix */
    .map((route) => `${siteUrl}${route.href === "/" ? "" : route.href}`)
    /* To XML format */
    .map((url: string): string => {
      return `<url><loc>${url}</loc></url>`;
    })
    /* Separate each entry with a newline */
    .join("\n");

  const xml = `${xmlStart}${urlEntries}${xmlEnd}`;
  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
}
