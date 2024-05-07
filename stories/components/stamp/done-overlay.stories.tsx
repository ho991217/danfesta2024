import { DoneOverlay } from '@/app/components/stamp';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof DoneOverlay> = {
  title: 'COMPONENTS/STAMP/DoneOverlay',
  argTypes: {
    isDone: { control: 'boolean' },
  },
  component: DoneOverlay,
  tags: ['autoDocs'],
};

export default meta;
type Story = StoryObj<typeof DoneOverlay>;

export const Default: Story = {
  args: {
    isDone: true,
  },
};

export const Not_Done: Story = {
  args: {
    isDone: false,
  },
};
