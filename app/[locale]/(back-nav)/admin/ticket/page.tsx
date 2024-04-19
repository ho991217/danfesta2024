'use client';

import { type QRScanResult, QrReader } from '@components/admin';
import jwt, { VerifyErrors } from 'jsonwebtoken';
import { InvalidTokenError, jwtDecode } from 'jwt-decode';
import { useState } from 'react';
import { toast } from 'sonner';

const SECRET = process.env.NEXT_PUBLIC_JWT_SECRET ?? '';

type Payload = {
  ticketId: number;
};

export default function TicketManage() {
  const [ticketId, setTicketId] = useState<number | null>(null);
  const [isValidTicket, setIsValidTicket] = useState<boolean>(false);
  const [execScan, setExecScan] = useState<boolean>(true);
  const [isVerified, setIsVerified] = useState<any>();

  const onScan = ({ data }: QRScanResult) => {
    setExecScan(false);
    try {
      const verified = jwt.verify(data, SECRET);
      setIsVerified(verified);
    } catch (e) {
      const error = e as VerifyErrors;
      toast.error(error.message);
      return;
    }

    try {
      const { ticketId } = jwtDecode<Payload>(data);
      setIsValidTicket(true);
      setTicketId(ticketId);
    } catch (e) {
      const error = e as InvalidTokenError;
      toast.error(error.message);
      return;
    } finally {
      setExecScan(true);
    }
  };

  return (
    <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:gap-8 lg:justify-center">
      <QrReader onScan={onScan} execScan={execScan} />
      <div
        className="aspect-square overflow-hidden rounded-2xl lg:min-w-[400px] bg-neutral-100 dark:bg-neutral-900"
        onClick={() => {
          setTicketId(null);
          setIsValidTicket(false);
          setExecScan(true);
        }}
      >
        <div className="p-4">
          <h2 className="text-2xl font-bold">QR 코드 정보</h2>
          <p className="text-lg">{ticketId}</p>
          <p className="text-neutral-400">유효한 티켓: {`${isValidTicket}`}</p>
          <p className="text-neutral-400">클릭하여 초기화</p>
        </div>
      </div>
    </div>
  );
}
