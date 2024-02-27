import { getOS } from '@/app/utils';
import QrScanner from '@/public/qr-scanner.svg';

export default function TicketTile() {
  return (
    <div className='w-full h-32 bg-neutral-900 flex justify-between p-4 rounded-xl'>
      <div className='text-neutral-50 h-full flex flex-col justify-between'>
        <h4 className='font-bold text-sm'>단페스타 모바일 티켓 시스템</h4>
        <div className='flex flex-col gap-0'>
          <span className='text-[11px] text-neutral-500 leading-[0.8rem]'>
            티켓 유무
          </span>
          <h3 className='text-primary font-bold text-base'>
            {`runtime: ${getOS()}`.toUpperCase()}
          </h3>
        </div>
        <span className='text-[8px] text-neutral-500 leading-[8px]'>
          입장시 티켓 확인이 필요합니다. 인증 절차 중<br />
          확인이 불가할 경우 입장이 제한될 수 있습니다.
        </span>
      </div>
      <div className='text-white font-bold text-[10px] text-center flex flex-col gap-[5px]'>
        <div className='bg-neutral-800 w-[80px] h-[80px] rounded-lg flex items-center justify-center'>
          <QrScanner />
        </div>
        탭하여 확인
      </div>
    </div>
  );
}
