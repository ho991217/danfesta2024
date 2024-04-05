import { jwtDecode } from 'jwt-decode';

export type ErrorCause = 'invalid' | 'expired';

type JwtPayload = {
  userRole: string;
  exp: number;
  userId: string;
  iat: number;
};

const userRole = ['ROLE_ADMIN', 'ROLE_USER'] as const;

export default function assertToken(token: string) {
  const isValidString =
    typeof token === 'string' &&
    token.split('.').length === 3 &&
    token.split('.').every((part) => part.length > 0);

  if (!isValidString)
    throw new Error('토큰이 아닙니다.', {
      cause: 'invalid' as ErrorCause,
    });

  const decoded = jwtDecode<JwtPayload>(token);

  const isValidRole = typeof decoded.userRole === 'string';
  if (!isValidRole)
    throw new Error('유효하지 않은 권한입니다.', {
      cause: 'invalid' as ErrorCause,
    });

  const userRoles = decoded.userRole.split(',');
  if (!userRoles.every((role) => userRole.includes(role as any)))
    throw new Error('유효하지 않은 권한입니다.', {
      cause: 'invalid' as ErrorCause,
    });

  if (decoded.exp * 1000 < Date.now())
    throw new Error('토큰이 만료되었습니다.', {
      cause: 'expired' as ErrorCause,
    });
}
