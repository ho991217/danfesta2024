import { TicketInfo } from '@/app/[locale]/(back-nav)/admin/action';
import { StudentInfo } from '@/app/components/admin';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof StudentInfo> = {
  title: 'COMPONENTS/ADMIN/Result_Tile',
  component: StudentInfo,
  argTypes: {
    info: {
      control: 'object',
    },
  },
  tags: ['autodocs'],
};

export default meta;

type Template = StoryObj<typeof StudentInfo>;

const info: TicketInfo = {
  id: 1,
  name: 'Jun',
  major: '경영학과',
  studentId: 'asdqw1va',
  issued: true,
  turn: 14,
  code: 'asdhjkqwrbk',
  eventId: 123,
};

export const Default: Template = {
  args: {
    info: info,
  },
};

export const None_Info: Template = {
  args: {
    info: null,
  },
};
