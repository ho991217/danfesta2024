'use client';

import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
} from '@components/ui/select';
import { usePathname, useRouter } from '@lib/navigation';
import { useLocale } from 'next-intl';
import { ReactNode, useTransition } from 'react';

type Props = {
  children: ReactNode;
  defaultValue: string;
  label: string;
};

export default function LocaleSwitcherSelect({
  children,
  defaultValue,
  label,
}: Props) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const locale = useLocale();

  function onSelectChange(value: string) {
    startTransition(() => {
      router.replace(pathname, { locale: value });
    });
  }

  return (
    <Select onValueChange={onSelectChange} value={locale} disabled={isPending}>
      <SelectTrigger>
        <SelectValue placeholder={defaultValue} />
      </SelectTrigger>
      <SelectContent>{children}</SelectContent>
    </Select>
  );
}
