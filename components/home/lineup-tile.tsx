import Carousel from "../common/carousel";
import TileHeader from "./tile-header";
import { API_ROUTES, API_URL } from "@/constants";
import { LineupInfo } from "@/app/[locale]/(back-nav)/lineup/page";
import { getTranslations } from "next-intl/server";

export default async function LineupTile() {
  try {
    const allDay = ["FIRST_DAY", "SECOND_DAY", "THIRD_DAY"] as const;
    // const data = await Promise.all(
    //   allDay
    //     .map((day) =>
    //       fetch(`${API_URL}${API_ROUTES.lineup.list(day)}`, {
    //         method: 'GET',
    //         headers: {
    //           'Content-Type': 'application/json',
    //         },
    //         cache: 'no-store',
    //       }).then((res) => res.json())
    //     )
    //     .flat()
    // );

    const data = await fetch(API_ROUTES.lineup.list("FIRST_DAY"), {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store",
    }).then((res) => res.text());
    const t = await getTranslations("LineupTile");

    return (
      <div className="w-full">
        <TileHeader>
          <TileHeader.Head>{t("title")}</TileHeader.Head>
          <TileHeader.SeeAll href="/lineup">{t("seeAll")}</TileHeader.SeeAll>
        </TileHeader>
        <div className="relative aspect-[3/4] w-full">
          {/* <Carousel images={[data]} /> */}
          {data}
        </div>
      </div>
    );
  } catch (error) {
    const e = error as Error;
    console.error(error);
    return <span className="w-full text-neutral-500">{e.message}</span>;
  }
}
