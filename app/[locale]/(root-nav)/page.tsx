import { AdBanner } from '@components/common';
import {
  LineupTile,
  MenuTiles,
  NeedReverificationTile,
} from '@components/home';

import { getAllLineupInfo } from '../(back-nav)/lineup/actions';

export default async function Home() {
  const lineups = await getAllLineupInfo();

  return (
    <div className="mb-20 flex flex-col gap-4 px-5 lg:mx-auto lg:max-w-full lg:px-10 lg:gap-8">
      <NeedReverificationTile />
      <LineupTile lineups={lineups} />
      <AdBanner />
      <MenuTiles />
    </div>
  );
}
