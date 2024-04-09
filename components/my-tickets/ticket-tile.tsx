import { FiCalendar } from "react-icons/fi";
import TicketIcon from "@/public/icons/ticket.svg";
import { getLocale } from "next-intl/server";
import Link from "@/components/common/link";

export default async function TicketTile({ id }: { id: number }) {
  const locale = await getLocale();
  return (
    <div className="relative flex h-[161px] w-[327px] flex-col items-start justify-between">
      <div className="mx-5 mt-5 flex w-full flex-col gap-2">
        <h4 className="text-base font-bold">
          단국대학교 2024 단페스타 1일차 티켓
        </h4>
        <div className="flex items-center gap-2">
          <FiCalendar color="#929497" />
          <span className="text-sm text-[#929497]">
            {new Date("2024-04-01").toLocaleDateString()}
          </span>
          <span className="text-sm text-[#929497]">~</span>
          <span className="text-sm text-[#929497]">
            {new Date("2024-04-03").toLocaleDateString()}
          </span>
        </div>
      </div>
      <div className="w-full">
        <Link
          href={`/${locale}/my-tickets/${id}`}
          className="w-full rounded-b-xl px-5 py-4 text-center text-primary"
          auth
        >
          티켓 보기
        </Link>
      </div>

      <div className="absolute right-1/2 top-0 -z-10 translate-x-1/2">
        <TicketIcon />
      </div>
    </div>
  );
}
