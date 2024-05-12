'use server';

import { User, get, getServerSideToken } from '@api/.';
import { API_ROUTES, COOKIE_KEYS } from '@lib/constants';
import { cookies } from 'next/headers';

const getIsVerified = async () => {
  try {
    const verified = cookies().get(COOKIE_KEYS.verified)?.value;

    if (verified === undefined || verified === 'false') {
      const { dkuChecked } = await get<User>(API_ROUTES.user.me, {
        token: await getServerSideToken(),
        cache: false,
      });
      if (dkuChecked === undefined) return false;
      return dkuChecked;
    }
    return Boolean(verified);
  } catch {
    return false;
  }
};

export default getIsVerified;
