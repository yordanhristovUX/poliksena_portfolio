import { PageLayout } from '@/design-system/layouts/PageLayout';
import { PostDetailSkeleton } from '@/design-system/components/Skeleton';

export default function WorkDetailLoading() {
  return (
    <PageLayout>
      <PostDetailSkeleton />
    </PageLayout>
  );
}
