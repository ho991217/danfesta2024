import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from '@/app/components/ui/dropdown-menu';
import { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { HiMiniEllipsisHorizontal } from 'react-icons/hi2';

// 컴포넌트 경로는 실제 구조에 맞게 조정하세요.

export default {
  title: 'UI/DropDown',
  component: DropdownMenu,
  tags: ['autodocs'],
} as Meta<typeof DropdownMenu>;

type Template = StoryObj<typeof DropdownMenu>;

export const Default: Template = {
  render: () => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button>More</button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>Select Option 1</DropdownMenuItem>
        <DropdownMenuItem>Select Option 2</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuLabel>Label</DropdownMenuLabel>
        <DropdownMenuRadioGroup value="1">
          <DropdownMenuRadioItem value="1">
            Radio Option 1
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="2">
            Radio Option 2
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
        <DropdownMenuSeparator />
        <DropdownMenuCheckboxItem checked={true}>
          Checkbox Item
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
};

export const Nested: Template = {
  render: () => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button>Nested Options</button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>Submenu</DropdownMenuSubTrigger>
          <DropdownMenuSubContent>
            <DropdownMenuItem>Sub Option 1</DropdownMenuItem>
            <DropdownMenuItem>Sub Option 2</DropdownMenuItem>
          </DropdownMenuSubContent>
        </DropdownMenuSub>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Option 3</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
};

export const Ticket: Template = {
  render: () => (
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
  ),
};
