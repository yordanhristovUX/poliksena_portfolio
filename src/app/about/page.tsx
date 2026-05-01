import type { Metadata } from 'next';
import Link from 'next/link';
import { Icon } from '@/design-system/components/Icon';

export const metadata: Metadata = {
  title: 'About',
  description: 'Product designer who loves untangling complex problems.',
};

const VALUES = [
  {
    title: 'Thrive for excellence',
    description:
      'I see my work as a continuous journey, evolving alongside advancements in technology and design. I hold myself to high standards and constantly seek to improve.',
  },
  {
    title: 'Be kind',
    description:
      'I believe that great products are built by happy teams. Treating people with respect and empathy is not just a value — it is how I work every day.',
  },
  {
    title: 'Collaboration',
    description:
      'My team views me as a strong collaborator who prioritizes teamwork. I actively seek diverse perspectives and create space for everyone to contribute.',
  },
  {
    title: 'Communication',
    description:
      'I firmly believe that clear communication is crucial, which is why I always strive to articulate design decisions with context and rationale.',
  },
  {
    title: 'Adaptability',
    description:
      'I am adaptable and respond swiftly to changes in project requirements and priorities, keeping teams aligned without losing momentum.',
  },
  {
    title: 'Curiosity',
    description:
      'I ask questions before jumping to solutions. Understanding the problem deeply is the most important step in designing something that actually works.',
  },
] as const;

const STRENGTHS = [
  'Systems thinking',
  'Stakeholder alignment',
  'Design critique',
  'Rapid prototyping',
  'User research',
  'Design tokens',
  'Accessibility',
  'Cross-functional leadership',
] as const;

export default function AboutPage() {
  return (
    // About page uses the light theme surface (white bg, dark text) per Figma
    <div className="flex-1 bg-bg-inverted text-fg-inverted">
      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section className="px-10 pb-20 pt-20 lg:px-[120px]">
        <div className="mx-auto max-w-[1680px]">
          <h1
            className="font-display font-extrabold leading-tight tracking-tighter text-fg-inverted mb-10"
            style={{ fontSize: 'clamp(3rem, 8vw, 8rem)' }}
          >
            Nice to meet you ❤️
          </h1>

          <div className="grid gap-16 lg:grid-cols-2">
            <p
              className="font-body leading-relaxed text-fg-inverted"
              style={{ fontSize: '1.5rem' }}
            >
              I&apos;m Poliksena, a Product Designer who loves untangling complex problems and
              turning them into clear, scalable product decisions. I work at the intersection of
              strategy, systems thinking, and visual craft.
            </p>

            <div className="flex flex-col">
              <Link
                href="/work"
                className="group flex items-center justify-between border-b border-border-strong py-5 text-fg-inverted transition-colors hover:border-fg-inverted"
              >
                <span className="font-display text-xl font-semibold">View selected work</span>
                <Icon name="arrow-up-right" size="md" />
              </Link>
              <a
                href="/cv.pdf"
                className="group flex items-center justify-between border-b border-border-strong py-5 text-fg-inverted transition-colors hover:border-fg-inverted"
              >
                <span className="font-display text-xl font-semibold">Download CV</span>
                <Icon name="arrow-up-right" size="md" />
              </a>
              <a
                href="mailto:poliksena@example.com"
                className="group flex items-center justify-between border-b border-border-strong py-5 text-fg-inverted transition-colors hover:border-fg-inverted"
              >
                <span className="font-display text-xl font-semibold">Get in touch</span>
                <Icon name="mail" size="md" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── My Values ────────────────────────────────────────────── */}
      <section className="px-10 py-20 lg:px-[120px]">
        <div className="mx-auto max-w-[1680px]">
          <h2
            className="font-display font-extrabold leading-none tracking-tighter text-fg-inverted mb-16"
            style={{ fontSize: 'clamp(3rem, 10vw, 8rem)' }}
          >
            My Values
          </h2>

          <div className="grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {VALUES.map((value) => (
              <div key={value.title} className="flex flex-col gap-4">
                <h3
                  className="font-display font-semibold text-fg-inverted"
                  style={{ fontSize: '2.5rem', lineHeight: 1.1 }}
                >
                  {value.title}
                </h3>
                <p className="font-body text-base leading-relaxed text-fg-muted">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Recognized strengths ─────────────────────────────────── */}
      <section className="px-10 py-20 lg:px-[120px]">
        <div className="mx-auto max-w-[1680px]">
          <h2
            className="font-display font-extrabold leading-none tracking-tighter text-fg-inverted mb-16"
            style={{ fontSize: 'clamp(3rem, 10vw, 8rem)' }}
          >
            Recognized strengths
          </h2>

          <ul className="flex flex-wrap gap-3">
            {STRENGTHS.map((strength) => (
              <li
                key={strength}
                className="inline-flex items-center rounded-full border border-border-strong px-5 py-2 font-display text-base font-semibold text-fg-inverted"
              >
                {strength}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
