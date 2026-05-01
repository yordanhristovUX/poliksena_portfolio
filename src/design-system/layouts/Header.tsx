import Link from 'next/link';
import { NavLink } from '@/design-system/components/NavLink';
import { ThemeToggle } from '@/design-system/components/ThemeToggle';

const NAV_ITEMS = [
  { href: '/work', label: 'Work' },
  { href: '/blog', label: 'Blog' },
  { href: '/about', label: 'About' },
] as const;

export function Header() {
  return (
    <header className="sticky top-0 z-raised border-b border-border bg-bg/80 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        {/* Wordmark / logo */}
        <Link
          href="/"
          className="text-base font-semibold text-fg hover:text-brand transition-colors duration-fast"
        >
          Your Name
        </Link>

        {/* Nav + theme toggle */}
        <div className="flex items-center gap-1">
          <nav aria-label="Main navigation" className="flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <NavLink key={item.href} href={item.href}>
                {item.label}
              </NavLink>
            ))}
          </nav>
          <div className="ml-2 h-5 w-px bg-border" aria-hidden="true" />
          <ThemeToggle className="ml-2" />
        </div>
      </div>
    </header>
  );
}
