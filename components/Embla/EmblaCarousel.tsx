"use client";

import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Image } from "@heroui/image";
import { EmblaOptionsType } from "embla-carousel";

import {
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from "./EmblaCarouselArrowButtons";
import { DotButton, useDotButton } from "./EmblaCarouselDotButtons";

type CoverType = {
  _id: string;
  image?: string; // نخليها اختيارية عشان بعض الأوبجكتات ناقصة
  title: string;
};

type PropType = {
  slides: CoverType[];
  options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<PropType> = ({ slides, options }) => {
  const validSlides = slides.filter((cover) => cover.image); // تجاهل الكفرات اللي مافيهاش صورة

  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);
  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <section
      className="embla w-full border border-content1-foreground/10 relative"
      dir="rtl"
    >
      <div ref={emblaRef} className="embla__viewport">
        <div className="embla__container ">
          {validSlides.length > 0 ? (
            validSlides.map((cover) => (
              <div key={cover._id} className="embla__slide relative">
                <h1 className="absolute z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-center font-bold text-xl md:text-4xl">
                  {cover.title}
                </h1>
                <Image
                  alt={cover.title}
                  className="w-full h-[300px] object-cover rounded-lg"
                  src={`http://localhost:8080/covers/${cover.image}`}
                />
              </div>
            ))
          ) : (
            <p className="text-center">لا توجد صور متاحة</p>
          )}
        </div>
      </div>

      {validSlides.length > 1 && (
        <div className="embla__controls absolute bottom-0 z-50">
          <div className="embla__buttons">
            <PrevButton
              disabled={prevBtnDisabled}
              onClick={onPrevButtonClick}
            />
            <NextButton
              disabled={nextBtnDisabled}
              onClick={onNextButtonClick}
            />
          </div>
          <div className="embla__dots">
            {scrollSnaps.map((_, index) => (
              <DotButton
                key={index}
                className={"embla__dot".concat(
                  index === selectedIndex ? " embla__dot--selected" : ""
                )}
                onClick={() => onDotButtonClick(index)}
              />
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default EmblaCarousel;
