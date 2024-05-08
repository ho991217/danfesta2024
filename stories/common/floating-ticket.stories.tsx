import { FloatingButton } from '@/app/components/common/floating-ticket';
import type { Meta, StoryObj } from '@storybook/react';
import { BsTicketFill } from 'react-icons/bs';

const meta: Meta<typeof FloatingButton> = {
  title: 'COMMON/FloatingTicket',
  component: FloatingButton,
  argTypes: {
    children: { control: 'text' },
  },
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
type Story = StoryObj<typeof FloatingButton>;

export const Admin: Story = {
  args: {
    href: '/',
    children: '관리자 페이지',
  },
};

export const User: Story = {
  args: {
    href: '/',
    children: <BsTicketFill />,
  },
};
