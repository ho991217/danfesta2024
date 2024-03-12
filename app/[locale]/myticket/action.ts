'use server';

import api from '@/app/api';
import { API_ROUTES } from '@/app/constants';

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
  const data = await api.get<TicketInfo>(
    API_ROUTES.ticket.reservation + `/${eventId}`,
    {
      withCredential: true,
    }
  );

  return data;
}
