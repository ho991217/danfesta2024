import { z } from 'zod';

export const passwordSchema = z.object({
  password: z.string().min(8, '비밀번호는 8자리 이상 입력해주세요.'),
});

export const signUpSchema = z
  .object({
    password: z.string().min(8, '비밀번호는 8자리 이상 입력해주세요.'),
    passwordCheck: z.string(),
  })
  .superRefine(({ passwordCheck, password }, ctx) => {
    if (passwordCheck !== password) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: '비밀번호가 일치하지 않습니다.',
        path: ['passwordCheck'],
      });
    }
  });

export type PasswordSchema = z.infer<typeof passwordSchema>;
export type SignUpSchema = z.infer<typeof signUpSchema>;
