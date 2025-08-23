import { siteConfig } from "@/lib/config";
import { flattenByChildren, isInternalHref } from "@/lib/utils";
import { MetadataRoute } from "next";

// when using SSG (output: 'export'), this is required
// https://github.com/vercel/next.js/issues/68667
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const rawSiteUrl = process.env.SITE_URL || "";
  const siteUrl = rawSiteUrl.replace(/\/$/, ""); // remove trailing slash

  const allNavs = [...flattenByChildren(siteConfig.mainNav), ...flattenByChildren(siteConfig.utilityNav)];

  return allNavs
    .filter((route) => isInternalHref(route.href))
    .map((route) => ({
      url: `${siteUrl}${route.href === "/" ? "/" : route.href}`,
      lastModified: new Date(),
      ...(route.changeFrequency && { changeFrequency: route.changeFrequency }),
      ...(route.priority && { priority: route.priority }),
    }));
}
