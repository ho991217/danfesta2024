'use server';

import { CustomError, ErrorCause } from '@lib/utils';
import jwt, { type JwtPayload, TokenExpiredError } from 'jsonwebtoken';

export interface Payload extends JwtPayload {
  ticketId: number;
}

const SECRET = process.env.NEXT_PUBLIC_JWT_SECRET;

export async function decodeTicket(data: string) {
  if (!SECRET) {
    throw new CustomError(ErrorCause.NOT_FOUND, 'JWT 시크릿이 없습니다.');
  }

  try {
    const verified = jwt.verify(data, SECRET);
    return verified as Payload;
  } catch (e) {
    if (e instanceof TokenExpiredError) {
      throw new CustomError(ErrorCause.EXPIRED_TOKEN);
    } else {
      throw new CustomError(ErrorCause.INVALID, '유효하지 않은 티켓입니다.');
    }
  }
}
