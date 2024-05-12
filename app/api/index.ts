import { API_ROUTES, API_URL } from '@lib/constants';
import { DeepValueOf } from '@lib/types';
import { APIError, type APIErrorResponse } from '@lib/utils/validation';

type APIOptions = {
  token?: string;
  cache?: boolean;
};

export async function get<Res>(
  path: DeepValueOf<typeof API_ROUTES> | string,
  options?: APIOptions,
) {
  const response = await fetch(`${API_URL}${path}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      ...(options?.token &&
        options.token.length > 0 && {
          Authorization: `Bearer ${options?.token}`,
        }),
      cache:
        options?.cache === undefined
          ? 'default'
          : options.cache
            ? 'force-cache'
            : 'no-store',
    },
    next: {
      revalidate: options?.cache ? 60 : 0,
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
  options?: APIOptions,
) {
  const response = await fetch(`${API_URL}${path}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      ...(options?.token &&
        options.token.length > 0 && {
          Authorization: `Bearer ${options?.token}`,
        }),
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

export async function getImage(path: string, options?: APIOptions) {
  const response = await fetch(`${API_URL}${path}`, {
    method: 'GET',
    credentials: 'include',
    headers: {
      'Content-Type': 'image/png',
      ...(options?.token &&
        options.token.length > 0 && {
          Authorization: `Bearer ${options?.token}`,
        }),
    },
  });

  const arrBuf = await response.arrayBuffer();
  const text = String.fromCharCode.apply(null, new Uint8Array(arrBuf) as any);

  return 'data:image/jpeg;base64,' + btoa(text);
}

export { default as getServerSideToken } from './get-server-side-token';

export * from './response';
export { default as getIsVerified } from './get-is-verified';
export { default as getIsLoggedIn } from './get-is-logged-in';
