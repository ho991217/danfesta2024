'use client';

import { useParams } from 'next/navigation';
import { ReactNode, useTransition } from 'react';
import { useRouter, usePathname } from '@/lib/navigation';
import { IoLanguageSharp } from 'react-icons/io5';
import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useLocale } from 'next-intl';

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
  const params = useParams();
  const locale = useLocale();

  function onSelectChange(value: string) {
    startTransition(() => {
      router.replace(
        // @ts-expect-error -- TypeScript will validate that only known `params`
        // are used in combination with a given `pathname`. Since the two will
        // always match for the current route, we can skip runtime checks.
        { pathname, params },
        { locale: value }
      );
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
