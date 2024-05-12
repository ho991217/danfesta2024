'use server';

import { get } from '@api/.';
import { API_ROUTES } from '@lib/constants';
import { getPlaiceholder } from 'plaiceholder';

import type { FestivalDate, LineupInfo } from './page';

type GetAllLineupInfoOptions = {
  random?: boolean;
  count?: number;
};

export async function getAllLineupInfo(options?: GetAllLineupInfoOptions) {
  const allDay = ['FIRST_DAY', 'SECOND_DAY', 'THIRD_DAY'] as Readonly<
    FestivalDate[]
  >;
  const allLineupInfo = (
    await Promise.all(allDay.map(getLineupInfoByDay))
  ).flat();

  if (options?.random) {
    const shuffled = allLineupInfo.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, options.count ?? 5);
  }

  return allLineupInfo;
}

export async function getLineupInfoByDay(day: FestivalDate) {
  try {
    const lineup = await get<LineupInfo[]>(API_ROUTES.lineup.list(day));
    if (lineup.length === 0) return [];

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
  } catch {
    return [];
  }
}
