import { PageLayout } from '@/design-system/layouts/PageLayout';
import { PostDetailSkeleton } from '@/design-system/components/Skeleton';

export default function BlogPostLoading() {
  return (
    <PageLayout>
      <PostDetailSkeleton />
    </PageLayout>
  );
}
