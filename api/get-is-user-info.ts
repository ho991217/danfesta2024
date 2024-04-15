'use server';

import { API_ROUTES, COOKIE_KEYS } from '@/constants';
import { ErrorCause } from '@/lib/utils';
import { cookies } from 'next/headers';

import { User, get, getServerSideToken } from '.';

const getUserInfo = async () => {
  try {
    const accessToken = cookies().get(COOKIE_KEYS.accessToken);
    const refreshToken = cookies().get(COOKIE_KEYS.refreshToken);
    const token = await getServerSideToken();

    if (!accessToken || !refreshToken) {
      throw new Error('토큰이 없습니다.');
    }

    const res = await get<User>(API_ROUTES.user.me, {
      token,
    });

    return res;
  } catch (error) {
    throw new Error('사용자 정보를 가져오는데 실패했습니다.', {
      cause: ErrorCause['not-found'],
    });
  }
};

export default getUserInfo;
