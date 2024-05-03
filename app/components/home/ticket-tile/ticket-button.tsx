'use client';

import { BottomSheet } from '@/app/components/common';
import useBottomSheet from '@/app/hooks/use-bottom-sheet';
import QrScanner from '@/public/qr-scanner.svg';

type TicketButtonProps = {
  label: string;
};

export default function TicketButton({ label }: TicketButtonProps) {
  const [isOpen, open, close] = useBottomSheet();
  return (
    <>
      <button
        className="flex flex-col items-center gap-[5px] text-center text-[10px] font-bold text-neutral-900 dark:text-white"
        onClick={open}
      >
        <div className="flex h-[80px] w-[80px] items-center justify-center rounded-lg bg-neutral-400 dark:bg-neutral-800">
          <QrScanner />
        </div>
        {label}
      </button>
      <div className="absolute">
        <BottomSheet header="티켓 보기" isOpen={isOpen} onDismiss={close}>
          아뿔싸! 티켓을 빼앗겼다!
        </BottomSheet>
      </div>
    </>
  );
}
