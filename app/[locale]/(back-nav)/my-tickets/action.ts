'use server';

import { get } from '@/api';
import { API_ROUTES } from '@/constants';
import { FestivalEvent } from '../ticketing/page';
import getServerSideToken from '@/api/get-server-side-token';

type TicketInfo = {
  id: number;
  name: string;
  major: string;
  studentId: string;
  /** 발급 여부 */
  issued: boolean;
  /** 티켓 대기 순번 */
  turn: number;
};

export async function getMyTicket(eventId: number) {
  const token = await getServerSideToken();
  const data = await get<TicketInfo>(API_ROUTES.ticket.myTicket(eventId), {
    token,
  });

  return data;
}

export async function getMyTicketList() {
  const events = await get<FestivalEvent[]>(API_ROUTES.ticket.event);
  const ids = events.map((event) => event.id);

  const tickets = await Promise.allSettled(ids.map(getMyTicket));
  const result = tickets
    .map((result) => (result.status === 'fulfilled' ? result.value.id : null))
    .filter((value) => value !== null) as number[];

  return result;
}
