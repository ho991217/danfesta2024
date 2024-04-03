'use server';

import { get, post } from '@/api';
import { API_ROUTES } from '@/constants';
import { SignUpSchema } from './schema';
import { TokenSchema } from '../schema';
import { redirect } from 'next/navigation';

export async function checkNicknameDuplicate(nickname: string) {
  try {
    const res = await get<{ data: boolean }>(API_ROUTES.user.valid(nickname));
    if (res.data === false) {
      throw new Error('이미 사용중인 닉네임입니다.');
    }
  } catch (error) {
    throw error;
  }
}

type SignUpReqeust = {
  nickname: SignUpSchema['nickname'];
  password: SignUpSchema['password'];
};

type SignUpResponse = {
  message: string;
};

export async function signUp({
  nickname,
  password,
  token,
}: SignUpReqeust & TokenSchema) {
  await post<SignUpReqeust, SignUpResponse>(API_ROUTES.user.signup(token), {
    nickname,
    password,
  });
  redirect('/ko/signup/complete');
}
