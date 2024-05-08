import { Form } from '@/app/components/ticketing';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Form> = {
  title: 'COMPONENTS/TICKETING/Form',
  component: Form,
  argTypes: {},
  decorators: [
    (Story) => {
      return <Story />;
    },
  ],
  tags: ['autodocs'],
};

export default meta;

type Template = StoryObj<typeof Form>;

export const Default: Template = {
  args: {
    eventId: '123',
    captchaKey: '123',
  },
};
