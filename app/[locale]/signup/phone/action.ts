'use server';

import api from '@/api';
import { API_ROUTES } from '@/constants';
import { SMSCodeSchema } from './schema';

export async function sendSMSCode({
  phoneNumber,
  token,
}: SMSCodeSchema & { token: string }) {
  try {
    await api.post(API_ROUTES.user.sms.send(token), { phoneNumber });
  } catch (error) {
    throw new Error('인증번호 발송에 실패했습니다.');
  }
}

export async function verifySMSCode({
  code,
  token,
}: {
  code: string;
  token: string;
}) {
  try {
    await api.post(API_ROUTES.user.sms.verify(token), { code });
  } catch (error) {
    throw new Error('인증번호가 일치하지 않습니다.');
  }
}
