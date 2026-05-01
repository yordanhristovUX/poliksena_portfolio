import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { PageLayout } from '@/design-system/layouts/PageLayout';
import { Typography } from '@/design-system/components/Typography';
import { Tag } from '@/design-system/components/Tag';
import { Prose } from '@/design-system/components/Prose';
import { formatDate } from '@/design-system/utils/formatDate';
import { getAllWorkProjects, getWorkProject } from '@/lib/content';
import { mdxComponents } from '@/lib/mdx-components';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllWorkProjects().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getWorkProject(slug);
  if (!project) return {};
  return {
    title: project.frontmatter.title,
    description: project.frontmatter.description,
  };
}

export default async function WorkDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getWorkProject(slug);
  if (!project) notFound();

  const { frontmatter, content } = project;

  return (
    <PageLayout>
      <div className="max-w-2xl">
        {/* Back link */}
        <Link
          href="/work"
          className="inline-flex items-center gap-1.5 text-sm text-fg-muted hover:text-fg transition-colors duration-fast mb-10"
        >
          ← All work
        </Link>

        {/* Header */}
        <header className="mb-10">
          <Typography variant="h1" className="mb-3">
            {frontmatter.title}
          </Typography>
          <Typography variant="body-lg" muted className="mb-4">
            {frontmatter.description}
          </Typography>
          <div className="flex flex-wrap items-center gap-4 text-sm text-fg-muted">
            <time dateTime={frontmatter.date}>{formatDate(frontmatter.date)}</time>
            {frontmatter.url && (
              <a
                href={frontmatter.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand hover:text-brand-hover transition-colors duration-fast"
              >
                Visit project ↗
              </a>
            )}
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
        <Prose>
          <MDXRemote source={content} components={mdxComponents} />
        </Prose>
      </div>
    </PageLayout>
  );
}
