import type { ReactNode } from 'react';
import { cn } from '@/design-system/utils/cn';

interface ProseProps {
  children: ReactNode;
  className?: string;
  /** Use serif font for long-form reading (blog posts) */
  serif?: boolean;
}

/**
 * Prose wrapper for MDX content.
 * Applies token-based typographic styles to raw HTML elements
 * produced by the MDX renderer.
 */
export function Prose({ children, className, serif = false }: ProseProps) {
  return (
    <div className={cn('prose-tokens', serif ? 'font-serif' : 'font-sans', className)}>
      {children}
    </div>
  );
}
