'use client';

import { Link } from '@/components/common';
import { ROUTES } from '@/constants';
import { Button } from '@components/common';

export const dynamic = 'force-dynamic';

export default function NotFound() {
  return (
    <div>
      페이지를 찾을 수 없습니다.
      <Button>
        <Link href={ROUTES.home}>홈으로</Link>
      </Button>
    </div>
  );
}
