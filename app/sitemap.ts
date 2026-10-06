import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '',
    '/services',
    '/about',
    '/doctor',
    '/contact',
    '/appointment',
    '/location',
    '/timings',
  ];

  const baseUrl = 'https://tasneemdental.com';

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : route === '/appointment' ? 0.9 : 0.7,
  }));
}
