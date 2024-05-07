'use client';

import { cn } from '@/app/lib/utils';
import { useRouter } from '@lib/navigation';
import { PropsWithChildren } from 'react';

export default function BackButton({
  children,
  className,
}: PropsWithChildren<{ className?: string }>) {
  const router = useRouter();
  return (
    <button
      onClick={() => router.back()}
      className={cn('w-full h-full', className)}
    >
      {children}
    </button>
  );
}
