'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { ReactNode } from 'react';
import { cn } from '@/design-system/utils/cn';

interface NavLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
  exact?: boolean;
}

export function NavLink({ href, children, className, exact = false }: NavLinkProps) {
  const pathname = usePathname();
  const isActive = exact ? pathname === href : pathname.startsWith(href) && href !== '/';

  return (
    <Link
      href={href}
      className={cn(
        'inline-flex h-10 items-center rounded-full px-4',
        'font-label text-sm font-medium tracking-wide',
        'transition-colors duration-fast',
        isActive ? 'bg-fg text-bg' : 'text-fg-muted hover:text-fg hover:bg-fg/10',
        className,
      )}
      aria-current={isActive ? 'page' : undefined}
    >
      {children}
    </Link>
  );
}
