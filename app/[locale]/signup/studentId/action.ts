'use server';

import { post } from '@/api';
import { API_ROUTES } from '@/constants';
import { DKUVerificationSchema } from './schema';

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

export async function verifyDKUStudent(req: DKUVerificationSchema) {
  return post<DKUVerificationSchema, DKUResponse>(
    API_ROUTES.user.dku.verify,
    req
  );
}
