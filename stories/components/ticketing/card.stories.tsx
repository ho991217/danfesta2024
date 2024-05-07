import * as api from '@/app/api';
import { Card } from '@/app/components/ticketing';
import type { Meta, StoryObj } from '@storybook/react';
import * as nextIntlServer from 'next-intl/server';
import { createMock } from 'storybook-addon-module-mock';

const meta: Meta<typeof Card> = {
  title: 'COMPONENTS/TICKETING/Card',
  argTypes: {
    from: { control: 'date' },
    to: { control: 'date' },
  },
  component: Card,
  tags: ['autoDocs'],
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    from: '2023-05-19',
    to: '2023-05-20',
    name: 'Ticket Test',
  },
  parameters: {
    moduleMock: {
      mock: () => {
        const getMock = createMock(api, 'get');
        const tockenMock = createMock(api, 'getServerSideToken');
        const localMock = createMock(nextIntlServer, 'getLocale');
        getMock.mockReturnValue(Promise.resolve({ turn: 2 }));
        tockenMock.mockReturnValue(Promise.resolve('tocken'));
        localMock.mockReturnValue(Promise.resolve('Kr'));
        return [getMock, tockenMock, localMock];
      },
    },
  },
};
