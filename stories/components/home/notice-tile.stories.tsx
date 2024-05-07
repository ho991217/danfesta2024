import { NoticeTile } from '@/app/components/home';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof NoticeTile> = {
  title: 'COMPONENTS/HOME/NoticeTile',
  component: NoticeTile,
  argTypes: {},
  parameters: {},
  tags: ['autoDocs'],
};

export default meta;
type Story = StoryObj<typeof NoticeTile>;

export const Default: Story = {
  args: {},
};
