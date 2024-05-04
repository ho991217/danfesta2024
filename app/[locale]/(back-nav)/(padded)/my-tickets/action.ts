'use server';

import { get } from '@/app/api';
import getServerSideToken from '@/app/api/get-server-side-token';
import { API_ROUTES } from '@/app/lib/constants';

export type TicketInfo = {
  id: number;
  name: string;
  major: string;
  studentId: string;
  issued: boolean;
  turn: number;
  event: {
    name: string;
    startAt: string;
    endAt: string;
    totalTickets: number;
  };
};

export async function getMyTicket(eventId: number) {
  const data = await get<TicketInfo>(API_ROUTES.ticket.myTicket(eventId), {
    token: await getServerSideToken(),
    cache: false,
  });

  return data;
}

export async function getMyTicketList() {
  const data = await get<TicketInfo[]>(API_ROUTES.ticket.myTicketList, {
    token: await getServerSideToken(),
    cache: false,
  });

  return data;
}
