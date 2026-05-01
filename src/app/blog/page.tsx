import type { Metadata } from 'next';
import Link from 'next/link';
import { PageLayout } from '@/design-system/layouts/PageLayout';
import { Typography } from '@/design-system/components/Typography';
import { Tag } from '@/design-system/components/Tag';
import { formatDate } from '@/design-system/utils/formatDate';
import { getAllBlogPosts } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Writing on design systems, frontend development, and the web.',
};

export default function BlogPage() {
  const posts = getAllBlogPosts();

  return (
    <PageLayout>
      <div className="mb-12">
        <Typography variant="h1" className="mb-3">
          Blog
        </Typography>
        <Typography variant="body-lg" muted className="max-w-xl">
          Writing on design systems, frontend development, and the web.
        </Typography>
      </div>

      {posts.length === 0 ? (
        <Typography variant="body" muted>
          No posts yet.
        </Typography>
      ) : (
        <ul className="divide-y divide-border">
          {posts.map((post) => (
            <li key={post.slug}>
              <Link
                href={`/blog/${post.slug}`}
                className="group block py-7 hover:text-brand transition-colors duration-fast"
              >
                <div className="flex items-start justify-between gap-6">
                  <div className="flex-1 min-w-0">
                    <Typography
                      variant="h4"
                      className="mb-1.5 group-hover:text-brand transition-colors duration-fast"
                    >
                      {post.frontmatter.title}
                    </Typography>
                    <Typography variant="body-sm" muted className="mb-3">
                      {post.frontmatter.description}
                    </Typography>
                    {post.frontmatter.tags.length > 0 && (
                      <div className="flex flex-wrap gap-1.5">
                        {post.frontmatter.tags.map((tag) => (
                          <Tag key={tag}>{tag}</Tag>
                        ))}
                      </div>
                    )}
                  </div>
                  <div className="shrink-0 text-right">
                    <Typography variant="caption" muted>
                      {formatDate(post.frontmatter.date, {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric',
                      })}
                    </Typography>
                    <Typography variant="caption" muted className="mt-0.5">
                      {post.readingTime}
                    </Typography>
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </PageLayout>
  );
}
