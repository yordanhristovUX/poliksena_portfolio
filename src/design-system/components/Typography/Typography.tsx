import type { ElementType, ReactNode } from 'react';
import { cn } from '@/design-system/utils/cn';

type TypographyVariant =
  | 'display'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'body-lg'
  | 'body'
  | 'body-sm'
  | 'caption'
  | 'mono';

interface TypographyProps {
  variant: TypographyVariant;
  as?: ElementType;
  children: ReactNode;
  className?: string;
  muted?: boolean;
}

const variantStyles: Record<TypographyVariant, string> = {
  display: 'text-5xl font-bold tracking-tight leading-tight font-sans',
  h1: 'text-4xl font-bold tracking-tight leading-tight font-sans',
  h2: 'text-3xl font-semibold tracking-snug leading-snug font-sans',
  h3: 'text-2xl font-semibold tracking-snug leading-snug font-sans',
  h4: 'text-xl font-medium leading-snug font-sans',
  'body-lg': 'text-lg leading-relaxed font-sans',
  body: 'text-base leading-normal font-sans',
  'body-sm': 'text-sm leading-normal font-sans',
  caption: 'text-xs leading-normal font-sans',
  mono: 'text-sm leading-normal font-mono',
};

const defaultElement: Record<TypographyVariant, ElementType> = {
  display: 'h1',
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  'body-lg': 'p',
  body: 'p',
  'body-sm': 'p',
  caption: 'span',
  mono: 'code',
};

export function Typography({ variant, as, children, className, muted = false }: TypographyProps) {
  const Tag = as ?? defaultElement[variant];

  return (
    <Tag className={cn(variantStyles[variant], muted ? 'text-fg-muted' : 'text-fg', className)}>
      {children}
    </Tag>
  );
}
