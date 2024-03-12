import { cookies } from 'next/headers';
import { API_ROUTES, API_URL } from '../constants';
import { DeepValueOf } from '../utils';

type ErrorResponse = {
  timestamp: string;
  trackingId: string;
  statusCode: number;
  status: string;
  code: string;
  message: string[];
};

type APIOptions = {
  withCredential?: boolean;
};

async function get<Res>(
  path: DeepValueOf<typeof API_ROUTES>,
  options?: APIOptions
) {
  const response = await fetch(`${API_URL}${path}`, {
    method: 'GET',
    headers: {
      ...(options?.withCredential && { Cookie: cookies().toString() }),
    },
  });

  if (!response.ok) {
    const json = (await response.json()) as ErrorResponse;
    throw new Error(json.message[0]);
  }
  const json = (await response.json()) as Res;

  return json;
}

async function post<Req, Res>(
  path: DeepValueOf<typeof API_ROUTES>,
  data: Req,
  options?: APIOptions
) {
  const response = await fetch(`${API_URL}${path}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      ...(options?.withCredential && { Cookie: cookies().toString() }),
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const json = (await response.json()) as ErrorResponse;
    throw new Error(json.message[0]);
  }
  const json = (await response.json()) as Res;

  return json;
}

const api = {
  get,
  post,
};

export default api;
