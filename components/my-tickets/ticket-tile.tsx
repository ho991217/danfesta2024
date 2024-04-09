import { TicketInfo } from '@app/[locale]/(back-nav)/my-tickets/action';
import { FiCalendar } from 'react-icons/fi';
import { HiMiniEllipsisHorizontal } from 'react-icons/hi2';

import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../ui/accordion';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';
import QrCode from './qr-code';

export default async function TicketTile({ id, event }: TicketInfo) {
  return (
    <AccordionItem
      value={String(id)}
      className="flex flex-col items-center justify-between border-[1px] border-neutral-300 w-full rounded-2xl dark:border-neutral-800"
    >
      <div className="w-full flex items-center justify-end pr-3 pt-1">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <HiMiniEllipsisHorizontal size={30} />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>티켓 관리</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>티켓 번호 보기</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="px-5 pb-5 flex w-full flex-col gap-2">
        <h4 className="text-base font-bold tex-start w-full">{event.name}</h4>
        <div className="flex items-center gap-2">
          <FiCalendar color="#929497" />
          <span className="text-sm text-[#929497]">
            {new Date(event.startAt).toLocaleDateString()}
          </span>
          <span className="text-sm text-[#929497]">~</span>
          <span className="text-sm text-[#929497]">
            {new Date(event.endAt).toLocaleDateString()}
          </span>
        </div>
      </div>
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
    </AccordionItem>
  );
}
