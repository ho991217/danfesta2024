'use client';

import { Carousel } from '@components/common';
import TileComponent from '@components/common/carousel/tile';
import { type LineupInfo } from '@page/(back-nav)/lineup/page';
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
        base64:
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAECAIAAADETxJQAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAM0lEQVR4nAEoANf/AP/O0fGvs//SzQD/8OG7jG3/2McAgE5Rm2BOl0xNAEUmJXgXGSsAAPwxE63HH8B2AAAAAElFTkSuQmCC',
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
        base64:
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAIAAAAmkwkpAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAP0lEQVR4nAE0AMv/AP/87m5eSxcOANfWzgDi2MgaAACIckiqoJIAw7qvMCMAuq5phH96AP3279fRsbOrjYyNjZ+VGvTvB8vJAAAAAElFTkSuQmCC',
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
        base64:
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAIAAAAmkwkpAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAP0lEQVR4nAE0AMv/AC+Arn++3XCuykOGowCa19/S797t/uCqvaAAuMeoWlU5V1JCFhwcAAUCACktLhcfJBcrLtSXFipBaicxAAAAAElFTkSuQmCC',
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
    lineups: lineups,
  },
};

export const No_Line_Up: Story = {
  args: {
    lineups: noLineups,
  },
};

export const Tile: Story = {
  args: {
    lineups: lineups,
  },
  render: (args) => {
    return <TileComponent {...args.lineups[0]} />;
  },
};
