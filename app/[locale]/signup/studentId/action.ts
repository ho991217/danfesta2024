'use server';

import api from '@/api';
import { API_ROUTES } from '@/constants';

export type DKUPortalAuthInfo = {
  dkuStudentId: string;
  dkuPassword: string;
};

type DKUResponse = {
  signupToken: string;
  student: {
    studentName: string;
    studentId: string;
    age: string;
    gender: string;
    major: string;
  };
};

export async function verifyDKUStudent(req: DKUPortalAuthInfo) {
  const data = await api.post<DKUPortalAuthInfo, DKUResponse>(
    API_ROUTES.user.dku.verify,
    req
  );

  return data;
}
