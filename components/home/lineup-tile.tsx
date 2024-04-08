import Carousel from '../common/carousel';
import TileHeader from './tile-header';
import { get } from '@/api';
import { API_ROUTES } from '@/constants';
import { LineupInfo } from '@/app/[locale]/(back-nav)/lineup/page';
import { getTranslations } from 'next-intl/server';

export default async function LineupTile() {
  const allDay = ['FIRST_DAY', 'SECOND_DAY', 'THIRD_DAY'] as const;
  const data = (
    await Promise.all(
      allDay.map((day) => get<LineupInfo[]>(API_ROUTES.lineup.list(day)))
    )
  ).flat();
  const t = await getTranslations('LineupTile');

  return (
    <div className='w-full'>
      <TileHeader>
        <TileHeader.Head>{t('title')}</TileHeader.Head>
        <TileHeader.SeeAll href='/lineup'>{t('seeAll')}</TileHeader.SeeAll>
      </TileHeader>
      <div className='w-full aspect-[3/4] relative'>
        <Carousel images={data} />
      </div>
    </div>
  );
}
