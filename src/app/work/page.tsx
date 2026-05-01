import type { Metadata } from 'next';
import Link from 'next/link';
import { Typography } from '@/design-system/components/Typography';
import { Tag } from '@/design-system/components/Tag';
import { Icon } from '@/design-system/components/Icon';
import { getAllWorkProjects } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Work',
  description: 'Selected case studies — Fintech, B2B, and product design.',
};

const PROJECT_ACCENTS: Record<string, string> = {
  'portfolio-website': 'var(--color-primitive-purple-600)',
  'figma-mcp-integration': 'var(--color-primitive-neutral-800)',
};
const DEFAULT_ACCENT = 'var(--color-primitive-neutral-800)';

export default function WorkPage() {
  const projects = getAllWorkProjects();

  return (
    <main className="flex-1">
      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section className="bg-bg px-10 pb-16 pt-16 lg:px-[180px]">
        <div className="mx-auto max-w-[1680px]">
          <h1
            className="font-display font-extrabold leading-none tracking-tighter text-fg mb-6"
            style={{ fontSize: 'clamp(3rem, 10vw, 11.25rem)' }}
          >
            Selected work
          </h1>
          <Typography variant="body" muted className="max-w-2xl">
            Most of my high-impact work is protected by NDA. Below are selected case studies that
            demonstrate my approach to product design.
          </Typography>
        </div>
      </section>

      {/* ── Project list ─────────────────────────────────────────── */}
      <section className="bg-bg px-10 pb-[120px] lg:px-[180px]">
        <div className="mx-auto max-w-[1680px]">
          {projects.length === 0 ? (
            <Typography variant="body" muted>
              Projects coming soon.
            </Typography>
          ) : (
            <ul className="flex flex-col gap-16">
              {projects.map((project) => {
                const accent = PROJECT_ACCENTS[project.slug] ?? DEFAULT_ACCENT;
                return (
                  <li key={project.slug}>
                    <Link href={`/work/${project.slug}`} className="group block">
                      <article className="overflow-hidden rounded-radius-xl border border-border">
                        <div
                          className="flex h-[300px] w-full items-end p-10"
                          style={{ backgroundColor: accent }}
                        >
                          <div className="flex flex-wrap items-center gap-2">
                            {project.frontmatter.tags.map((tag) => (
                              <Tag key={tag} className="border-white/20 bg-white/10 text-white">
                                {tag}
                              </Tag>
                            ))}
                          </div>
                        </div>
                        <div className="bg-bg-subtle p-10">
                          <div className="flex items-start justify-between gap-8">
                            <div className="flex-1">
                              <Typography
                                variant="h3"
                                className="mb-3 font-display group-hover:text-brand transition-colors duration-fast"
                              >
                                {project.frontmatter.title}
                              </Typography>
                              <Typography variant="body" muted>
                                {project.frontmatter.description}
                              </Typography>
                            </div>
                            <div className="shrink-0 flex h-12 w-12 items-center justify-center rounded-full border border-border text-fg-muted group-hover:bg-fg group-hover:text-bg group-hover:border-fg transition-all duration-fast">
                              <Icon name="arrow-up-right" size="sm" />
                            </div>
                          </div>
                        </div>
                      </article>
                    </Link>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </section>
    </main>
  );
}
