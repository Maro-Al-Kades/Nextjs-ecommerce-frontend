import React from "react";
import { EmblaOptionsType } from "embla-carousel";
import EmblaCarousel from "./Embla/EmblaCarousel";
import { getCovers } from "@/actions/covers.actions";

const Carousel = async () => {
  const covers = await getCovers({ limit: 8 });
  const OPTIONS: EmblaOptionsType = { direction: "rtl" };

  return (
    <div>
      {Array.isArray(covers) && covers.length > 0 ? (
        <EmblaCarousel options={OPTIONS} slides={covers} />
      ) : (
        <p>لا توجد بيانات</p>
      )}
    </div>
  );
};

export default Carousel;
