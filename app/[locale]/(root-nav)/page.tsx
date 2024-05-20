import { TileHeader, TileInfo } from '@/app/components/home/menu-tiles';
import { AdBanner } from '@components/common';
import {
  LineupTile,
  MenuTiles,
  NeedReverificationTile,
  NoticeTile,
} from '@components/home';
import { getTranslations } from 'next-intl/server';
import { BsBellFill, BsTicketFill } from 'react-icons/bs';
import { FaStamp } from 'react-icons/fa';
import { TiStarFullOutline } from 'react-icons/ti';

import { getAllLineupInfo } from '../(back-nav)/(padded)/lineup/actions';

export default async function Home() {
  const lineups = await getAllLineupInfo({
    random: true,
    count: 5,
  });
  const t = await getTranslations('Home.menu-tiles');
  const rich = (key: string) => t.rich(key, { br: () => <br /> });

  const tiles: TileInfo[] = [
    {
      id: 1,
      subtitle: 'ticketing',
      title: <TileHeader>{rich('ticketing')}</TileHeader>,
      link: '/ticketing',
      icon: <BsTicketFill size={17} />,
      bgColor: 'bg-primary',
      textColor: 'text-neutral-50',
      privateRoute: true,
    },
    {
      id: 2,
      subtitle: 'stamp',
      title: <TileHeader>{rich('stamp')}</TileHeader>,
      link: '/stamp',
      icon: <FaStamp size={17} />,
      bgColor: 'bg-white dark:bg-neutral-950',
      privateRoute: true,
    },
    {
      id: 3,
      subtitle: 'events',
      title: <TileHeader>{rich('events')}</TileHeader>,
      link: '/events',
      icon: <TiStarFullOutline size={17} />,
      bgColor: 'bg-white dark:bg-neutral-950',
    },
    {
      id: 4,
      subtitle: 'notice',
      title: <TileHeader>{rich('notice')}</TileHeader>,
      link: '/notice',
      icon: <BsBellFill size={17} />,
      bgColor: 'bg-neutral-300 dark:bg-neutral-900',
    },
  ];

  return (
    <div className="mb-20 flex flex-col gap-4 px-5">
      <NeedReverificationTile />
      <LineupTile lineups={lineups} />
      <AdBanner />
      <MenuTiles tiles={tiles} />
    </div>
  );
}
