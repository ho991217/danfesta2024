'use client';

import { useAuth } from '@/hooks';
import { SheetClose } from '@components/ui/sheet';
import { If } from '@components/util';
import { useLocale, useTranslations } from 'next-intl';
import Link from 'next/link';
import { BsTicketFill } from 'react-icons/bs';
import { IoPersonSharp } from 'react-icons/io5';

export default function AuthButton({ className }: { className?: string }) {
    const { logout, isLoggedIn } = useAuth();
    const locale = useLocale();
    const t = useTranslations('SideNav');

    return (
        <If condition={isLoggedIn}>
            <If.Then>
                <div>
                    <SheetClose className={className} onClick={logout}>
                        <IoPersonSharp />
                        {t('logout')}
                    </SheetClose>
                    <Link href={`/${locale}/my-tickets`}>
                        <SheetClose className={className}>
                            <BsTicketFill />
                            {t('myTickets')}
                        </SheetClose>
                    </Link>
                </div>
            </If.Then>

            <If.Else>
                <Link href={`/${locale}/login`}>
                    <SheetClose className={className}>
                        <IoPersonSharp />
                        {t('login')}
                    </SheetClose>
                </Link>
            </If.Else>
        </If>
    );
}
