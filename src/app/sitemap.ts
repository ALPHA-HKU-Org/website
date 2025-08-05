import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/about-us", "/blog", "/upcoming-event", "/join-us", "/our-work", "/resources"];

  const siteUrl = process.env.SITE_URL;

  return staticRoutes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
  }));
}
