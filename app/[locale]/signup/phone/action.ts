'use server';

import { post } from '@/api';
import { API_ROUTES } from '@/constants';
import { PhoneNumberSchema } from './schema';
import { redirect } from 'next/navigation';

export async function sendSMSCode({
  phoneNumber,
  token,
}: PhoneNumberSchema & { token: string }) {
  try {
    await post(API_ROUTES.user.sms.send(token), { phoneNumber });
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
  await post(API_ROUTES.user.sms.verify(token), { code });
  redirect(`/ko/signup/info?token=${token}`);
}
