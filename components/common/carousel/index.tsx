"use client";

import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import { NextIntlClientProvider, useLocale } from "next-intl";
import Tile from "./tile";
import en from "../../../messages/en.json";
import ko from "../../../messages/ko.json";
import { type LineupInfo } from "@/app/[locale]/(back-nav)/lineup/page";

type CarouselProps = {
  lineups: LineupInfo[];
};

export default function Carousel({ lineups }: CarouselProps) {
  const [emblaRef] = useEmblaCarousel();
  const locale = useLocale();

  return (
    <NextIntlClientProvider
      messages={locale === "en" ? en : ko}
      timeZone="Asia/Seoul"
      formats={{
        dateTime: {
          short: {
            day: "numeric",
            month: "short",
            year: "numeric",
          },
        },
      }}
      locale={locale}
    >
      <div className="absolute left-0 right-0" ref={emblaRef}>
        <div className="flex gap-3">
          {lineups.map((tile, index) => (
            <Tile key={index} {...tile} />
          ))}
        </div>
      </div>
    </NextIntlClientProvider>
  );
}
