'use server';

import { get } from '@/api';
import { API_ROUTES } from '@/constants';

export async function checkResult(eventId: number) {
  try {
    const { turn } = await get<{ turn: number }>(
      API_ROUTES.ticket.reservation(eventId),
      {
        withCredentials: true,
      }
    );
    return turn;
  } catch (e) {
    return null;
  }
}
