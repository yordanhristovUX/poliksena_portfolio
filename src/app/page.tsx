import Link from 'next/link';
import { PageLayout } from '@/design-system/layouts/PageLayout';
import { Typography } from '@/design-system/components/Typography';
import { Button } from '@/design-system/components/Button';
import { Card, CardHeader, CardBody } from '@/design-system/components/Card';
import { Tag } from '@/design-system/components/Tag';
import { formatDateShort } from '@/design-system/utils/formatDate';
import { getAllBlogPosts } from '@/lib/content';
import { getAllWorkProjects } from '@/lib/content';

export default function HomePage() {
  const recentPosts = getAllBlogPosts().slice(0, 3);
  const featuredWork = getAllWorkProjects().slice(0, 3);

  return (
    <PageLayout>
      {/* Hero */}
      <section className="pb-20 pt-8">
        <div className="max-w-2xl">
          <Typography variant="display" className="mb-6">
            Designer &amp; developer building things on the web.
          </Typography>
          <Typography variant="body-lg" muted className="mb-8 max-w-xl">
            I work at the intersection of design and engineering — turning ideas into products that
            are fast, accessible, and a pleasure to use.
          </Typography>
          <div className="flex flex-wrap gap-3">
            <Button as={Link} href="/work" variant="primary">
              View my work
            </Button>
            <Button as={Link} href="/about" variant="secondary">
              About me
            </Button>
          </div>
        </div>
      </section>

      {/* Featured work */}
      {featuredWork.length > 0 && (
        <section className="py-16 border-t border-border">
          <div className="flex items-center justify-between mb-8">
            <Typography variant="h2">Selected work</Typography>
            <Link
              href="/work"
              className="text-sm text-brand hover:text-brand-hover transition-colors duration-fast"
            >
              All projects →
            </Link>
          </div>
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {featuredWork.map((project) => (
              <li key={project.slug}>
                <Link href={`/work/${project.slug}`} className="block h-full group">
                  <Card interactive as="article" className="h-full">
                    <CardHeader>
                      <Typography
                        variant="h4"
                        className="group-hover:text-brand transition-colors duration-fast"
                      >
                        {project.frontmatter.title}
                      </Typography>
                      <Typography variant="caption" muted className="mt-1">
                        {formatDateShort(project.frontmatter.date)}
                      </Typography>
                    </CardHeader>
                    <CardBody>
                      <Typography variant="body-sm" muted>
                        {project.frontmatter.description}
                      </Typography>
                      {project.frontmatter.tags.length > 0 && (
                        <div className="flex flex-wrap gap-1.5 mt-4">
                          {project.frontmatter.tags.slice(0, 3).map((tag) => (
                            <Tag key={tag}>{tag}</Tag>
                          ))}
                        </div>
                      )}
                    </CardBody>
                  </Card>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Recent posts */}
      {recentPosts.length > 0 && (
        <section className="py-16 border-t border-border">
          <div className="flex items-center justify-between mb-8">
            <Typography variant="h2">Recent writing</Typography>
            <Link
              href="/blog"
              className="text-sm text-brand hover:text-brand-hover transition-colors duration-fast"
            >
              All posts →
            </Link>
          </div>
          <ul className="divide-y divide-border">
            {recentPosts.map((post) => (
              <li key={post.slug}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group flex items-start justify-between gap-6 py-5 hover:text-brand transition-colors duration-fast"
                >
                  <div>
                    <Typography
                      variant="body"
                      className="font-medium group-hover:text-brand transition-colors duration-fast"
                    >
                      {post.frontmatter.title}
                    </Typography>
                    <Typography variant="body-sm" muted className="mt-1">
                      {post.frontmatter.description}
                    </Typography>
                  </div>
                  <Typography variant="caption" muted className="shrink-0 pt-0.5">
                    {formatDateShort(post.frontmatter.date)}
                  </Typography>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}
    </PageLayout>
  );
}
