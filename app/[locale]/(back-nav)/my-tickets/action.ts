'use server';

import { get } from '@/api';
import getServerSideToken from '@/api/get-server-side-token';
import { API_ROUTES } from '@/constants';

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
  });

  return data;
}

export async function getMyTicketList() {
  const data = await get<TicketInfo[]>(API_ROUTES.ticket.myTicketList, {
    token: await getServerSideToken(),
  });

  return data;
}
