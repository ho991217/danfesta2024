import { Carousel } from '@components/common';

import { getLineupInfoByDay } from './actions';

export type FestivalDate = 'FIRST_DAY' | 'SECOND_DAY' | 'THIRD_DAY';

export type LineupImage = {
  url: string;
  originalName: string;
  mimeType: string;
  base64?: string;
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

export default async function LineupPage() {
  const lineups = await getLineupInfoByDay('FIRST_DAY');

  return (
    <div className="mb-20 flex flex-col gap-4 px-5">
      <Carousel lineups={lineups} />
    </div>
  );
}
