import { z } from 'zod';

export const dkuVerificationSchema = z.object({
  dkuStudentId: z
    .string({ required_error: '학번을 입력해주세요.' })
    .length(8, '학번은 8자리로 입력해주세요.')
    .startsWith('3', '학번은 3으로 시작합니다.'),
  dkuPassword: z.string().min(8, '비밀번호는 8자리 이상입니다.'),
});

export type DKUVerificationSchema = z.infer<typeof dkuVerificationSchema>;
