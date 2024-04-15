'use server';

import { User, get, getServerSideToken } from '@/api';
import { API_ROUTES, COOKIE_KEYS } from '@/constants';
import { cookies } from 'next/headers';

const getIsVerified = async () => {
  try {
    const verified = cookies().get(COOKIE_KEYS.verified)?.value;
    const token = await getServerSideToken();

    if (verified === undefined || !Boolean(verified)) {
      const { dkuChecked } = await get<User>(API_ROUTES.user.me, {
        token,
      });

      return dkuChecked;
    }

    return Boolean(verified);
  } catch {
    return false;
  }
};

export default getIsVerified;
