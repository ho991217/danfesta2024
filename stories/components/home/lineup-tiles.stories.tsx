import { MenuTiles } from '@/app/components/home';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof MenuTiles> = {
  title: 'COMPONENTS/HOME/MenuTiles',
  component: MenuTiles,
  argTypes: {},
  parameters: {},
  tags: ['autoDocs'],
};

export default meta;
type Story = StoryObj<typeof MenuTiles>;

export const Default: Story = {
  args: {},
};
