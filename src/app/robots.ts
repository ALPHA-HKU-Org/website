import { MetadataRoute } from "next";

// when using SSG (output: 'export'), this is required
// https://github.com/vercel/next.js/issues/68667
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  const siteUrl = process.env.SITE_URL;
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
