import { AdBanner } from '@components/common';
import {
  LineupTile,
  MenuTiles,
  NeedReverificationTile,
} from '@components/home';

import { getAllLineupInfo } from '../(back-nav)/(padded)/lineup/actions';

export default async function Home() {
  const lineups = await getAllLineupInfo({
    random: true,
    count: 5,
  });

  return (
    <div className="mb-20 flex flex-col gap-4 px-5">
      <NeedReverificationTile />
      <LineupTile lineups={lineups} />
      <AdBanner />
      <MenuTiles />
    </div>
  );
}
