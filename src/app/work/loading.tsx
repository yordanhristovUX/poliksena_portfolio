import { PageLayout } from '@/design-system/layouts/PageLayout';
import { Skeleton, PostCardSkeleton } from '@/design-system/components/Skeleton';

export default function WorkLoading() {
  return (
    <PageLayout>
      <div className="mb-12 space-y-3">
        <Skeleton className="h-10 w-20" />
        <Skeleton className="h-6 w-80 max-w-full" />
      </div>
      <div className="grid gap-6 sm:grid-cols-2">
        {Array.from({ length: 4 }).map((_, i) => (
          <PostCardSkeleton key={i} />
        ))}
      </div>
    </PageLayout>
  );
}
