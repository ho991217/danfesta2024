'use server';

import { get } from '@/app/api';
import { API_ROUTES } from '@/app/lib/constants';
import { getPlaiceholder } from 'plaiceholder';

import type { FestivalDate, LineupInfo } from './page';

export async function getAllLineupInfo() {
  const allDay = ['FIRST_DAY', 'SECOND_DAY', 'THIRD_DAY'] as Readonly<
    FestivalDate[]
  >;
  const allLineupInfo = (
    await Promise.all(allDay.map(getLineupInfoByDay))
  ).flat();

  return allLineupInfo;
}

export async function getLineupInfoByDay(day: FestivalDate) {
  const lineup = await get<LineupInfo[]>(API_ROUTES.lineup.list(day));
  const withBase64 = await Promise.all(
    lineup.map(async (lineup) => {
      if (lineup.images.length === 0) return lineup;

      const src = lineup.images[0].url;
      const buffer = await fetch(src).then(async (res) =>
        Buffer.from(await res.arrayBuffer()),
      );

      const { base64 } = await getPlaiceholder(buffer);
      return { ...lineup, images: [{ ...lineup.images[0], base64 }] };
    }),
  );

  return withBase64;
}
