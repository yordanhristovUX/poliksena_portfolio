import type { MetadataRoute } from 'next';
import { getAllBlogPosts, getAllWorkProjects } from '@/lib/content';

const BASE_URL = process.env['NEXT_PUBLIC_SITE_URL'] ?? 'https://yourname.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const blogPosts = getAllBlogPosts().map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.frontmatter.date),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const workProjects = getAllWorkProjects().map((project) => ({
    url: `${BASE_URL}/work/${project.slug}`,
    lastModified: new Date(project.frontmatter.date),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/work`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
  ];

  return [...staticRoutes, ...workProjects, ...blogPosts];
}
