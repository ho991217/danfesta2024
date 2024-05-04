import { AdBanner } from '@components/common';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof AdBanner> = {
  title: 'COMMON/AdBanner',
  component: AdBanner,
  argTypes: {},
  parameters: {
    nextjs: {
      appDirectory: true,
      navigation: {
        pathname: '/',
      },
    },
  },
  tags: ['autoDocs'],
};

export default meta;
type Story = StoryObj<typeof AdBanner>;

export const Default: Story = {
  args: {},
};
