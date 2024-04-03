import { z } from 'zod';

export const tokenSchema = z.object({
  token: z.string().uuid(),
});

export type TokenSchema = z.infer<typeof tokenSchema>;
