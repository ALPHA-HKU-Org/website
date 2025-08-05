import { MetadataRoute } from "next";

export const staticRoutes = [
  "",
  "/about-us",
  "/upcoming-event",
  "/blog",
  "/our-work",
  "/resources",
  "/join-us",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.SITE_URL;

  return staticRoutes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
  }));
}
