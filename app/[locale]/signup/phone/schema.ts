import { z } from 'zod';

export const phoneNumberSchema = z.object({
  phoneNumber: z.string().length(11, '전화번호는 1자리로 입력해주세요.'),
});

export type PhoneNumberSchema = z.infer<typeof phoneNumberSchema>;

export const smsCodeSchema = z.object({
  code: z.string().length(6, '인증번호는 6자리로 입력해주세요.'),
});

export type SMSCodeSchema = z.infer<typeof smsCodeSchema>;

export const tokenSchema = z.object({
  token: z.string().uuid(),
});

export type TokenSchema = z.infer<typeof tokenSchema>;