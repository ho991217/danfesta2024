'use server';

import { get, getImage, post } from '@/api';
import { API_ROUTES } from '@/constants';

export type TicketApplyRequest = {
  eventId: string;
  captchaKey: string;
  captchaValue: string;
};

export async function getCaptchaImage() {
  const { key } = await get<{ key: string }>(API_ROUTES.ticket.captcha.key, {
    withCredentials: true,
  });
  const image = await getImage(API_ROUTES.ticket.captcha.image(key));

  return { key, image };
}

export async function applyTicket(req: TicketApplyRequest) {
  return post<TicketApplyRequest, { turn: number }>(
    API_ROUTES.ticket.apply,
    req,
    {
      withCredentials: true,
    }
  );
}
