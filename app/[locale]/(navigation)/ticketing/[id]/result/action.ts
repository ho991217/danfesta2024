import api from '@/api';
import { API_ROUTES } from '@/constants';

export async function checkResult(eventId: number) {
  return api.get<{ turn: number }>(API_ROUTES.ticket.reservation(eventId), {
    withCredentials: true,
  });
}
