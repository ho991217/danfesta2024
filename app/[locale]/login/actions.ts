'use server';

import { getOS } from '@/app/utils';

export type AuthData = {
  id: string;
  password: string;
};

export default async function authenticate({ id, password }: AuthData) {
  const os = getOS();
  return {
    status: 200,
    message: 'success',
    data: os,
  };
}
