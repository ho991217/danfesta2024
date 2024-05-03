// stories/Select.stories.tsx
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from '@/app/components/ui/select';
import { Meta, StoryObj } from '@storybook/react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import React from 'react';

// Adjust the import path according to your project structure

const meta: Meta<typeof Select> = {
  title: 'UI/Select',
  component: Select,
  tags: ['autodocs'],
};

export default meta;

type Template = StoryObj<typeof Select>;

export const Default: Template = {
  render: (args) => (
    <Select {...args}>
      <SelectTrigger>
        <SelectValue placeholder={'ko'} />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="ko">ko</SelectItem>
        <SelectItem value="en">en</SelectItem>
        <SelectItem value="jp">jp</SelectItem>
      </SelectContent>
    </Select>
  ),
};

export const Group: Template = {
  render: (args) => (
    <Select {...args}>
      <SelectTrigger>
        <SelectValue placeholder={'apple'} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Fruits</SelectLabel>
          <SelectItem value="apple">apple</SelectItem>
          <SelectItem value="orange">orange</SelectItem>
          <SelectItem value="strawberry">strawberry</SelectItem>
          <SelectItem value="cherry">cherry</SelectItem>
          <SelectItem value="blueberry">blueberry</SelectItem>
        </SelectGroup>
        <SelectSeparator />
        <SelectGroup>
          <SelectLabel>FastFood</SelectLabel>
          <SelectItem value="hamberger">hamberger</SelectItem>
          <SelectItem value="pizza">pizza</SelectItem>
          <SelectItem value="chicken">chicken</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  ),
};

const foods = Array.from({ length: 100 }, (_, i) => `Food ${i + 1}`);

export const Scroll: Template = {
  render: (args) => (
    <Select>
      <SelectTrigger aria-label="Food">
        <SelectValue placeholder="Select a food" />
      </SelectTrigger>
      <SelectContent>
        <SelectScrollUpButton>
          <ChevronUp />
        </SelectScrollUpButton>
        <SelectGroup>
          <SelectLabel>Foods</SelectLabel>
          {foods.map((food) => (
            <SelectItem key={food} value={food}>
              {food}
            </SelectItem>
          ))}
        </SelectGroup>
        <SelectScrollDownButton>
          <ChevronDown />
        </SelectScrollDownButton>
      </SelectContent>
    </Select>
  ),
};
