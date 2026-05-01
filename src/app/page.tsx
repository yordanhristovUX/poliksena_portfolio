import Link from 'next/link';
import { Typography } from '@/design-system/components/Typography';
import { Tag } from '@/design-system/components/Tag';
import { Icon } from '@/design-system/components/Icon';
import { getAllWorkProjects } from '@/lib/content';

// Accent colors per project — defined as CSS-compatible values
// These are intentional design choices from Figma, not arbitrary hardcodes
const PROJECT_ACCENTS: Record<string, string> = {
  'portfolio-website': 'var(--color-primitive-purple-600)',
  'figma-mcp-integration': 'var(--color-primitive-neutral-800)',
};
const DEFAULT_ACCENT = 'var(--color-primitive-neutral-800)';

export default function HomePage() {
  const projects = getAllWorkProjects().slice(0, 4);

  return (
    <main className="flex-1">
      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section className="bg-bg px-10 pb-20 pt-20 lg:px-[120px]">
        <div className="mx-auto max-w-[1680px]">
          <p className="font-label text-xs tracking-wider uppercase text-fg-muted mb-6">
            Hello, I&apos;m Poliksena
          </p>

          <h1
            className="font-display font-extrabold leading-tight tracking-tighter text-fg mb-10"
            style={{ fontSize: 'clamp(3rem, 8vw, 8rem)' }}
          >
            I turn complex problems
            <br />
            into clear, scalable
            <br />
            product decisions
          </h1>

          <div className="flex flex-wrap items-center gap-4 mb-20">
            <Link
              href="/work"
              className="inline-flex h-12 items-center gap-2 rounded-full bg-fg px-6 font-display text-base font-semibold text-bg transition-opacity duration-fast hover:opacity-80"
            >
              View work
              <Icon name="arrow-up-right" size="sm" />
            </Link>
            <Link
              href="/about"
              className="inline-flex h-12 items-center gap-2 rounded-full border border-border px-6 font-display text-base font-semibold text-fg transition-colors duration-fast hover:bg-fg/10"
            >
              About me
            </Link>
          </div>

          <div className="border-t border-border pt-8">
            <p className="font-label text-xs tracking-wider uppercase text-fg-muted mb-6">
              Clients
            </p>
            <div className="flex flex-wrap items-center gap-10 opacity-60">
              {['Paysafe', 'Progress Software', 'Freelancer.com', 'Taxback', 'Cargill'].map((c) => (
                <span key={c} className="font-display text-sm font-semibold text-fg">
                  {c}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Selected work ────────────────────────────────────────── */}
      <section className="bg-bg px-10 pb-[120px] pt-20 lg:px-[120px]">
        <div className="mx-auto max-w-[1680px]">
          <div className="mb-16">
            <h2
              className="font-display font-extrabold leading-none tracking-tighter text-fg mb-4"
              style={{ fontSize: 'clamp(3rem, 10vw, 11.25rem)' }}
            >
              Selected work
            </h2>
            <Typography variant="body" muted className="max-w-2xl">
              Due to the sensitive nature of corporate Fintech and B2B platforms, some of my recent
              work is protected by NDA. Below are selected case studies.
            </Typography>
          </div>

          {projects.length > 0 ? (
            <ul className="grid gap-16">
              {projects.map((project) => {
                const accent = PROJECT_ACCENTS[project.slug] ?? DEFAULT_ACCENT;
                return (
                  <li key={project.slug}>
                    <Link href={`/work/${project.slug}`} className="group block">
                      <article className="overflow-hidden rounded-radius-xl border border-border">
                        <div
                          className="flex h-[300px] w-full items-end p-8 lg:h-[400px]"
                          style={{ backgroundColor: accent }}
                        >
                          <div className="flex flex-wrap items-center gap-2">
                            {project.frontmatter.tags.slice(0, 3).map((tag) => (
                              <Tag key={tag} className="border-white/20 bg-white/10 text-white">
                                {tag}
                              </Tag>
                            ))}
                          </div>
                        </div>
                        <div className="bg-bg-subtle p-8 lg:p-10">
                          <div className="flex items-start justify-between gap-6">
                            <div>
                              <Typography
                                variant="h3"
                                className="mb-2 font-display group-hover:text-brand transition-colors duration-fast"
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
          ) : (
            <Typography variant="body" muted>
              Projects coming soon.
            </Typography>
          )}
        </div>
      </section>

      {/* ── Values CTA ───────────────────────────────────────────── */}
      <section className="bg-bg border-t border-border px-10 py-20 lg:px-[120px]">
        <div className="mx-auto max-w-[1680px]">
          <Link
            href="/about"
            className="group flex items-start justify-between gap-8 border-b border-border py-10 transition-colors duration-slow hover:border-brand"
          >
            <h2
              className="font-display font-extrabold leading-tight tracking-tighter text-fg group-hover:text-brand transition-colors duration-fast"
              style={{ fontSize: 'clamp(2rem, 6vw, 8rem)' }}
            >
              Learn more about my
              <br />
              values &amp; strengths
            </h2>
            <div className="shrink-0 mt-2 flex h-16 w-16 items-center justify-center rounded-full border border-border text-fg group-hover:bg-fg group-hover:text-bg group-hover:border-fg transition-all duration-fast">
              <Icon name="arrow-up-right" size="lg" />
            </div>
          </Link>
        </div>
      </section>

      {/* ── Art section ──────────────────────────────────────────── */}
      <section
        className="px-10 py-20 lg:px-[120px]"
        style={{ backgroundColor: 'var(--color-primitive-neutral-900)' }}
      >
        <div className="mx-auto max-w-[1680px]">
          <h2
            className="font-display font-extrabold leading-none tracking-tighter text-fg mb-6"
            style={{ fontSize: 'clamp(3rem, 10vw, 7.5rem)' }}
          >
            Art
          </h2>
          <p className="font-body text-fg-muted text-base max-w-xl">
            Beyond product design — fine art, illustration, and visual exploration.
          </p>
        </div>
      </section>
    </main>
  );
}
