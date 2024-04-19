'use client';

import Keypad from '@/components/admin/keypad';
import { StudentInfo } from '@/components/admin/result-tile';
import { Button } from '@/components/common';
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
  const [execScan, setExecScan] = useState<boolean>(true);
  const [ticketInfo, setTicketInfo] = useState<TicketInfo | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [smsCode, setSmsCode] = useState<string>('');

  const onScan = async ({ data }: QRScanResult) => {
    setExecScan(false);
    try {
      const ticketInfo = await getTicketInfoByAdmin(data);
      setTicketInfo(ticketInfo);
      setTicketId(ticketId);
    } catch (e) {
      if (e instanceof CustomError) {
        setError(e.message);
      } else {
        toast.error('QR 코드를 읽는 중 오류가 발생했습니다.');
      }
    }
  };

  const reset = () => {
    setTicketId(null);
    setExecScan(true);
    setTicketInfo(null);
    setSmsCode('');
  };

  return (
    <div className="flex flex-col gap-2 lg:grid lg:w-full lg:max-w-full lg:grid-cols-3 lg:grid-rows-2 lg:gap-4 lg:mb-[65px] lg:px-8">
      <QrReader onScan={onScan} execScan={execScan} />
      <div className="overflow-hidden rounded-2xl bg-neutral-100 p-4 lg:p-8 dark:bg-neutral-900 lg:min-w-full flex flex-col justify-between items-center">
        <StudentInfo info={ticketInfo} />
        <Button
          onClick={reset}
          disabled={
            ticketId === null &&
            execScan &&
            ticketInfo === null &&
            smsCode === ''
          }
        >
          초기화
        </Button>
      </div>
      <div className="overflow-hidden rounded-2xl bg-neutral-100 dark:bg-neutral-900 lg:row-span-2">
        <Keypad value={smsCode} onChange={(v) => setSmsCode(v)} />
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
