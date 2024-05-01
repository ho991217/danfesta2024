import { AdBanner } from '@/components/common';
import { SelectItem } from '@components/ui/select';
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

export const AD_BANNER: Story = {
  args: {},
};
