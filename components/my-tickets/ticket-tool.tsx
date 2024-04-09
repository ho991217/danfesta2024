'use client';

import { useBottomSheet } from '@/hooks';
import { HiMiniEllipsisHorizontal } from 'react-icons/hi2';

import { BottomSheet } from '../common';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';

export default function TicketTool({ ticketId }: { ticketId: number }) {
  const [isOpen, open, close] = useBottomSheet();
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <HiMiniEllipsisHorizontal size={30} />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>티켓 관리</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <button
              onClick={() => {
                open();
              }}
            >
              티켓 번호 보기
            </button>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <BottomSheet isOpen={isOpen} onDismiss={close} header="티켓 번호">
        {ticketId}
      </BottomSheet>
    </>
  );
}
