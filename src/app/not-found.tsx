import type { Metadata } from 'next';
import Link from 'next/link';
import { PageLayout } from '@/design-system/layouts/PageLayout';
import { Typography } from '@/design-system/components/Typography';
import { Button } from '@/design-system/components/Button';
import { Icon } from '@/design-system/components/Icon';

export const metadata: Metadata = {
  title: '404 — Page not found',
};

export default function NotFound() {
  return (
    <PageLayout>
      <div className="flex flex-col items-start gap-6 py-16 max-w-md">
        <Typography variant="display" className="text-fg-subtle">
          404
        </Typography>
        <div>
          <Typography variant="h2" className="mb-2">
            Page not found
          </Typography>
          <Typography variant="body-lg" muted>
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </Typography>
        </div>
        <Button as={Link} href="/" variant="secondary">
          <Icon name="arrow-left" size="sm" />
          Back to home
        </Button>
      </div>
    </PageLayout>
  );
}
