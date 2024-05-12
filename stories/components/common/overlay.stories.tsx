import Overlay from '@/app/components/common/overlay';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

const meta: Meta<typeof Overlay> = {
  title: 'COMMON/Overlay',
  component: Overlay,
  argTypes: { darker: { control: 'boolean' } },
  tags: ['autoDocs'],
};

export default meta;
type Story = StoryObj<typeof Overlay>;

export const Default: Story = {
  args: { darker: true, onClick: fn() },
};
