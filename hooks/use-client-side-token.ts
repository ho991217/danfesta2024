import { COOKIE_KEYS } from '@/lib/constants';
import { useCookies } from 'next-client-cookies';

export default function useClientSideToken() {
  const cookies = useCookies();
  const accessToken = cookies.get(COOKIE_KEYS.accessToken);
  const refreshToken = cookies.get(COOKIE_KEYS.refreshToken);
  const cookie = `${COOKIE_KEYS.accessToken}=${accessToken}; ${COOKIE_KEYS.refreshToken}=${refreshToken}`;

  return { accessToken, refreshToken, cookie };
}
