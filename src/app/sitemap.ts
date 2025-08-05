import { MetadataRoute } from "next";
import { siteConfig } from "@/lib/config";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.SITE_URL;
  const allNavs = [...siteConfig.mainNav, ...siteConfig.utilityNav];

  return allNavs.map((route) => {
    return {
      url: `${siteUrl}${route.href}`,
      lastModified: new Date(),
      ...(route.changeFrequency && { changeFrequency: route.changeFrequency }),
      ...(route.priority && { priority: route.priority }),
    };
  });
}
