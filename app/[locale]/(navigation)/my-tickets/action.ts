'use server';

import { get } from '@/api';
import { API_ROUTES } from '@/constants';

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
  const data = await get<TicketInfo>(
    API_ROUTES.ticket.reservation + `/${eventId}`,
    {
      withCredentials: true,
    }
  );

  return data;
}
