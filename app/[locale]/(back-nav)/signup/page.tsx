import { getLocale } from 'next-intl/server';
import { redirect } from 'next/navigation';

export default async function Page() {
  const locale = await getLocale();
  redirect(`/${locale}/verify`);
}
