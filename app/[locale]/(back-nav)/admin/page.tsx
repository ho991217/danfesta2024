'use client';

import { useBottomSheet } from '@/hooks';
import DanfestaLogo from '@/public/icons/logo-white.svg';
import Glass from '@/public/images/glass.jpeg';
import {
  ErrorTile,
  Keypad,
  type QRScanResult,
  QrReader,
  StudentInfo,
} from '@components/admin';
import { BottomSheet, Button } from '@components/common';
import Image from 'next/image';
import { useState } from 'react';

import { TicketInfo, getTicketInfoByAdmin } from './action';

export default function TicketManage() {
  const [scannerPaused, setScannerPaused] = useState(false);
  const [ticketInfo, setTicketInfo] = useState<TicketInfo | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isOpen, open, close] = useBottomSheet();

  const onScan = async ({ data }: QRScanResult) => {
    if (!data) return;
    const jwtRegex = /^[a-zA-Z0-9-_]+\.[a-zA-Z0-9-_]+\.[a-zA-Z0-9-_]+$/;
    if (!jwtRegex.test(data)) return;

    setScannerPaused(true);
    try {
      const ticketInfo = await getTicketInfoByAdmin(data);
      setTicketInfo(ticketInfo);
    } catch (e) {
      const err = e as Error;
      setError(err.message);
    }
  };

  const onSubmit = (value: string) => {
    if (value === ticketInfo?.code) {
      open();
    }
  };

  const reset = () => {
    setScannerPaused(false);
    setTicketInfo(null);
    setError(null);
    close();
  };

  return (
    <>
      <div className="flex flex-col gap-2 lg:grid lg:w-full lg:max-w-full lg:grid-cols-3 lg:grid-rows-2 lg:gap-4 lg:mb-[65px] lg:px-8">
        <QrReader onScan={onScan} paused={scannerPaused} />
        <div className="overflow-hidden rounded-2xl bg-neutral-100 p-4 lg:p-0 dark:bg-neutral-900 lg:min-w-full flex flex-col justify-between items-center relative">
          {!error && <StudentInfo info={ticketInfo} />}
          {error && <ErrorTile error={error} />}
          <Button
            className="absolute bottom-8 left-8 right-8 w-auto"
            onClick={reset}
            disabled={!scannerPaused && ticketInfo === null && error === null}
          >
            초기화
          </Button>
        </div>
        <div className="overflow-hidden rounded-2xl bg-neutral-100 dark:bg-neutral-900 lg:row-span-2">
          <Keypad onSubmit={onSubmit} />
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
      <BottomSheet isOpen={isOpen} onDismiss={reset}>
        티켓이 발급되었습니다.
      </BottomSheet>
    </>
  );
}
