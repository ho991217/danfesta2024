import { Checkbox } from '@/app/components/ui/checkbox';
import type { Meta, StoryObj } from '@storybook/react';

export default {
  title: 'UI/Checkbox',
  component: Checkbox,
} as Meta<typeof Checkbox>;

type Template = StoryObj<typeof Checkbox>;

export const Default: Template = {};
