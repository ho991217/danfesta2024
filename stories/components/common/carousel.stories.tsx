'use client';

import { type LineupInfo } from '@/app/[locale]/(back-nav)/(padded)/lineup/page';
import { Carousel } from '@components/common';
import TileComponent from '@components/common/carousel/tile';
import type { Meta, StoryObj } from '@storybook/react';

const lineups: LineupInfo[] = [
  {
    id: 1,
    singer: 'DAY6',
    images: [
      {
        url: 'https://image.yes24.com/goods/41793215/XL',
        originalName: 'day6',
        mimeType: 'string',
      },
    ],
    description: '공개 예정',
    performanceTime: '2024-06-01',
    festivalDate: 'FIRST_DAY',
    opened: true,
  },
  {
    id: 2,
    singer: '아이유',
    images: [
      {
        url: 'https://image.yes24.com/goods/13116032/XL',
        originalName: '아이유',
        mimeType: 'string',
      },
    ],
    description: '공개 예정',
    performanceTime: '2024-06-02',
    festivalDate: 'SECOND_DAY',
    opened: true,
  },
  {
    id: 3,
    singer: 'TWICE',
    images: [
      {
        url: 'https://image.yes24.com/goods/71935476/L',
        originalName: 'TWICE',
        mimeType: 'string',
      },
    ],
    description: '공개 예정',
    performanceTime: '2024-06-01',
    festivalDate: 'THIRD_DAY',
    opened: true,
  },
];

const noLineups: LineupInfo[] = [
  {
    id: 1,
    singer: 'DAY6',
    images: [],
    description: '공개 예정',
    performanceTime: '2024-06-01',
    festivalDate: 'FIRST_DAY',
    opened: true,
  },
  {
    id: 2,
    singer: '아이유',
    images: [],
    description: '공개 예정',
    performanceTime: '2024-06-02',
    festivalDate: 'SECOND_DAY',
    opened: true,
  },
  {
    id: 3,
    singer: 'TWICE',
    images: [],
    description: '공개 예정',
    performanceTime: '2024-06-01',
    festivalDate: 'THIRD_DAY',
    opened: true,
  },
];

const meta: Meta<typeof Carousel> = {
  title: 'COMMON/Carousel',
  component: Carousel,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Carousel>;

export const Default: Story = {
  args: {
    children: lineups.map((lineup, index) => (
      <TileComponent key={index} priority={index === 0} {...lineup} />
    )),
  },
};

export const No_Line_Up: Story = {
  args: {
    children: noLineups.map((lineup, index) => (
      <TileComponent key={index} priority={index === 0} {...lineup} />
    )),
  },
};
