'use client';

import { type QRScanResult, QrReader } from '@components/admin';
import { CustomError } from '@lib/utils';
import { useState } from 'react';
import { toast } from 'sonner';

import { decodeTicket } from './action';

export default function TicketManage() {
  const [ticketId, setTicketId] = useState<number | null>(null);
  const [isValidTicket, setIsValidTicket] = useState<boolean>(false);
  const [execScan, setExecScan] = useState<boolean>(true);

  const onScan = async ({ data }: QRScanResult) => {
    setExecScan(false);
    try {
      const { ticketId } = await decodeTicket(data);
      setIsValidTicket(true);
      setTicketId(ticketId);
    } catch (e) {
      if (e instanceof CustomError) {
        toast.error(e.message);
      }
      setIsValidTicket(false);
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
