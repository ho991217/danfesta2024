import Logo from '@icons/logo-white.svg';
import Glass from '@images/glass.jpeg';
import { TicketInfo } from '@page/(back-nav)/(padded)/my-tickets/action';
import Image from 'next/image';
import { FiClock } from 'react-icons/fi';

import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../ui/accordion';
import QrCode from './qr-code';
import TicketTool from './ticket-tool';

export default async function Ticket({ id, event, issued }: TicketInfo) {
  return (
    <AccordionItem
      value={String(id)}
      className="flex flex-col items-center justify-between border-[1px] border-neutral-300 w-full rounded-2xl dark:border-neutral-800 overflow-hidden shadow-xl"
    >
      <div className="bg-black relative h-[10rem] w-full">
        <div className="w-full flex items-center justify-end pr-3 pt-1 absolute top-0 z-50">
          <TicketTool ticketId={id} />
        </div>
        <div className="absolute left-5 top-1/2 -translate-y-1/2 flex items-center gap-2">
          <Logo size={10} className="h-5 w-7 animate-in" />
          <h3 className="text-neutral-100 font-bold text-2xl">DANFESTA</h3>
        </div>
        <Image
          src={Glass}
          alt="유리 이미지"
          className="mix-blend-lighten absolute -right-20 -top-8 scale-125 opacity-50"
        />
      </div>
      <div className="pt-5 px-5 flex w-full flex-col gap-2 z-0 bg-white dark:bg-neutral-950">
        <div>
          <span className="text-xs text-neutral-500">2024 단페스타</span>
          <h4 className="text-2xl font-bold w-full">{event.name}</h4>
        </div>
        <div className="flex items-center gap-2">
          <FiClock color="#929497" />
          <span className="text-sm text-[#929497]">6시부터 입장 가능</span>
        </div>
      </div>
      {issued ? (
        <span className="w-full pb-5 pt-4 flex items-center justify-center text-neutral-300 dark:text-neutral-700">
          발급 완료된 티켓입니다.
        </span>
      ) : (
        <>
          <AccordionTrigger className="flex items-center">
            <span className="w-full rounded-b-xl px-5 text-center text-primary">
              티켓 보기
            </span>
          </AccordionTrigger>
          <AccordionContent>
            <p className="text-xs text-neutral-500 w-full text-center mb-3">
              디바이스의 밝기를 최대로 높여주세요.
            </p>
            <QrCode ticketId={id} className="w-full" />
          </AccordionContent>
        </>
      )}
    </AccordionItem>
  );
}
