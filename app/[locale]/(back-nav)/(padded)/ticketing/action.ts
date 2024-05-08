'use server';

import { get } from '@/app/api';
import { API_ROUTES } from '@/app/lib/constants';

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
    return events;
  } catch {
    return null;
  }
}
