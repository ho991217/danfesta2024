import { cookies } from 'next/headers';
import { API_ROUTES, API_URL } from '../constants';
import { DeepValueOf } from '../utils';
import { redirect } from 'next/navigation';

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

  if (!response.ok) {
    if (response.status === 401) {
      redirect('/ko/login');
    }
    throw new Error();
  }
  const json = (await response.json()) as Res;

  return json;
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

  if (!response.ok) {
    switch (response.status) {
      case 401:
        redirect('/ko/login');
      case 400:
        throw new Error('잘못된 요청입니다.');
      default:
        throw new Error();
    }
  }
  const json = (await response.json()) as Res;

  return json;
}

const api = {
  get,
  post,
};

export default api;