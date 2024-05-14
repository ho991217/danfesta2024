'use server';

import { get } from '@api/.';
import { API_ROUTES } from '@lib/constants';

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
    const lineup = await get<LineupInfo[]>(API_ROUTES.lineup.list(day), {
      cache: true,
    });
    if (lineup.length === 0) return [];

    return lineup;
  } catch {
    return [];
  }
}
