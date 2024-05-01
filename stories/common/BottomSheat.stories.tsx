import { BottomSheet } from '@/components/common';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

const meta: Meta<typeof BottomSheet> = {
  title: 'COMMON/BottomSheet',
  component: BottomSheet,
  tags: ['autodocs'],
  args: { onDismiss: fn() },
};

export default meta;
type Story = StoryObj<typeof BottomSheet>;

export const BOOTOMSHEET: Story = {
  args: {
    isOpen: true,
    header: 'TITLE',
    height: '1/3',
  },
};

export const BOOTOMSHEET_OVER: Story = {
  args: {
    isOpen: true,
    header: 'TITLE',
    height: '2/3',
    expandTo: '2/3',
  },
};

export const BOOTOMSHEET_FULL: Story = {
  args: {
    isOpen: true,
    header: 'TITLE',
    height: 'full',
    expandTo: 'full',
  },
};
