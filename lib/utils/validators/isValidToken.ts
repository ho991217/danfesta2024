// {
//   "userRole": "ROLE_ADMIN,ROLE_USER",
//   "exp": 1712539159,
//   "userId": "4",
//   "iat": 1712279959
// }

import { z } from 'zod';

const tokenSchema = z.object({
  token: z.string().min(1),
});

export default function isValidToken(token: string) {
  return tokenSchema.safeParse({ token }).success;
}
