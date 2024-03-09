import TileHeader from '../tile-header';
import { useTranslations } from 'next-intl';
import TicketButton from './ticket-button';

export default function TicketTile() {
  const t = useTranslations('TicketTile');
  return (
    <>
      <div className='w-full'>
        <TileHeader>
          <TileHeader.Head>{t('title')}</TileHeader.Head>
        </TileHeader>
        <div className='w-full h-32 bg-neutral-900 flex justify-between p-4 rounded-xl'>
          <div className='text-neutral-50 h-full flex flex-col justify-between'>
            <h4 className='font-bold text-sm'>{t('subtitle')}</h4>
            <div className='flex flex-col gap-0'>
              <span className='text-[11px] text-neutral-500 leading-[0.8rem]'>
                {t('ticketStatus')}
              </span>
              <h3 className='text-primary font-bold text-base'>
                {t('haveTicket')}
              </h3>
            </div>
            <span className='text-[8px] text-neutral-500 leading-[8px] max-w-60'>
              {t('notice')}
            </span>
          </div>
          <TicketButton label={t('tapToSee')} />
        </div>
      </div>
    </>
  );
}
