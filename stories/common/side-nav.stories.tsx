import { SideNav } from '@/app/components/common';
import type { Meta, StoryObj } from '@storybook/react';
import * as NextIntlServer from 'next-intl/server';
import { createMock } from 'storybook-addon-module-mock';

const meta: Meta<typeof SideNav> = {
  title: 'COMMON/SideNav',
  component: SideNav,
  argTypes: {},
  parameters: {},
  tags: ['autoDocs'],
};

export default meta;
type Story = StoryObj<typeof SideNav>;

export const Default: Story = {
  args: {},
  parameters: {
    moduleMock: {
      mock: () => {
        const getTranslationsMock = createMock(
          NextIntlServer,
          'getTranslations',
        );
        const getLocalMock = createMock(NextIntlServer, 'getLocale');
        getTranslationsMock.mockReturnValue(
          Promise.resolve<any>((link: string) => link),
        );
        getLocalMock.mockReturnValue(Promise.resolve('kr'));
        return [getTranslationsMock, getLocalMock];
      },
    },
  },
};
