import { Separator } from '@/app/components/ui/separator';
import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

const meta: Meta<typeof Separator> = {
  title: 'UI/Separator',
  component: Separator,
  argTypes: {
    orientation: {
      control: 'radio',
      options: ['horizontal', 'vertical'],
    },
    decorative: { type: 'boolean' },
  },
};

export default meta;
type Template = StoryObj<typeof Separator>;

export const Default: Template = {
  args: {
    decorative: true,
    orientation: 'horizontal',
  },
};
