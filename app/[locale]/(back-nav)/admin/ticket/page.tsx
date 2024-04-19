'use client';

import { type QRScanResult, QrReader } from '@components/admin';
import { jwtDecode } from 'jwt-decode';
import { useState } from 'react';
import { toast } from 'sonner';

type Payload = {
  ticketId: number;
  exp: number;
  iat: number;
};

export default function TicketManage() {
  const [ticketId, setTicketId] = useState<number | null>(null);
  const [isValidTicket, setIsValidTicket] = useState<boolean>(false);
  const [execScan, setExecScan] = useState<boolean>(true);

  const onScan = (result: QRScanResult) => {
    const { ticketId, exp } = jwtDecode<Payload>(result.data);
    setExecScan(false);
    if (exp < Date.now()) {
      toast.error('만료된 티켓입니다.');
      return;
    }
    setIsValidTicket(true);
    setTicketId(ticketId);
  };

  return (
    <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:gap-8 lg:justify-center">
      <QrReader onScan={onScan} execScan={execScan} />
      <div
        className="aspect-square overflow-hidden rounded-2xl lg:min-w-[400px] bg-neutral-100 dark:bg-neutral-900"
        onClick={() => {
          setTicketId(null);
          setIsValidTicket(false);
        }}
      >
        <div className="p-4">
          <h2 className="text-xl font-bold">QR 코드 정보</h2>
          <p className="text-lg">{ticketId}</p>
          <p className="text-sm text-neutral-400">
            유효한 티켓: {`${isValidTicket}`}
          </p>
          <p className="text-sm text-neutral-400">클릭하여 초기화</p>
        </div>
      </div>
    </div>
  );
}
