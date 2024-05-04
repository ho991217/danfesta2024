import { getIsLoggedIn, getIsVerified } from '@api/.';
import { AdBanner, Link } from '@components/common';
import { LineupTile, MenuTiles, NoticeTile } from '@components/home';

import { getAllLineupInfo } from '../(back-nav)/lineup/actions';

export default async function Home() {
  const isVerified = await getIsVerified();
  const isLoggedIn = await getIsLoggedIn();
  const lineups = await getAllLineupInfo();

  return (
    <div className="mb-20 flex flex-col gap-4 px-5 lg:mx-auto lg:max-w-full lg:px-10 lg:gap-8">
      {isLoggedIn && !isVerified && (
        <NoticeTile>
          <span>티켓팅 서비스를 이용하려면 재학생 인증이 필요해요.</span>
          <div className="w-full flex items-center justify-end mt-4">
            <Link
              className="h-auto w-auto p-2 text-primary font-medium dark:text-primary"
              href={{
                pathname: '/verify',
                query: { reverify: 'true' },
              }}
              variant="transparent"
            >
              재학생 인증하기
            </Link>
          </div>
        </NoticeTile>
      )}
      <LineupTile lineups={lineups} />
      <AdBanner />
      <MenuTiles />
    </div>
  );
}
