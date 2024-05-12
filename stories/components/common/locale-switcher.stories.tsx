import LocaleSwitcher from '@/app/components/common/locale-switcher/locale-switcher-select';
import { SelectItem } from '@/app/components/ui/select';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof LocaleSwitcher> = {
  title: 'COMMON/LocaleSwitcher',
  component: LocaleSwitcher,
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
type Story = StoryObj<typeof LocaleSwitcher>;

export const Default: Story = {
  args: {
    children: ['ko', 'en'].map((item) => (
      <SelectItem key={item} value={item}>
        {item}
      </SelectItem>
    )),
  },
};
