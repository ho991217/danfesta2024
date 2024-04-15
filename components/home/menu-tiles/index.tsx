import Link from '@/components/common/link';
import { ROUTES } from '@/constants';
import { AiFillStar } from 'react-icons/ai';
import { BiSolidNavigation } from 'react-icons/bi';
import { BsBellFill, BsTicketFill } from 'react-icons/bs';

import Tile from './tile';

export type TileInfo = {
  id: number;
  subtitle: string;
  title: JSX.Element;
  link: string;
  icon: React.ReactNode;
  bgColor: string;
  textColor?: string;
};

const TileHeader = ({ children }: { children: React.ReactNode }) => (
  <div className="font-bold">{children}</div>
);

const tiles: TileInfo[] = [
  {
    id: 1,
    subtitle: 'ticketing',
    title: (
      <TileHeader>
        단국존
        <br />
        사전 티켓팅
      </TileHeader>
    ),
    link: ROUTES.ticketing.root,
    icon: <BsTicketFill size={17} />,
    bgColor: 'bg-primary',
    textColor: 'text-neutral-50',
  },
  {
    id: 2,
    subtitle: 'events',
    title: (
      <TileHeader>
        이벤트
        <br />
        확인하기
      </TileHeader>
    ),
    link: '/events',
    icon: <AiFillStar size={17} />,
    bgColor: 'bg-white dark:bg-neutral-950',
  },
  {
    id: 3,
    subtitle: 'live-map',
    title: (
      <TileHeader>
        부스별 위치
        <br />
        라이브 맵
      </TileHeader>
    ),
    link: '/live-map',
    icon: <BiSolidNavigation size={17} />,
    bgColor: 'bg-white dark:bg-neutral-950',
  },
  {
    id: 4,
    subtitle: 'notice',
    title: (
      <TileHeader>
        축제 관련
        <br />
        공지 및 알림
      </TileHeader>
    ),
    link: ROUTES.notice,
    icon: <BsBellFill size={17} />,
    bgColor: 'bg-neutral-300 dark:bg-neutral-900',
  },
];

export default function MenuTiles() {
  return (
    <div className="w-full grid grid-cols-2 grid-rows-2 gap-4 aspect-square">
      {tiles.map((tile) => (
        <Link key={tile.id} href={tile.link}>
          <Tile {...tile} />
        </Link>
      ))}
    </div>
  );
}
