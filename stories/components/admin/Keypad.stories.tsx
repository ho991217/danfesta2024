import { Keypad } from '@/app/components/admin';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

const meta: Meta<typeof Keypad> = {
  title: 'COMPONENTS/ADMIN/KeyPad',
  component: Keypad,
  argTypes: {
    slot: { control: 'number', min: 1, max: 9 },
  },
  tags: ['autodocs'],
  args: { onSubmit: fn() },
};

export default meta;

type Template = StoryObj<typeof Keypad>;

export const Default: Template = {
  args: {
    slot: 6,
  },
};
