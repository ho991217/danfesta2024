import { get } from "@/api";
import Carousel from "@/components/common/carousel";
import { API_ROUTES } from "@/constants";
import parseFestivalDate from "@/lib/utils/parser/parse-festival-date";

export type FestivalDate = "FIRST_DAY" | "SECOND_DAY" | "THIRD_DAY";

export type LineupImage = {
  url: string;
  originalName: string;
  mimeType: string;
};

export type LineupInfo = {
  id: number | null;
  singer: string | "공개 예정";
  images: LineupImage[];
  description: string | "공개 예정";
  performanceTime: string | null;
  festivalDate: FestivalDate | null;
  opened: boolean;
};

export default async function LineupPage() {
  const allDay = ["FIRST_DAY", "SECOND_DAY", "THIRD_DAY"] as const;
  const data = await Promise.all(
    allDay.map((day) => get<LineupInfo[]>(API_ROUTES.lineup.list(day))),
  );

  return (
    <div className="mb-20 flex flex-col gap-4 px-5">
      {data.map((d, i) => (
        <>
          <div>
            <h2 className="text-2xl font-bold">{i + 1}일차</h2>
          </div>
          <div key={i} className="relative aspect-[3/4] w-full">
            <Carousel lineups={d} />
          </div>
        </>
      ))}
    </div>
  );
}
