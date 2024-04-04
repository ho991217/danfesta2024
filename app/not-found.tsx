'use client';

import { Button } from '@/components';
import Link from 'next/link';
import { redirect } from 'next/navigation';

export const dynamic = 'force-dynamic';

export default function NotFound() {
  return (
    <div>
      페이지를 찾을 수 없습니다.
      <Button>
        <Link href={'/'}>홈으로</Link>
      </Button>
    </div>
  );
}
