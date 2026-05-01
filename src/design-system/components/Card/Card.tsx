import type { ReactNode } from 'react';
import { cn } from '@/design-system/utils/cn';

interface CardProps {
  children: ReactNode;
  className?: string;
  /** Adds hover lift effect — use for clickable cards */
  interactive?: boolean;
  as?: 'div' | 'article' | 'li';
}

export function Card({ children, className, interactive = false, as: Tag = 'div' }: CardProps) {
  return (
    <Tag
      className={cn(
        'rounded-radius-xl border border-border bg-bg-subtle p-6',
        interactive && [
          'cursor-pointer',
          'transition-shadow duration-normal',
          'hover:shadow-md hover:border-border-strong',
        ],
        className,
      )}
    >
      {children}
    </Tag>
  );
}

interface CardHeaderProps {
  children: ReactNode;
  className?: string;
}

export function CardHeader({ children, className }: CardHeaderProps) {
  return <div className={cn('mb-4', className)}>{children}</div>;
}

interface CardBodyProps {
  children: ReactNode;
  className?: string;
}

export function CardBody({ children, className }: CardBodyProps) {
  return <div className={cn('text-fg-muted', className)}>{children}</div>;
}

interface CardFooterProps {
  children: ReactNode;
  className?: string;
}

export function CardFooter({ children, className }: CardFooterProps) {
  return <div className={cn('mt-4 pt-4 border-t border-border', className)}>{children}</div>;
}
