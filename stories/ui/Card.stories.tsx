import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

export default {
  title: 'UI/Card',
  component: Card,
  subcomponents: {
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  },
  tags: ['autodocs'],
} as Meta<typeof Card>;

type Template = StoryObj<typeof Card>;

export const Default: Template = {
  render: () => (
    <Card>
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>
          Some quick example text to build on the card title and make up the
          bulk of the card content.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p>content</p>
      </CardContent>
      <CardFooter>
        <p>Footer</p>
      </CardFooter>
    </Card>
  ),
};

export const CARD_HEADER: Template = {
  render: () => (
    <Card>
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>
          Some quick example text to build on the card title and make up the
          bulk of the content.
        </CardDescription>
      </CardHeader>
    </Card>
  ),
};

export const CARD_NOT_FOOTER: Template = {
  render: () => (
    <Card>
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>
          Some quick example text to build on the card title and make up the
          bulk of the content.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p>content</p>
      </CardContent>
    </Card>
  ),
};
