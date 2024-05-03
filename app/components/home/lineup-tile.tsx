import { get } from '@/app/api';
import { API_ROUTES } from '@/app/lib/constants';
import { LineupInfo } from '@app/[locale]/(back-nav)/lineup/page';
import { getTranslations } from 'next-intl/server';

import Carousel from '../common/carousel';
import TileHeader from './tile-header';

export default async function LineupTile({
  lineups,
}: {
  lineups: LineupInfo[];
}) {
  try {
    // const allDay = ['FIRST_DAY', 'SECOND_DAY', 'THIRD_DAY'] as const;
    // const data = await Promise.all(
    //   allDay.map((day) => get<LineupInfo[]>(API_ROUTES.lineup.list(day))),
    // );
    // const lineups = data.flat();

    const t = await getTranslations('LineupTile');

    return (
      <div className="w-full lg:max-w-full">
        <TileHeader>
          <TileHeader.Head>{t('title')}</TileHeader.Head>
          <TileHeader.SeeAll href="/lineup">{t('seeAll')}</TileHeader.SeeAll>
        </TileHeader>
        <div className="relative aspect-[3/4] w-full lg:min-h-[500px] lg:aspect-auto">
          <Carousel lineups={lineups} />
        </div>
      </div>
    );
  } catch (error) {
    const e = error as Error;
    return <span className="w-full text-neutral-500">{e.message}</span>;
  }
}
