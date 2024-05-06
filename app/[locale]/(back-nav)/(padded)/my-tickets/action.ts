'use server';

import { get } from '@api/.';
import getServerSideToken from '@api/get-server-side-token';
import { API_ROUTES } from '@lib/constants';
import { redirect } from '@lib/navigation';
import { ErrorMessages } from '@lib/utils';

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

export async function getMyTicket(eventId: number): Promise<TicketInfo | null> {
  try {
    const data = await get<TicketInfo>(API_ROUTES.ticket.myTicket(eventId), {
      token: await getServerSideToken(),
      cache: false,
    });

    return data;
  } catch (e) {
    const error = e as Error;
    if (error.message === ErrorMessages.NEED_REVERIFICATION) {
      redirect('/need-reverification');
    }
    return null;
  }
}

export async function getMyTicketList() {
  try {
    const data = await get<TicketInfo[]>(API_ROUTES.ticket.myTicketList, {
      token: await getServerSideToken(),
      cache: false,
    });

    return data;
  } catch (e) {
    const error = e as Error;
    if (error.message === ErrorMessages.NEED_REVERIFICATION) {
      redirect('/need-reverification');
    }
    return [];
  }
}
