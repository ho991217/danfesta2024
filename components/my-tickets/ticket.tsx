'use client';

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@components/ui/dropdown-menu';
import { useState } from 'react';
import { HiMiniEllipsisHorizontal } from 'react-icons/hi2';

import { QrCode } from '.';
import If from '../util/if';

export default function Ticket({ ticketId }: { ticketId: number }) {
    const [revealTicketId, setRevealTicketId] = useState(false);

    return (
        <div className="w-full bg-white dark:bg-neutral-900 rounded-xl flex flex-col center overflow-hidden gap-6 shadow-2xl">
            <div className="shadow-lg rounded-xl p-[0.5rem_1rem_2rem_1rem] flex flex-col gap-2">
                <div className="w-full flex items-center justify-end">
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
                <div className="flex flex-col justify-start">
                    <h4 className="text-xl font-bold">
                        <If condition={revealTicketId}>
                            <If.Then>티켓 아이디: {ticketId}</If.Then>
                            <If.Else>단페스타 단국존 입장 티켓</If.Else>
                        </If>
                    </h4>
                    <p className="text-xs text-neutral-500">
                        디바이스의 밝기를 최대로 높여주세요.
                    </p>
                </div>
            </div>
            <QrCode ticketId={ticketId} className="w-full" />
        </div>
    );
}
