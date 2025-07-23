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

  return staticRoutes.map((route) => ({
    url: `https://alpha-hku.vercel.app${route}`,
    lastModified: new Date(),
  }));
}
