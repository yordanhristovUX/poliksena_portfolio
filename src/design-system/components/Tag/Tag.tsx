import type { ReactNode } from 'react';
import { cn } from '@/design-system/utils/cn';

type TagVariant = 'default' | 'brand' | 'success' | 'warning' | 'error';

interface TagProps {
  children: ReactNode;
  variant?: TagVariant;
  className?: string;
}

const variantStyles: Record<TagVariant, string> = {
  default: 'bg-bg-muted text-fg-muted border-border',
  brand: 'bg-brand-subtle text-brand border-brand/20',
  success: 'bg-success/10 text-success border-success/20',
  warning: 'bg-warning/10 text-warning border-warning/20',
  error: 'bg-error/10 text-error border-error/20',
};

export function Tag({ children, variant = 'default', className }: TagProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center px-2.5 py-0.5',
        'text-xs font-medium rounded-radius-full',
        'border',
        variantStyles[variant],
        className,
      )}
    >
      {children}
    </span>
  );
}
