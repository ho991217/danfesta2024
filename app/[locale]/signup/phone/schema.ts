import { z } from 'zod';

export const smsCodeSchema = z.object({
  phoneNumber: z.string().length(11, '전화번호는 11자리로 입력해주세요.'),
});

export type SMSCodeSchema = z.infer<typeof smsCodeSchema>;
