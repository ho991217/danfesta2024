'use client';

import { useBottomSheet } from '@/app/hooks';
import { HiMiniEllipsisHorizontal } from 'react-icons/hi2';
import { toast } from 'sonner';

import { Keypad } from '../admin';
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

  const onAdminPasswordSubmit = (password: string) => {
    if (password === '1234') {
      close();
      toast.info(`티켓 번호: ${ticketId}`, {
        duration: 5000,
        action: {
          label: '닫기',
          onClick: () => toast.dismiss(),
        },
      });
    }
  };

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <HiMiniEllipsisHorizontal size={30} className="text-white" />
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
      <BottomSheet
        isOpen={isOpen}
        onDismiss={close}
        height="2/3"
        className="bg-neutral-100"
      >
        <Keypad
          password
          slot={4}
          onSubmit={onAdminPasswordSubmit}
          title="관리자 비밀번호를 입력하세요."
        />
      </BottomSheet>
    </>
  );
}
