import { withThemeByClassName } from '@storybook/addon-themes';
import type { Preview } from '@storybook/react';
import { IntlProvider } from 'next-intl';
import React from 'react';
import { Toaster } from 'sonner';

import '../app/globals.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
      viewport: { defaultViewport: 'mobile1' },
    },
  },
  decorators: [
    (Story) => {
      return (
        <IntlProvider locale="ko">
          <div
            style={{
              paddingTop: '20 10',
              height: '80dvh',
              width: '50dvw',
            }}
          >
            <Toaster position="top-center" />
            <Story />
          </div>
        </IntlProvider>
      );
    },
  ],
};

export const decorators = [
  withThemeByClassName({
    themes: {
      light: 'light',
      dark: 'dark',
    },
    defaultTheme: 'light',
  }),
];

export default preview;
