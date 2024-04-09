import Carousel from "../common/carousel";
import TileHeader from "./tile-header";
import { LineupInfo } from "@/app/[locale]/(back-nav)/lineup/page";
import { getTranslations } from "next-intl/server";

export default async function LineupTile() {
  try {
    const allDay = ["FIRST_DAY", "SECOND_DAY", "THIRD_DAY"] as const;
    const data = await Promise.all(
      allDay.map((day) =>
        fetch(`https://next.danvery.com/api/line-up?festivalDate=${day}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          cache: "no-store",
        }).then((res) => res.json() as Promise<LineupInfo[]>),
      ),
    );
    const lineups = data.flat();

    const t = await getTranslations("LineupTile");

    return (
      <div className="w-full">
        <TileHeader>
          <TileHeader.Head>{t("title")}</TileHeader.Head>
          <TileHeader.SeeAll href="/lineup">{t("seeAll")}</TileHeader.SeeAll>
        </TileHeader>
        <div className="relative aspect-[3/4] w-full">
          <Carousel images={lineups} />
        </div>
      </div>
    );
  } catch (error) {
    const e = error as Error;
    console.error(error);
    return <span className="w-full text-neutral-500">{e.message}</span>;
  }
}
