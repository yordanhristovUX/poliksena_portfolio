import { PageLayout } from '@/design-system/layouts/PageLayout';
import { Skeleton, PostListItemSkeleton } from '@/design-system/components/Skeleton';

export default function BlogLoading() {
  return (
    <PageLayout>
      <div className="mb-12 space-y-3">
        <Skeleton className="h-10 w-24" />
        <Skeleton className="h-6 w-96 max-w-full" />
      </div>
      <div>
        {Array.from({ length: 4 }).map((_, i) => (
          <PostListItemSkeleton key={i} />
        ))}
      </div>
    </PageLayout>
  );
}
