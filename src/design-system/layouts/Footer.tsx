import Link from 'next/link';

const FOOTER_LINKS = [
  { href: 'https://linkedin.com/in/poliksena-christova', label: 'LinkedIn', external: true },
  { href: 'https://behance.net', label: 'Behance', external: true },
  { href: 'tel:+359883362528', label: '+359 883 36 2528', external: false },
] as const;

export function Footer() {
  return (
    <footer className="border-t border-border bg-bg">
      <div className="mx-auto grid max-w-[1920px] grid-cols-4 items-center gap-4 px-15 py-4">
        {/* Social + contact links */}
        {FOOTER_LINKS.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="font-display text-sm font-semibold text-fg transition-colors duration-fast hover:text-brand"
            {...(link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
          >
            {link.label}
          </Link>
        ))}

        {/* Copyright + CV */}
        <div className="flex items-center justify-between">
          <span className="font-display text-sm font-semibold text-fg">
            Poliksena Christova, 2026
          </span>
          <a
            href="/cv.pdf"
            className="inline-flex h-9 items-center rounded-full border border-border px-5 font-display text-sm font-semibold text-fg transition-colors duration-fast hover:bg-fg hover:text-bg"
          >
            Download CV
          </a>
        </div>
      </div>
    </footer>
  );
}
