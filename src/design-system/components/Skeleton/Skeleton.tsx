import { cn } from '@/design-system/utils/cn';

interface SkeletonProps {
  className?: string;
}

/**
 * Animated loading placeholder.
 * Use to match the shape of the content it replaces.
 */
export function Skeleton({ className }: SkeletonProps) {
  return (
    <div className={cn('animate-pulse rounded-radius bg-bg-muted', className)} aria-hidden="true" />
  );
}

// ---------------------------------------------------------------------------
// Composed skeletons for common content shapes
// ---------------------------------------------------------------------------

export function PostCardSkeleton() {
  return (
    <div className="rounded-radius-xl border border-border bg-bg-subtle p-6 space-y-3">
      <Skeleton className="h-5 w-3/4" />
      <Skeleton className="h-3 w-1/4" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-5/6" />
      <div className="flex gap-1.5 pt-1">
        <Skeleton className="h-5 w-14 rounded-radius-full" />
        <Skeleton className="h-5 w-16 rounded-radius-full" />
      </div>
    </div>
  );
}

export function PostListItemSkeleton() {
  return (
    <div className="flex items-start justify-between gap-6 py-7 border-b border-border">
      <div className="flex-1 space-y-2">
        <Skeleton className="h-5 w-2/3" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-4/5" />
        <div className="flex gap-1.5 pt-1">
          <Skeleton className="h-5 w-14 rounded-radius-full" />
          <Skeleton className="h-5 w-16 rounded-radius-full" />
        </div>
      </div>
      <div className="shrink-0 space-y-1.5">
        <Skeleton className="h-3 w-20" />
        <Skeleton className="h-3 w-16" />
      </div>
    </div>
  );
}

export function PostDetailSkeleton() {
  return (
    <div className="max-w-2xl space-y-6">
      <Skeleton className="h-4 w-24" />
      <div className="space-y-3">
        <Skeleton className="h-10 w-3/4" />
        <Skeleton className="h-6 w-full" />
        <Skeleton className="h-6 w-5/6" />
        <div className="flex gap-3 pt-1">
          <Skeleton className="h-4 w-28" />
          <Skeleton className="h-4 w-20" />
        </div>
      </div>
      <div className="space-y-3 pt-4">
        {Array.from({ length: 6 }).map((_, i) => (
          <Skeleton key={i} className="h-4 w-full" />
        ))}
        <Skeleton className="h-4 w-3/4" />
      </div>
    </div>
  );
}
