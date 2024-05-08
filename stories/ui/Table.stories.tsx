// Table.stories.js
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/app/components/ui/table';
import { Meta, StoryObj } from '@storybook/react';
import React from 'react';

const meta: Meta<typeof Table> = {
  title: 'UI/Table',
  component: Table,
  tags: ['autodocs'],
};
export default meta;

type Template = StoryObj<typeof Table>;

export const Default: Template = {
  render: (args) => (
    <Table {...args}>
      <TableCaption>Caption for Table</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Header 1</TableHead>
          <TableHead>Header 2</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>Cell 1</TableCell>
          <TableCell>Cell 2</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Cell 3</TableCell>
          <TableCell>Cell 4</TableCell>
        </TableRow>
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell>Footer 1</TableCell>
          <TableCell>Footer 2</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  ),
};

export const Non_Footer: Template = {
  render: (args) => (
    <Table {...args}>
      <TableCaption> 캡션</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Header 1</TableHead>
          <TableHead>Header 2</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>Cell 1</TableCell>
          <TableCell>Cell 2</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Cell 3</TableCell>
          <TableCell>Cell 4</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  ),
};
