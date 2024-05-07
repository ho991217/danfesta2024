import { getIsLoggedIn, getIsVerified } from '@/app/api';

import { Link } from '../common';
import NoticeTile from './notice-tile';

export default async function NeedReverificationTile() {
  const isVerified = await getIsVerified();
  const isLoggedIn = await getIsLoggedIn();
  return (
    isLoggedIn &&
    !isVerified && (
      <NoticeTile>
        <span>티켓팅 서비스를 이용하려면 재학생 인증이 필요해요.</span>
        <div className="w-full flex items-center justify-end mt-4">
          <Link
            className="h-auto w-auto p-2 text-primary font-medium dark:text-primary"
            href="/need-reverification"
            variant="transparent"
          >
            재학생 인증하기
          </Link>
        </div>
      </NoticeTile>
    )
  );
}
