'use server';

import { User, get, getServerSideToken } from '@/api';
import { API_ROUTES, COOKIE_KEYS } from '@/constants';
import { cookies } from 'next/headers';

const getIsVerified = async () => {
  try {
    const verified = cookies().get(COOKIE_KEYS.verified)?.value === 'true';
    const token = await getServerSideToken();

    if (!verified) {
      const { dkuChecked } = await get<User>(
        API_ROUTES.user.infoOf('dkuChecked'),
        {
          token,
        },
      );
      cookies().set(COOKIE_KEYS.verified, String(dkuChecked));

      return dkuChecked;
    }

    return verified;
  } catch {
    return false;
  }
};

export default getIsVerified;
