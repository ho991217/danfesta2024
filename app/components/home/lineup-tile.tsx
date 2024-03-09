import { useTranslations } from "next-intl";
import Link from "next/link";

export default function LineupTile() {
  const t = useTranslations("LineupTile")
  return (
    <div className="w-full">
      <div className="w-full flex justify-between items-end">
        <h3 className="text-2xl font-bold">{t('title')}</h3>
        <div className="text-base font-normal"><Link href="/[locale]/lineup">{t('seeAll')}</Link></div>
      </div>
      <div></div>
    </div>
  );
}