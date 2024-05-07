import { TicketTile } from '@/app/components/home';
import type { Meta, StoryObj } from '@storybook/react';
import * as NextIntlServer from 'next-intl/server';
//import { getLocale } from
import { createMock } from 'storybook-addon-module-mock';

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
