import Link from 'next/link';
import { NavLink } from '@/design-system/components/NavLink';
import { ThemeToggle } from '@/design-system/components/ThemeToggle';

const NAV_ITEMS = [
  { href: '/work', label: 'Work' },
  { href: '/about', label: 'About' },
  { href: '/experience', label: 'Experience' },
  { href: '/#contact', label: 'Contact' },
] as const;

export function Header() {
  return (
    <header className="sticky top-0 z-raised border-b border-border bg-bg/90 backdrop-blur-sm">
      <div className="mx-auto flex h-20 max-w-[1920px] items-center justify-between px-10">
        {/* Logo mark */}
        <Link
          href="/"
          className="flex h-10 w-10 items-center justify-center rounded-full bg-fg text-bg transition-opacity hover:opacity-80"
          aria-label="Home"
        >
          <span className="font-display text-sm font-semibold leading-none">PC</span>
        </Link>

        {/* Nav */}
        <div className="flex items-center gap-4">
          <nav aria-label="Main navigation" className="flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <NavLink key={item.href} href={item.href}>
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="h-5 w-px bg-border" aria-hidden="true" />

          <a
            href="/cv.pdf"
            className="inline-flex h-10 items-center gap-2 rounded-full border border-border px-5 font-display text-sm font-semibold text-fg transition-colors duration-fast hover:bg-fg hover:text-bg"
          >
            Download CV
          </a>

          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
