import { get } from '@/api';
import { API_ROUTES } from '@/constants';

export async function checkResult(eventId: number) {
  return get<{ turn: number }>(API_ROUTES.ticket.reservation(eventId), {
    withCredentials: true,
  });
}
