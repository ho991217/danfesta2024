import { withThemeByClassName } from '@storybook/addon-themes';
import type { Preview } from '@storybook/react';
import { IntlProvider } from 'next-intl';
import {
  AppRouterContext,
  AppRouterInstance,
} from 'next/dist/shared/lib/app-router-context.shared-runtime';
import React from 'react';
import { Toaster } from 'sonner';

import '../app/globals.css';

const mockRouter: AppRouterInstance = {
  push: () => Promise.resolve(true),
  prefetch: () => Promise.resolve(),
  replace: () => Promise.resolve(true),
  back: () => {},
  forward: () => Promise.resolve(true),
  refresh: () => Promise.resolve(),
};

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
        <AppRouterContext.Provider value={mockRouter}>
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
        </AppRouterContext.Provider>
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
