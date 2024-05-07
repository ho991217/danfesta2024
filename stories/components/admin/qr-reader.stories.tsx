import QrReader from '@/app/components/admin/qr-reader';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

const meta: Meta<typeof QrReader> = {
  title: 'COMPONENTS/ADMIN/QR_Reader',
  component: QrReader,
  argTypes: {
    paused: { control: 'boolean' },
  },
  tags: ['autodocs'],
  args: { onScan: fn() },
};

export default meta;

type Template = StoryObj<typeof QrReader>;

export const Default: Template = {
  args: {
    paused: true,
  },
};
