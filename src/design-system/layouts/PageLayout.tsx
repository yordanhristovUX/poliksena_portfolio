import type { ReactNode } from 'react';
import { cn } from '@/design-system/utils/cn';

interface PageLayoutProps {
  children: ReactNode;
  className?: string;
  /** Constrain content width and add horizontal padding */
  contained?: boolean;
}

/**
 * Standard page content wrapper.
 * Sits between Header and Footer in the root layout.
 */
export function PageLayout({ children, className, contained = true }: PageLayoutProps) {
  return (
    <main className={cn('flex-1', contained && 'mx-auto w-full max-w-5xl px-6 py-16', className)}>
      {children}
    </main>
  );
}
