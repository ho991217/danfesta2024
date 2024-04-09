import Carousel from '../common/carousel';
import TileHeader from './tile-header';
import { API_ROUTES, API_URL } from '@/constants';
import { LineupInfo } from '@/app/[locale]/(back-nav)/lineup/page';
import { getTranslations } from 'next-intl/server';

export default async function LineupTile() {
  try {
    const allDay = ['FIRST_DAY', 'SECOND_DAY', 'THIRD_DAY'] as const;
    const data = (
      await Promise.all(
        allDay.map((day) =>
          fetch(`${API_URL}${API_ROUTES.lineup.list(day)}`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
            cache: 'no-store',
          }).then((res) => {
            if (!res.ok) return res.text();
            return res.json();
          })
        )
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
  } catch (error) {
    const e = error as Error;
    console.error(error);
    return <span className='w-full text-neutral-500'>{e.message}</span>;
  }
}
