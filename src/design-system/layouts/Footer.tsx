import Link from 'next/link';

const FOOTER_LINKS = [
  { href: 'https://github.com', label: 'GitHub', external: true },
  { href: 'https://linkedin.com', label: 'LinkedIn', external: true },
  { href: '/rss.xml', label: 'RSS', external: false },
] as const;

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border mt-auto">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row">
        <p className="text-sm text-fg-muted">&copy; {year} Your Name. All rights reserved.</p>
        <nav aria-label="Footer navigation" className="flex items-center gap-4">
          {FOOTER_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-fg-muted hover:text-fg transition-colors duration-fast"
              {...(link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
