import type { Metadata } from 'next';
import { PageLayout } from '@/design-system/layouts/PageLayout';
import { Typography } from '@/design-system/components/Typography';
import { Tag } from '@/design-system/components/Tag';
import { Button } from '@/design-system/components/Button';

export const metadata: Metadata = {
  title: 'About',
  description: 'Designer and developer. A bit about me and what I do.',
};

const SKILLS = [
  'TypeScript',
  'React',
  'Next.js',
  'Figma',
  'Design Systems',
  'CSS / Tailwind',
  'Node.js',
  'Accessibility',
  'Performance',
] as const;

export default function AboutPage() {
  return (
    <PageLayout>
      <div className="max-w-2xl">
        <Typography variant="h1" className="mb-4">
          About
        </Typography>

        <div className="space-y-5 mb-12">
          <Typography variant="body-lg" muted>
            I&apos;m a designer and developer who cares about the craft of building for the web. I
            work at the intersection of design and engineering — comfortable in Figma and equally
            comfortable in a terminal.
          </Typography>
          <Typography variant="body-lg" muted>
            My focus is on design systems, component architecture, and the details that make
            interfaces feel considered. I believe good software is invisible — it gets out of the
            way and lets people do their work.
          </Typography>
          <Typography variant="body-lg" muted>
            When I&apos;m not building things, I write about design systems, tokens, and the process
            of translating design intent into code.
          </Typography>
        </div>

        {/* Skills */}
        <section className="mb-12">
          <Typography variant="h3" className="mb-4">
            Skills &amp; tools
          </Typography>
          <div className="flex flex-wrap gap-2">
            {SKILLS.map((skill) => (
              <Tag key={skill} variant="default">
                {skill}
              </Tag>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="border-t border-border pt-10">
          <Typography variant="h3" className="mb-2">
            Get in touch
          </Typography>
          <Typography variant="body" muted className="mb-6">
            I&apos;m open to interesting projects and conversations.
          </Typography>
          <div className="flex flex-wrap gap-3">
            <Button as="a" href="mailto:hello@yourname.com" variant="primary">
              Send an email
            </Button>
            <Button
              as="a"
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              variant="secondary"
            >
              GitHub
            </Button>
          </div>
        </section>
      </div>
    </PageLayout>
  );
}
