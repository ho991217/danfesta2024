import { COOKIE_KEYS } from '@lib/constants';
import { useCookies } from 'next-client-cookies';

export default function useClientSideToken() {
  const cookies = useCookies();
  const accessToken = cookies.get(COOKIE_KEYS.accessToken);

  return accessToken;
}
