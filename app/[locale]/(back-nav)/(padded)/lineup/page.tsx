import Tile from '@components/common/carousel/tile';
import { DateSelector } from '@components/lineup';
import { SearchParams } from '@lib/types';

import { getLineupInfoByDay } from './actions';

export type FestivalDate = 'FIRST_DAY' | 'SECOND_DAY' | 'THIRD_DAY';

export type LineupImage = {
  url: string;
  originalName: string;
  mimeType: string;
  blurImage?: string;
};

export type LineupInfo = {
  id: number | null;
  singer: string | '공개 예정';
  images: LineupImage[];
  description: string | '공개 예정';
  performanceTime: string | null;
  festivalDate: FestivalDate | null;
  opened: boolean;
};

export default async function LineupPage({
  searchParams: { day = 'FIRST_DAY' },
}: SearchParams<{
  day?: FestivalDate;
}>) {
  const lineups = await getLineupInfoByDay(day);

  return (
    <div className="mb-20 flex flex-col gap-4">
      <DateSelector selectedDay={day} />
      {lineups.length > 0 ? (
        lineups.map((lineup, index) => (
          <Tile key={index} priority={index === 0} {...lineup} />
        ))
      ) : (
        <span className="text-neutral-500 w-full text-center">
          라인업 정보가 없습니다.
        </span>
      )}
    </div>
  );
}
