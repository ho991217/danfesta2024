'use client';

import DanfestaLogo from '@/public/icons/logo-white.svg';
import Glass from '@/public/images/glass.jpeg';
import { type QRScanResult, QrReader } from '@components/admin';
import { CustomError } from '@lib/utils';
import Image from 'next/image';
import { useState } from 'react';
import { toast } from 'sonner';

import { TicketInfo, getTicketInfoByAdmin } from './action';

export default function TicketManage() {
  const [ticketId, setTicketId] = useState<number | null>(null);
  const [isValidTicket, setIsValidTicket] = useState<boolean>(false);
  const [execScan, setExecScan] = useState<boolean>(true);
  const [ticketInfo, setTicketInfo] = useState<TicketInfo | null>(null);

  const onScan = async ({ data }: QRScanResult) => {
    setExecScan(false);
    try {
      const ticketInfo = await getTicketInfoByAdmin(data);
      setTicketInfo(ticketInfo);
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
    <div className="flex flex-col gap-2 lg:grid lg:w-full lg:max-w-full lg:grid-cols-3 lg:grid-rows-2 lg:gap-4 lg:mb-[65px] lg:px-[65px]">
      <QrReader onScan={onScan} execScan={execScan} />
      <div className="overflow-hidden rounded-2xl bg-neutral-100 p-4 lg:p-8 dark:bg-neutral-900 lg:min-w-full">
        <h2 className="text-2xl font-bold">QR 코드 정보</h2>
        <p className="text-lg">{ticketId}</p>
        <p className="text-neutral-400">유효한 티켓: {`${isValidTicket}`}</p>
        <p className="text-neutral-400">클릭하여 초기화</p>
        <p className="text-neutral-400">{ticketInfo?.name}</p>
        <p className="text-neutral-400">{ticketInfo?.major}</p>
        <p className="text-neutral-400">{ticketInfo?.studentId}</p>
        <p className="text-neutral-400">{ticketInfo?.issued}</p>
        <p className="text-neutral-400">{ticketInfo?.turn}</p>
      </div>
      <div
        className="overflow-hidden rounded-2xl bg-neutral-100 dark:bg-neutral-900 lg:row-span-2"
        onClick={() => {
          setTicketId(null);
          setIsValidTicket(false);
          setExecScan(true);
        }}
      >
        키패드
      </div>
      <div className="hidden overflow-hidden rounded-2xl bg-neutral-900 col-span-2 relative lg:flex lg:min-w-full">
        <div className="absolute left-8 top-1/2 -translate-y-1/2 flex gap-3 items-center text-neutral-100">
          <DanfestaLogo />
          <h1 className="text-4xl font-bold">DANFESTA</h1>
        </div>
        <Image
          src={Glass}
          alt="glass"
          className="absolute -top-[3.125rem] -right-[8rem] mix-blend-difference"
        />
      </div>
    </div>
  );
}
