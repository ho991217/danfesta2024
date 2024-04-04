'use server';

import { get } from '@/api';
import { API_ROUTES } from '@/constants';
import { revalidatePath } from 'next/cache';

export type FestivalEvent = {
  id: number;
  name: string;
  from: string;
  to: string;
};

export default async function getEvents() {
  const events = get<FestivalEvent[]>(API_ROUTES.ticket.event);
  revalidatePath('/[locale]/(back-nav)/ticketing', 'layout');
  return events;
}
