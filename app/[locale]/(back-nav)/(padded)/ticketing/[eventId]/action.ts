'use server';

import { get, getImage, getServerSideToken } from '@api/.';
import { API_ROUTES } from '@lib/constants';
import { redirect } from '@lib/navigation';

type Captcha = {
  key: string;
  image: string;
};

export async function getCaptchaImage(): Promise<Captcha | null> {
  try {
    const token = await getServerSideToken();
    const { key } = await get<{ key: string }>(API_ROUTES.ticket.captcha.key, {
      token,
    });
    const image = await getImage(API_ROUTES.ticket.captcha.image(key), {
      token,
    });

    return {
      key,
      image,
    };
  } catch (e) {
    const error = e as Error;
    if (error.message === '단국대학교 학생 인증이 갱신되지 않았습니다.') {
      redirect('/need-reverification');
    }
    return null;
  }
}
