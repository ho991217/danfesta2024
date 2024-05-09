import * as api from '@/app/api';
import { NeedReverificationTile } from '@/app/components/home';
import type { Meta, StoryObj } from '@storybook/react';
import { createMock } from 'storybook-addon-module-mock';

const meta: Meta<typeof NeedReverificationTile> = {
  title: 'COMPONENTS/HOME/NeedReverificationTile',
  component: NeedReverificationTile,
  tags: ['autoDocs'],
};

export default meta;
type Story = StoryObj<typeof NeedReverificationTile>;

export const Default: Story = {
  args: {},
  parameters: {
    moduleMock: {
      mock: () => {
        const logedinMock = createMock(api, 'getIsLoggedIn');
        const verifiedMock = createMock(api, 'getIsVerified');
        logedinMock.mockReturnValue(Promise.resolve(true));
        verifiedMock.mockReturnValue(Promise.resolve(false));
        return [logedinMock, verifiedMock];
      },
    },
  },
};
