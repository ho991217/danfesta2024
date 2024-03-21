'use server';

import api from '@/api';
import { API_ROUTES } from '@/constants';
import { PhoneNumberSchema } from './schema';
import { redirect } from 'next/navigation';

export async function sendSMSCode({
  phoneNumber,
  token,
}: PhoneNumberSchema & { token: string }) {
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
    redirect(`/[locale]/signup/info?token=${token}`);
  } catch (error) {
    throw new Error('인증번호가 일치하지 않습니다.');
  }
}
