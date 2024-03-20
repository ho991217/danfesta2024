import { z } from 'zod';

export const authInfoSchema = z.object({
  studentId: z.string().length(8, '학번은 8자리로 입력해주세요.'),
  password: z.string().min(8, '비밀번호는 8자리 이상입니다.'),
});

export type AuthInfoSchema = z.infer<typeof authInfoSchema>;
