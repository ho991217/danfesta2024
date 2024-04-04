import { cookies } from 'next/headers';
import { API_ROUTES, API_URL, COOKIE_KEYS } from '../constants';
import { DeepValueOf } from '../lib/utils';
import APIError, { type APIErrorResponse } from '@/lib/utils/error/api-error';

type APIOptions = {
  withCredentials?: boolean;
};

export function getAccessToken() {
  const atk = cookies().get(COOKIE_KEYS.accessToken)?.value;
  if (!atk) {
    throw new APIError({
      statusCode: 401,
      message: ['권한이 없습니다. 로그인 후 다시 시도해주세요.'],
      timestamp: Date.now().toString(),
      trackingId: 'client-side-401',
      status: 'Unauthorized',
      code: 'Unauthorized',
    });
  }

  return `${COOKIE_KEYS.accessToken}=${atk}`;
}

export async function get<Res>(
  path: DeepValueOf<typeof API_ROUTES> | string,
  options?: APIOptions
) {
  const response = await fetch(`${API_URL}${path}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      ...(options?.withCredentials === true && { Cookie: getAccessToken() }),
    },
  });

  const json = await response.json();

  if ('statusCode' in json) {
    const error: APIErrorResponse = json;
    throw new APIError(error);
  }

  return json as Res;
}

export async function post<Req, Res>(
  path: DeepValueOf<typeof API_ROUTES> | string,
  data: Req,
  options?: APIOptions
) {
  const response = await fetch(`${API_URL}${path}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      ...(options?.withCredentials === true && { Cookie: getAccessToken() }),
    },
    body: JSON.stringify(data),
  });

  const json = await response.json();

  if ('statusCode' in json) {
    const error: APIErrorResponse = json;
    throw new APIError(error);
  }

  return json as Res;
}

export async function getImage(path: string) {
  const response = await fetch(`${API_URL}${path}`, {
    method: 'GET',
    credentials: 'include',
    headers: {
      'Content-Type': 'image/png',
      Cookie: getAccessToken(),
    },
  });

  const arrBuf = await response.arrayBuffer();
  const text = String.fromCharCode.apply(null, new Uint8Array(arrBuf) as any);

  return 'data:image/jpeg;base64,' + btoa(text);
}
