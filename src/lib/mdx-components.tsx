import type { MDXComponents } from 'mdx/types';
import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/design-system/utils/cn';

/**
 * MDX component map.
 * Maps raw HTML elements produced by MDX to styled React components.
 * All styles use design tokens — no hardcoded values.
 *
 * Used by next-mdx-remote's <MDXRemote components={mdxComponents} />.
 */
export const mdxComponents: MDXComponents = {
  // Headings
  h1: ({ className, ...props }) => (
    <h1
      className={cn('text-4xl font-bold tracking-tight text-fg mt-8 mb-4', className)}
      {...props}
    />
  ),
  h2: ({ className, ...props }) => (
    <h2
      className={cn(
        'text-3xl font-semibold tracking-tight text-fg mt-8 mb-3 border-b border-border pb-2',
        className,
      )}
      {...props}
    />
  ),
  h3: ({ className, ...props }) => (
    <h3 className={cn('text-2xl font-semibold text-fg mt-6 mb-2', className)} {...props} />
  ),
  h4: ({ className, ...props }) => (
    <h4 className={cn('text-xl font-medium text-fg mt-4 mb-2', className)} {...props} />
  ),

  // Body
  p: ({ className, ...props }) => (
    <p className={cn('text-base leading-relaxed text-fg mb-5', className)} {...props} />
  ),

  // Links — use Next.js Link for internal, <a> for external
  a: ({ href = '', className, children, ...props }) => {
    const isExternal = href.startsWith('http') || href.startsWith('//');
    if (isExternal) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            'text-brand underline underline-offset-4 hover:text-brand-hover transition-colors duration-fast',
            className,
          )}
          {...props}
        >
          {children}
        </a>
      );
    }
    return (
      <Link
        href={href}
        className={cn(
          'text-brand underline underline-offset-4 hover:text-brand-hover transition-colors duration-fast',
          className,
        )}
        {...props}
      >
        {children}
      </Link>
    );
  },

  // Code
  code: ({ className, ...props }) => (
    <code
      className={cn(
        'font-mono text-sm bg-bg-muted text-fg px-1.5 py-0.5 rounded border border-border',
        className,
      )}
      {...props}
    />
  ),
  pre: ({ className, ...props }) => (
    <pre
      className={cn(
        'bg-bg-inverted text-fg-inverted rounded-radius-lg p-5 overflow-x-auto text-sm leading-relaxed mb-6',
        className,
      )}
      {...props}
    />
  ),

  // Lists
  ul: ({ className, ...props }) => (
    <ul className={cn('list-disc pl-6 mb-5 space-y-1.5 text-fg', className)} {...props} />
  ),
  ol: ({ className, ...props }) => (
    <ol className={cn('list-decimal pl-6 mb-5 space-y-1.5 text-fg', className)} {...props} />
  ),
  li: ({ className, ...props }) => <li className={cn('leading-relaxed', className)} {...props} />,

  // Blockquote
  blockquote: ({ className, ...props }) => (
    <blockquote
      className={cn('border-l-4 border-brand pl-5 italic text-fg-muted my-6', className)}
      {...props}
    />
  ),

  // Horizontal rule
  hr: ({ className, ...props }) => (
    <hr className={cn('border-border my-10', className)} {...props} />
  ),

  // Table
  table: ({ className, ...props }) => (
    <div className="overflow-x-auto mb-6">
      <table className={cn('w-full text-sm border-collapse', className)} {...props} />
    </div>
  ),
  th: ({ className, ...props }) => (
    <th
      className={cn(
        'text-left font-semibold text-fg px-3 py-2 border-b-2 border-border-strong',
        className,
      )}
      {...props}
    />
  ),
  td: ({ className, ...props }) => (
    <td className={cn('px-3 py-2 border-b border-border text-fg-muted', className)} {...props} />
  ),

  // Image — uses Next.js Image for optimisation
  img: ({ src, alt, ...props }) => {
    if (!src) return null;
    return (
      <span className="block my-6 rounded-radius-lg overflow-hidden">
        <Image
          src={src}
          alt={alt ?? ''}
          width={800}
          height={450}
          className="w-full h-auto"
          {...(props as object)}
        />
      </span>
    );
  },

  // Strong / em
  strong: ({ className, ...props }) => (
    <strong className={cn('font-semibold text-fg', className)} {...props} />
  ),
  em: ({ className, ...props }) => <em className={cn('italic', className)} {...props} />,
};
