import type { Metadata } from 'next';
import Link from 'next/link';
import { PageLayout } from '@/design-system/layouts/PageLayout';
import { Typography } from '@/design-system/components/Typography';
import { Card, CardHeader, CardBody } from '@/design-system/components/Card';
import { Tag } from '@/design-system/components/Tag';
import { formatDateShort } from '@/design-system/utils/formatDate';
import { getAllWorkProjects } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Work',
  description: 'Selected projects and case studies.',
};

export default function WorkPage() {
  const projects = getAllWorkProjects();

  return (
    <PageLayout>
      <div className="mb-12">
        <Typography variant="h1" className="mb-3">
          Work
        </Typography>
        <Typography variant="body-lg" muted className="max-w-xl">
          Selected projects — design systems, web apps, and experiments.
        </Typography>
      </div>

      {projects.length === 0 ? (
        <Typography variant="body" muted>
          No projects yet.
        </Typography>
      ) : (
        <ul className="grid gap-6 sm:grid-cols-2">
          {projects.map((project) => (
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
                        {project.frontmatter.tags.map((tag) => (
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
      )}
    </PageLayout>
  );
}
