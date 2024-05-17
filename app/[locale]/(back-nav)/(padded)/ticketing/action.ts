'use server';

import { get } from '@api/.';
import { API_ROUTES } from '@lib/constants';

export type FestivalEvent = {
  id: number;
  name: string;
  from: string;
  to: string;
};

export async function getEvents() {
  try {
    const events = await get<FestivalEvent[]>(API_ROUTES.ticket.event, {
      cache: false,
    });
    return events.sort((a, b) => {
      const now = Date.now();
      const aFrom = new Date(a.from).getTime();
      const bFrom = new Date(b.from).getTime();
      if (now - aFrom < now - bFrom) return -1;
      return 1;
    });
  } catch {
    return [];
  }
}
