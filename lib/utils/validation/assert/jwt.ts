import { jwtDecode } from 'jwt-decode';

import { CustomError, ErrorCause } from '../error';

export type AccessToken = {
  userRole: string;
  exp: number;
  userId: string;
  iat: number;
};

export const userRole = ['ROLE_ADMIN', 'ROLE_USER'] as const;

export default function assertJWT(jwt: string) {
  const isValidString =
    typeof jwt === 'string' &&
    jwt.split('.').length === 3 &&
    jwt.split('.').every((part) => part.length > 0);

  if (!isValidString)
    throw new CustomError(ErrorCause.INVALID, '올바르지 않은 JWT입니다.');

  const decoded = jwtDecode<AccessToken>(jwt);

  const isValidRole = typeof decoded.userRole === 'string';
  if (!isValidRole) throw new CustomError(ErrorCause.NOT_AUTHORIZED);

  const userRoles = decoded.userRole.split(',');
  if (!userRoles.every((role) => userRole.includes(role as any)))
    throw new CustomError(ErrorCause.NOT_AUTHORIZED);

  if (decoded.exp * 1000 < Date.now())
    throw new CustomError(ErrorCause.EXPIRED_TOKEN);
}
