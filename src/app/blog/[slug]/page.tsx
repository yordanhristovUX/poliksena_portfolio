import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { PageLayout } from '@/design-system/layouts/PageLayout';
import { Typography } from '@/design-system/components/Typography';
import { Tag } from '@/design-system/components/Tag';
import { Prose } from '@/design-system/components/Prose';
import { formatDate } from '@/design-system/utils/formatDate';
import { getAllBlogPosts, getBlogPost } from '@/lib/content';
import { mdxComponents } from '@/lib/mdx-components';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllBlogPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};
  return {
    title: post.frontmatter.title,
    description: post.frontmatter.description,
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const { frontmatter, content, readingTime } = post;

  return (
    <PageLayout>
      <div className="max-w-2xl">
        {/* Back link */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-1.5 text-sm text-fg-muted hover:text-fg transition-colors duration-fast mb-10"
        >
          ← All posts
        </Link>

        {/* Header */}
        <header className="mb-10">
          <Typography variant="h1" className="mb-3">
            {frontmatter.title}
          </Typography>
          <Typography variant="body-lg" muted className="mb-4">
            {frontmatter.description}
          </Typography>
          <div className="flex flex-wrap items-center gap-3 text-sm text-fg-muted">
            <time dateTime={frontmatter.date}>{formatDate(frontmatter.date)}</time>
            <span aria-hidden="true">·</span>
            <span>{readingTime}</span>
          </div>
          {frontmatter.tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mt-4">
              {frontmatter.tags.map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </div>
          )}
        </header>

        {/* MDX content */}
        <Prose serif>
          <MDXRemote source={content} components={mdxComponents} />
        </Prose>

        {/* Footer nav */}
        <div className="mt-16 pt-8 border-t border-border">
          <Link
            href="/blog"
            className="text-sm text-fg-muted hover:text-fg transition-colors duration-fast"
          >
            ← Back to all posts
          </Link>
        </div>
      </div>
    </PageLayout>
  );
}
