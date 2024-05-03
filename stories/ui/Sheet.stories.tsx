import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/app/components/ui/sheet';
import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

export default {
  title: 'UI/Sheet',
  component: SheetContent,

  argTypes: {
    side: {
      control: 'radio',
      options: ['bottom', 'right', 'left', 'top'],
    },
  },
  tags: ['autoDocs'],
} as Meta<typeof SheetContent>;

type Template = StoryObj<typeof SheetContent>;

export const Default: Template = {
  args: {
    side: 'right',
  },
  render: (args) => (
    <Sheet>
      <SheetTrigger>Open Sheet</SheetTrigger>
      <SheetContent {...args}>
        <SheetHeader>
          <SheetTitle>Title of Sheet</SheetTitle>
          <SheetDescription>Description here</SheetDescription>
        </SheetHeader>
        <div>Content goes here.</div>
        <SheetFooter>
          <SheetClose>Close</SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  ),
};
