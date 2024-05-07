'use client';

import { ReactNode, useState } from 'react';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../../ui/accordion';
import { Checkbox } from '../../ui/checkbox';
import BottomSheet from '../bottom-sheet';
import Button from '../button';

export type Terms = {
  id: string;
  title: string;
  content: ReactNode;
};

type TermsProps = {
  onAccept?: () => void;
  onDecline?: () => void;
  terms: Terms[];
  isOpen?: boolean;
};

export default function Terms({
  onAccept,
  onDecline,
  terms,
  isOpen,
}: TermsProps) {
  const [checked, setChecked] = useState<string[]>([]);

  const onCheckedChange = (id: string) => {
    if (checked.includes(id)) {
      setChecked(checked.filter((c) => c !== id));
    } else {
      setChecked([...checked, id]);
    }
  };

  const toggleAll = () => {
    if (checked.length === terms.length) {
      setChecked([]);
    } else {
      setChecked(terms.map(({ id }) => id));
    }
  };

  const disabled = checked.length !== terms.length || checked.length === 0;

  return (
    <BottomSheet
      isOpen={!!isOpen}
      onDismiss={() => {
        setChecked([]);
        onDecline?.();
        close();
      }}
    >
      <Accordion type="single" collapsible className="w-full mb-4 text-sm">
        {terms.map(({ id, title, content }) => (
          <div key={id}>
            <AccordionItem value={id}>
              <div className="flex items-center justify-between">
                <label
                  htmlFor={id}
                  className="cursor-pointer text-primary-500 flex items-center gap-2"
                >
                  <Checkbox
                    id={id}
                    checked={checked.includes(id)}
                    onCheckedChange={() => onCheckedChange(id)}
                  />
                  {title}
                </label>
                <AccordionTrigger className="grow px-2"></AccordionTrigger>
              </div>
              <AccordionContent>{content}</AccordionContent>
            </AccordionItem>
          </div>
        ))}
      </Accordion>

      <div className="flex items-center justify-between mb-6">
        <label
          htmlFor="check-all"
          className="cursor-pointer text-primary-500 flex items-center gap-2"
        >
          <Checkbox
            id="check-all"
            checked={checked.length === terms.length}
            onCheckedChange={toggleAll}
          />
          전체 동의
        </label>
      </div>
      <Button
        type="submit"
        variant="filled"
        disabled={disabled}
        onClick={() => onAccept?.()}
      >
        다음
      </Button>
    </BottomSheet>
  );
}
