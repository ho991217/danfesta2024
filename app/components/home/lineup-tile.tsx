import { LineupInfo } from '@/app/[locale]/(back-nav)/(padded)/lineup/page';
import { getTranslations } from 'next-intl/server';

import Carousel from '../common/carousel';
import Tile from '../common/carousel/tile';
import TileHeader from './tile-header';

export default async function LineupTile({
  lineups,
}: {
  lineups: LineupInfo[];
}) {
  try {
    const t = await getTranslations('LineupTile');
    const isLineupEmpty = lineups.length === 0;

    return (
      <div className="w-full">
        <TileHeader>
          <TileHeader.Head>{t('title')}</TileHeader.Head>
          {!isLineupEmpty && (
            <TileHeader.SeeAll href="/lineup">{t('seeAll')}</TileHeader.SeeAll>
          )}
        </TileHeader>
        <div className="relative aspect-[3/4] w-full">
          {isLineupEmpty ? (
            <Tile
              id={0}
              opened={false}
              singer="라인업 공개 전"
              description="라인업이 공개되지 않았습니다."
              images={[]}
              performanceTime={null}
              festivalDate={null}
            />
          ) : (
            <Carousel>
              {lineups.map((tile, index) => (
                <Tile key={index} priority={index === 0} {...tile} />
              ))}
            </Carousel>
          )}
        </div>
      </div>
    );
  } catch (error) {
    const e = error as Error;
    return <span className="w-full text-neutral-500">{e.message}</span>;
  }
}
