import { LineupInfo } from "@/app/[locale]/(back-nav)/lineup/page";
import parseFestivalDate from "@/lib/utils/parser/parse-festival-date";
import { useFormatter } from "next-intl";
import Image from "next/image";
import { FiCalendar, FiClock, FiHeart } from "react-icons/fi";

export default function Tile({
  images,
  singer,
  description,
  festivalDate,
  performanceTime,
}: LineupInfo) {
  const format = useFormatter();

  return (
    <div className="relative aspect-[3/4] flex-[0_0_100%] overflow-hidden rounded-2xl bg-neutral-500">
      {images.length > 0 && (
        <Image
          src={images[0].url}
          alt={images[0].originalName}
          className="absolute bottom-0 left-0 right-0 top-0 object-cover"
          placeholder="blur"
          quality={100}
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg=="
          fill
        />
      )}
      <div className="absolute bottom-4 left-4 right-4 flex h-1/3 flex-col justify-between rounded-2xl bg-neutral-700 bg-opacity-0 bg-clip-padding p-4 text-white shadow-lg backdrop-blur-xl backdrop-filter">
        <span className="flex items-center gap-2 text-xs">
          <FiHeart color="white" />
          {festivalDate
            ? `${parseFestivalDate(festivalDate)}일차 공연 아티스트`
            : "공개 예정"}
        </span>
        <div>
          <h4 className="text-2xl font-bold">{singer}</h4>
          <span className="text-sm">{description}</span>
        </div>
        <div className="flex gap-4 text-sm font-normal">
          <span className="flex items-center justify-center gap-2">
            <FiCalendar color="white" />
            {performanceTime
              ? format.dateTime(new Date(performanceTime), "short")
              : "공개 예정"}
          </span>
          <span className="flex items-center justify-center gap-2">
            <FiClock color="white" />{" "}
            {performanceTime
              ? format.dateTime(new Date(performanceTime), {
                  hour: "numeric",
                  minute: "numeric",
                })
              : "공개 예정"}
          </span>
        </div>
      </div>
    </div>
  );
}
