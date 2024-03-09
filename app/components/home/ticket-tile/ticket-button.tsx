'use client';

import QrScanner from '@/public/qr-scanner.svg';
import BottomSheet from '@components/common/bottom-sheet';
import useBottomSheet from '@/app/hooks/useBottomSheet';

type TicketButtonProps = {
  label: string;
};

export default function TicketButton({ label }: TicketButtonProps) {
  const { isOpen, open, close } = useBottomSheet();
  return (
    <>
      <button
        className='text-white font-bold text-[10px] text-center flex flex-col gap-[5px] items-center'
        onClick={open}
      >
        <div className='bg-neutral-800 w-[80px] h-[80px] rounded-lg flex items-center justify-center'>
          <QrScanner />
        </div>
        {label}
      </button>
      <div className='absolute'>
        <BottomSheet isOpen={isOpen} onDismiss={close} header='티켓 보기'>
          아뿔싸! 티켓을 빼앗겼다!
        </BottomSheet>
      </div>
    </>
  );
}
