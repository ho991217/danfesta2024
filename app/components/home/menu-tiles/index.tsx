import { Link } from '@components/common';
import type { PropsWithChildren } from 'react';
import { BsBellFill, BsTicketFill } from 'react-icons/bs';
import { FaStamp } from 'react-icons/fa';
import { TiStarFullOutline } from 'react-icons/ti';

import Tile from './tile';

export type TileInfo = {
  id: number;
  subtitle: string;
  title: JSX.Element;
  link: string;
  icon: React.ReactNode;
  bgColor: string;
  textColor?: string;
  privateRoute?: boolean;
};

const TileHeader = ({ children }: PropsWithChildren) => (
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
    link: '/ticketing',
    icon: <BsTicketFill size={17} />,
    bgColor: 'bg-primary',
    textColor: 'text-neutral-50',
    privateRoute: true,
  },
  {
    id: 2,
    subtitle: 'stamp',
    title: (
      <TileHeader>
        스탬프
        <br />
        확인하기
      </TileHeader>
    ),
    link: '/stamp',
    icon: <FaStamp size={17} />,
    bgColor: 'bg-white dark:bg-neutral-950',
    privateRoute: true,
  },
  {
    id: 3,
    subtitle: 'events',
    title: (
      <TileHeader>
        이벤트
        <br />
        확인하기
      </TileHeader>
    ),
    link: '/events',
    icon: <TiStarFullOutline size={17} />,
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
    link: '/notice',
    icon: <BsBellFill size={17} />,
    bgColor: 'bg-neutral-300 dark:bg-neutral-900',
  },
];

export default function MenuTiles() {
  return (
    <div className="w-full grid grid-cols-2 grid-rows-2 gap-4 aspect-square lg:flex lg:max-w-full lg:aspect-auto lg:gap-8">
      {tiles.map(({ privateRoute, ...tile }) => (
        <Link key={tile.id} href={tile.link} auth={privateRoute}>
          <Tile {...tile} />
        </Link>
      ))}
    </div>
  );
}
