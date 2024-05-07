import { RefetchButton } from '@/app/components/ticketing';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof RefetchButton> = {
  title: 'COMPONENTS/TICKETING/RefetchButton',
  component: RefetchButton,
  argTypes: {},
  tags: ['autodocs'],
};

export default meta;

type Template = StoryObj<typeof RefetchButton>;

export const Default: Template = {
  args: {
    ticketId: 12,
  },
};
