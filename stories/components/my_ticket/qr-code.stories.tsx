import { QrCode } from '@/app/components/my-tickets';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof QrCode> = {
  title: 'COMPONENTS/My_Ticket/QrCode',
  component: QrCode,
  argTypes: {},
  tags: ['autodocs'],
};

export default meta;

type Template = StoryObj<typeof QrCode>;

export const Default: Template = {
  args: {
    ticketId: 12,
  },
};
