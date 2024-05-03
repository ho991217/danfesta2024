import { COOKIE_KEYS } from '@/app/lib/constants';
import { ErrorCause, assert } from '@/app/lib/utils/validation';
import { useCookies } from 'next-client-cookies';

export default function useClientSideToken() {
  const cookies = useCookies();
  const accessToken = cookies.get(COOKIE_KEYS.accessToken);
  const refreshToken = cookies.get(COOKIE_KEYS.refreshToken);

  if (!accessToken || !refreshToken) return;

  try {
    assert('jwt', accessToken);
    return accessToken;
  } catch (e) {
    const error = e as Error;
    if (error.cause === ErrorCause.EXPIRED_TOKEN) {
      // Reissue token
    }
  }
}
