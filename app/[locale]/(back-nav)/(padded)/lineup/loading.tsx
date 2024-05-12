'use client';

import { Skeleton } from '@components/ui/skeleton';

export default function Loading() {
  return (
    <div className="flex flex-col items-center gap-4">
      <Skeleton className="w-full h-16" />
      <Skeleton className="w-full aspect-[3/4]" />
      <Skeleton className="w-full aspect-[3/4]" />
    </div>
  );
}
