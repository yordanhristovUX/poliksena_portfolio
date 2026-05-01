'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { ReactNode } from 'react';
import { cn } from '@/design-system/utils/cn';

interface NavLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
  /** Exact match required for active state (default: false) */
  exact?: boolean;
}

export function NavLink({ href, children, className, exact = false }: NavLinkProps) {
  const pathname = usePathname();
  const isActive = exact ? pathname === href : pathname.startsWith(href);

  return (
    <Link
      href={href}
      className={cn(
        'text-sm font-medium transition-colors duration-fast',
        'px-3 py-1.5 rounded-radius-md',
        isActive ? 'text-fg bg-bg-muted' : 'text-fg-muted hover:text-fg hover:bg-bg-muted',
        className,
      )}
      aria-current={isActive ? 'page' : undefined}
    >
      {children}
    </Link>
  );
}
