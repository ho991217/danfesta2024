import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/app/components/ui/accordion';
import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

export default {
  title: 'UI/Accordion',
  component: Accordion,
  subcomponents: { AccordionItem, AccordionTrigger, AccordionContent },
} as Meta<typeof Accordion>;

type Template = StoryObj<typeof Accordion>;

export const Default: Template = {
  render: (args) => (
    <Accordion {...args}>
      <AccordionItem value={'test'}>
        <AccordionTrigger>TEST</AccordionTrigger>
        <AccordionContent>아코디언을 테스트합니다</AccordionContent>
      </AccordionItem>
      <AccordionItem value={'test2'}>
        <AccordionTrigger>TEST2</AccordionTrigger>
        <AccordionContent>아코디언을 테스트합니다2</AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};
