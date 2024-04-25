'use server';

import { get } from '@/api';
import { isServer } from '@/lib/utils';
import { API_ROUTES } from '@lib/constants';

import type { FestivalDate, LineupInfo } from './page';

const baseUrl =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000'
    : process.env.NEXT_PUBLIC_DOMAIN;

export async function dynamicBlurDataUrl(url: string) {
  const base64str = await fetch(
    `${baseUrl}/_next/image?url=${url}&w=16&q=75`,
  ).then(async (res) =>
    Buffer.from(await res.arrayBuffer()).toString('base64'),
  );

  const blurSvg = `
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 5'>
      <filter id='b' color-interpolation-filters='sRGB'>
        <feGaussianBlur stdDeviation='1' />
      </filter>

      <image preserveAspectRatio='none' filter='url(#b)' x='0' y='0' height='100%' width='100%' 
      href='data:image/avif;base64,${base64str}' />
    </svg>
  `;

  const toBase64 = (str: string) =>
    isServer() ? Buffer.from(str).toString('base64') : window.btoa(str);

  return `data:image/svg+xml;base64,${toBase64(blurSvg)}`;
}

export async function getAllLineupInfo() {
  const allDay = ['FIRST_DAY', 'SECOND_DAY', 'THIRD_DAY'] as Readonly<
    FestivalDate[]
  >;
  const allLineupInfo = (
    await Promise.all(allDay.map(getLineupInfoByDay))
  ).flat();

  const withBase64 = await Promise.all(
    allLineupInfo.map(async (lineup) => {
      if (lineup.images.length === 0) return lineup;
      const base64 = await dynamicBlurDataUrl(lineup.images[0].url);
      return { ...lineup, images: [{ ...lineup.images[0], base64 }] };
    }),
  );

  return withBase64;
}

export async function getLineupInfoByDay(day: FestivalDate) {
  return get<LineupInfo[]>(API_ROUTES.lineup.list(day));
}
