import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    '',
    '/about-us',
    '/blog',
    '/contact-us',
    '/events',
    '/join-us',
    '/our-team',
  ];
  
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

  return staticRoutes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
  }));
}
