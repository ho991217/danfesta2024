import { z } from 'zod';

export const smsCodeSchema = z.object({
  phoneNumber: z.string().length(13, '전화번호는 13자리로 입력해주세요.'),
  token: z.string(),
});

export type SMSCodeSchema = z.infer<typeof smsCodeSchema>;
