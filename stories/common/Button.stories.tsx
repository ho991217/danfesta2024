import { Button } from '@components/common';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

const meta: Meta<typeof Button> = {
  title: 'COMMON/Button',
  component: Button,
  argTypes: {
    children: { control: 'text' },
  },
  tags: ['autodocs'],
  args: { onClick: fn() },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: 'Active',
    variant: 'filled',
  },
};
