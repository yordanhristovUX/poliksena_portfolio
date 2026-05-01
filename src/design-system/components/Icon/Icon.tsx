import { cn } from '@/design-system/utils/cn';

// ---------------------------------------------------------------------------
// Icon size scale — maps to token spacing values
// ---------------------------------------------------------------------------

type IconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

const sizeStyles: Record<IconSize, string> = {
  xs: 'w-3 h-3', // 12px
  sm: 'w-4 h-4', // 16px
  md: 'w-5 h-5', // 20px
  lg: 'w-6 h-6', // 24px
  xl: 'w-8 h-8', // 32px
};

// ---------------------------------------------------------------------------
// Icon name registry — add new icons here as SVG path data
// ---------------------------------------------------------------------------

type IconName =
  | 'arrow-left'
  | 'arrow-right'
  | 'arrow-up-right'
  | 'chevron-right'
  | 'chevron-down'
  | 'close'
  | 'menu'
  | 'sun'
  | 'moon'
  | 'github'
  | 'linkedin'
  | 'rss'
  | 'mail'
  | 'external-link'
  | 'calendar'
  | 'clock'
  | 'tag'
  | 'search'
  | 'copy'
  | 'check';

// Each icon is a render function returning SVG path/shape elements.
// viewBox is always "0 0 24 24", stroke-based (Lucide style).
const icons: Record<IconName, () => React.ReactElement> = {
  'arrow-left': () => (
    <path d="M19 12H5M12 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" />
  ),
  'arrow-right': () => (
    <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
  ),
  'arrow-up-right': () => (
    <path d="M7 17L17 7M7 7h10v10" strokeLinecap="round" strokeLinejoin="round" />
  ),
  'chevron-right': () => <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />,
  'chevron-down': () => <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />,
  close: () => <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />,
  menu: () => <path d="M3 12h18M3 6h18M3 18h18" strokeLinecap="round" strokeLinejoin="round" />,
  sun: () => (
    <>
      <circle cx="12" cy="12" r="4" />
      <path
        d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"
        strokeLinecap="round"
      />
    </>
  ),
  moon: () => (
    <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" strokeLinecap="round" strokeLinejoin="round" />
  ),
  github: () => (
    <path
      d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  linkedin: () => (
    <>
      <path
        d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect x="2" y="9" width="4" height="12" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="4" cy="4" r="2" />
    </>
  ),
  rss: () => (
    <>
      <path
        d="M4 11a9 9 0 0 1 9 9M4 4a16 16 0 0 1 16 16"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="5" cy="19" r="1" fill="currentColor" stroke="none" />
    </>
  ),
  mail: () => (
    <>
      <rect
        x="2"
        y="4"
        width="20"
        height="16"
        rx="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  ),
  'external-link': () => (
    <path
      d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  calendar: () => (
    <>
      <rect
        x="3"
        y="4"
        width="18"
        height="18"
        rx="2"
        ry="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <line x1="16" y1="2" x2="16" y2="6" strokeLinecap="round" />
      <line x1="8" y1="2" x2="8" y2="6" strokeLinecap="round" />
      <line x1="3" y1="10" x2="21" y2="10" strokeLinecap="round" />
    </>
  ),
  clock: () => (
    <>
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l4 2" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
  tag: () => (
    <path
      d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82zM7 7h.01"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  search: () => (
    <>
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.35-4.35" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
  copy: () => (
    <>
      <rect
        x="9"
        y="9"
        width="13"
        height="13"
        rx="2"
        ry="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  ),
  check: () => <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />,
};

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

interface IconProps {
  name: IconName;
  size?: IconSize;
  className?: string;
  /** Accessible label — required when icon is used without adjacent text */
  label?: string;
}

export function Icon({ name, size = 'md', className, label }: IconProps) {
  const PathContent = icons[name];

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden={label ? undefined : true}
      aria-label={label}
      role={label ? 'img' : undefined}
      className={cn('shrink-0', sizeStyles[size], className)}
    >
      <PathContent />
    </svg>
  );
}

export type { IconName, IconSize };
