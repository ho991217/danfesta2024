import { cookies } from 'next/headers';
import { API_ROUTES, API_URL } from '../constants';
import { DeepValueOf } from '../lib/utils';
import APIError, { type APIErrorResponse } from '@/lib/utils/error/api-error';

type APIOptions = {
  withCredential?: boolean;
};

async function get<Res>(
  path: DeepValueOf<typeof API_ROUTES> | string,
  options?: APIOptions
) {
  const cookie = cookies().getAll();
  const response = await fetch(`${API_URL}${path}`, {
    method: 'GET',
    headers: {
      ...(options?.withCredential && { Cookie: cookie.toString() }),
    },
  });

  const json = await response.json();

  if ('statusCode' in json && json.statusCode === 400) {
    const error = json as APIErrorResponse;
    throw error.message[0];
  }

  return json as Res;
}

async function post<Req, Res>(
  path: DeepValueOf<typeof API_ROUTES> | string,
  data: Req,
  options?: APIOptions
) {
  const cookie = cookies().getAll();
  const response = await fetch(`${API_URL}${path}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      ...(options?.withCredential && { Cookie: cookie.toString() }),
    },
    body: JSON.stringify(data),
  });

  const json = await response.json();

  if ('statusCode' in json && json.statusCode === 400) {
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
