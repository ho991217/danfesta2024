import { getIsLoggedIn, getIsVerified } from '@/api';
import { ROUTES } from '@/constants';
import { AdBanner, Button, Link } from '@components/common';
import { LineupTile, MenuTiles, NoticeTile } from '@components/home';

export default async function Home() {
  const isVerified = await getIsVerified();
  const isLoggedIn = await getIsLoggedIn();

  return (
    <div className="mb-20 flex flex-col gap-4 px-5">
      {isLoggedIn && !isVerified && (
        <NoticeTile>
          <span>
            티켓팅 등의 서비스를 이용하시려면 재학생 인증이 필요합니다.
          </span>
          <Link href={`${ROUTES.verify}?reverify=true`}>
            <Button variant="transparent" className="mt-2" animateOnClick>
              인증하러 가기
            </Button>
          </Link>
        </NoticeTile>
      )}
      <LineupTile />
      <AdBanner />
      <MenuTiles />
    </div>
  );
}
