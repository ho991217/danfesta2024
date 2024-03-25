import { cookies } from 'next/headers';
import { API_ROUTES, API_URL } from '../constants';
import { DeepValueOf } from '../lib/utils';
import APIError, { type APIErrorResponse } from '@/lib/utils/error/api-error';

type APIOptions = {
  withCredentials?: boolean;
};

async function get<Res>(
  path: DeepValueOf<typeof API_ROUTES> | string,
  options?: APIOptions
) {
  const cookie = cookies().getAll();
  const url = new URL(path, API_URL);
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      ...(options?.withCredentials && { Cookie: cookie.toString() }),
    },
  });

  const json = await response.json();

  if ('statusCode' in json) {
    const error: APIErrorResponse = json;
    throw new APIError(error);
  }

  return json as Res;
}

async function post<Req, Res>(
  path: DeepValueOf<typeof API_ROUTES> | string,
  data: Req,
  options?: APIOptions
) {
  const cookie = cookies().getAll();
  const url = new URL(path, API_URL);
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      ...(options?.withCredentials && { Cookie: cookie.toString() }),
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

const api = {
  get,
  post,
};

export default api;
