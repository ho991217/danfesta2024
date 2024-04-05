'use client';

import QrScanner from '@/public/qr-scanner.svg';
import useBottomSheet from '@/hooks/use-bottom-sheet';
import { BottomSheet } from '@/components/common';

type TicketButtonProps = {
  label: string;
};

export default function TicketButton({ label }: TicketButtonProps) {
  const [isOpen, open, close] = useBottomSheet();
  return (
    <>
      <button
        className='dark:text-white text-neutral-900 font-bold text-[10px] text-center flex flex-col gap-[5px] items-center'
        onClick={open}
      >
        <div className='dark:bg-neutral-800 bg-neutral-400 w-[80px] h-[80px] rounded-lg flex items-center justify-center'>
          <QrScanner />
        </div>
        {label}
      </button>
      <div className='absolute'>
        <BottomSheet header='티켓 보기' isOpen={isOpen} onDismiss={close}>
          아뿔싸! 티켓을 빼앗겼다!
        </BottomSheet>
      </div>
    </>
  );
}
