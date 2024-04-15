import { withSentryConfig } from '@sentry/nextjs';
import createNextIntlPlugin from 'next-intl/plugin';
import withPWA from 'next-pwa';

const prod = process.env.NODE_ENV === 'production';

const withNextIntl = createNextIntlPlugin('./i18n.ts');

const withPWAConfig = withPWA({
  dest: 'public',
  disable: !prod,
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  productionBrowserSourceMaps: !prod,
  crossOrigin: 'use-credentials',
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
      },
      {
        protocol: 'https',
        hostname: 'api-storage.cloud.toast.com',
      },
      {
        protocol: 'https',
        hostname: 'webinfo.dankook.ac.kr',
      },
    ],
  },
};

export default withPWAConfig(
  withSentryConfig(
    withNextIntl(nextConfig),
    {
      silent: true,
      org: 'danfesta',
      project: 'javascript-nextjs',
    },
    {
      widenClientFileUpload: true,
      tunnelRoute: '/monitoring',
      hideSourceMaps: true,
      disableLogger: true,
      automaticVercelMonitors: true,
    },
  ),
);
