import api from '@/api';
import { API_ROUTES } from '@/constants';

export type FestivalEvent = {
  id: number;
  name: string;
  from: string;
  to: string;
};

export default async function getEvents() {
  return api.get<FestivalEvent[]>(API_ROUTES.ticket.event);
}
