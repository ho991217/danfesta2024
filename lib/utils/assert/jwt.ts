import { jwtDecode } from 'jwt-decode';

import { ErrorCause } from '../error';

type JwtPayload = {
  userRole: string;
  exp: number;
  userId: string;
  iat: number;
};

const userRole = ['ROLE_ADMIN', 'ROLE_USER'] as const;

export default function assertJWT(jwt: string) {
  const isValidString =
    typeof jwt === 'string' &&
    jwt.split('.').length === 3 &&
    jwt.split('.').every((part) => part.length > 0);

  if (!isValidString)
    throw new Error('jwt가 아닙니다.', {
      cause: ErrorCause.invalid,
    });

  const decoded = jwtDecode<JwtPayload>(jwt);

  const isValidRole = typeof decoded.userRole === 'string';
  if (!isValidRole)
    throw new Error('유효하지 않은 권한입니다.', {
      cause: ErrorCause.invalid,
    });

  const userRoles = decoded.userRole.split(',');
  if (!userRoles.every((role) => userRole.includes(role as any)))
    throw new Error('유효하지 않은 권한입니다.', {
      cause: ErrorCause.invalid,
    });

  if (decoded.exp * 1000 < Date.now())
    throw new Error('토큰이 만료되었습니다.', {
      cause: ErrorCause.expiredToken,
    });
}
