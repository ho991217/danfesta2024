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
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'scontent-ssn1-1.xx.fbcdn.net',
      },
      {
        protocol: 'https',
        hostname: 'arconline.co.uk',
      },
      {
        protocol: 'https',
        hostname: 'media.vanityfair.com',
      },
      {
        protocol: 'https',
        hostname: 'www.eastbaytimes.com',
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
    }
  )
);
