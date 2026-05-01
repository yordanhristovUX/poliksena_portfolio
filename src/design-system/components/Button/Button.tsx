import type { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react';
import { cn } from '@/design-system/utils/cn';

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'danger';
type ButtonSize = 'sm' | 'md' | 'lg';

type ButtonOwnProps<E extends ElementType = 'button'> = {
  as?: E;
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: ReactNode;
  className?: string;
  isLoading?: boolean;
};

type ButtonProps<E extends ElementType = 'button'> = ButtonOwnProps<E> &
  Omit<ComponentPropsWithoutRef<E>, keyof ButtonOwnProps<E>>;

const variantStyles: Record<ButtonVariant, string> = {
  primary: [
    'bg-brand text-brand-fg',
    'hover:bg-brand-hover',
    'focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2',
  ].join(' '),
  secondary: [
    'bg-bg-muted text-fg border border-border',
    'hover:bg-bg-subtle hover:border-border-strong',
    'focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2',
  ].join(' '),
  ghost: [
    'bg-transparent text-fg-muted',
    'hover:bg-bg-muted hover:text-fg',
    'focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2',
  ].join(' '),
  danger: [
    'bg-error text-white',
    'hover:opacity-90',
    'focus-visible:ring-2 focus-visible:ring-error focus-visible:ring-offset-2',
  ].join(' '),
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'h-8 px-3 text-sm gap-1.5 rounded-radius-md',
  md: 'h-10 px-4 text-base gap-2 rounded-radius-lg',
  lg: 'h-12 px-6 text-lg gap-2.5 rounded-radius-lg',
};

export function Button<E extends ElementType = 'button'>({
  as,
  variant = 'primary',
  size = 'md',
  children,
  className,
  isLoading = false,
  disabled,
  ...props
}: ButtonProps<E>) {
  const Tag = (as ?? 'button') as ElementType;

  return (
    <Tag
      disabled={Tag === 'button' ? (disabled ?? isLoading) : undefined}
      className={cn(
        'inline-flex items-center justify-center font-medium',
        'transition-colors duration-fast',
        'disabled:opacity-50 disabled:cursor-not-allowed',
        variantStyles[variant],
        sizeStyles[size],
        className,
      )}
      {...props}
    >
      {isLoading ? (
        <>
          <LoadingSpinner />
          <span>Loading…</span>
        </>
      ) : (
        children
      )}
    </Tag>
  );
}

function LoadingSpinner() {
  return (
    <svg
      className="animate-spin h-4 w-4"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
      />
    </svg>
  );
}
