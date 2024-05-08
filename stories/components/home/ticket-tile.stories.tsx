import { TicketTile } from '@/app/components/home';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof TicketTile> = {
  title: 'COMPONENTS/HOME/TicketTile',
  component: TicketTile,
  argTypes: {},
  parameters: {},
  tags: ['autoDocs'],
};

export default meta;
type Story = StoryObj<typeof TicketTile>;

export const Default: Story = {
  args: {},
};
