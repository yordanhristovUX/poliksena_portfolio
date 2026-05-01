import type { ReactNode } from 'react';
import { cn } from '@/design-system/utils/cn';

interface PageLayoutProps {
  children: ReactNode;
  className?: string;
  /**
   * When true, constrains content to max-w-5xl with standard padding.
   * Set to false for full-bleed pages that manage their own layout.
   */
  contained?: boolean;
}

export function PageLayout({ children, className, contained = false }: PageLayoutProps) {
  return (
    <main className={cn('flex-1', contained && 'mx-auto w-full max-w-5xl px-6 py-16', className)}>
      {children}
    </main>
  );
}
