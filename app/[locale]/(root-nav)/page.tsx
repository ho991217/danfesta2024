import { getIsLoggedIn, getIsVerified } from '@/api';
import { ROUTES } from '@/constants';
import { AdBanner, Link } from '@components/common';
import { LineupTile, MenuTiles, NoticeTile } from '@components/home';

export default async function Home() {
  const isVerified = await getIsVerified();
  const isLoggedIn = await getIsLoggedIn();

  return (
    <div className="mb-20 flex flex-col gap-4 px-5">
      {isLoggedIn && !isVerified && (
        <NoticeTile>
          <span>티켓팅 서비스를 이용하려면 재학생 인증이 필요해요.</span>
          <div className="w-full flex items-center justify-end mt-4">
            <Link
              className="h-auto w-auto p-2 text-primary font-medium dark:text-primary"
              href={`${ROUTES.verify}?reverify=true`}
              variant="transparent"
            >
              재학생 인증하기
            </Link>
          </div>
        </NoticeTile>
      )}
      <LineupTile />
      <AdBanner />
      <MenuTiles />
    </div>
  );
}
