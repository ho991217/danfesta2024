'use server';

import jwt from 'jsonwebtoken';
import QRCode from 'qrcode';

const SECRET = process.env.JWT_SECRET;

export async function getQRCode(ticketId: number, lifetime = 1000 * 60 * 3) {
  if (!SECRET) {
    throw new Error('JWT secret is not defined');
  }

  const payload = { ticketId };
  const newToken = jwt.sign(payload, SECRET, {
    algorithm: 'HS256',
    expiresIn: lifetime,
  });
  const qr = QRCode.toDataURL(newToken);

  return qr;
}
