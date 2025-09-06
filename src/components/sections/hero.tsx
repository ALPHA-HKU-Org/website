"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { useEffect, useState } from "react";

type HeroSlide = {
  imageSrc: string;
  content: React.ReactNode;
};

type HeroProps = {
  /** Compile time check that at least one slide is provided */
  slides: [HeroSlide, ...HeroSlide[]];
  /** Tailwind height utility. Example: h-[26rem] */
  heightClassName: string;
};

export function Hero({ slides, heightClassName }: HeroProps) {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const isTouchDevice = window.matchMedia("(hover: none) or (pointer: coarse)").matches;
    setIsMobile(isTouchDevice);
  }, []);

  const hasMultipleSlides = slides.length > 1;
  return (
    <Carousel
      opts={{
        loop: hasMultipleSlides,
        watchDrag: false, // selecting text will drag the carousel if enabled, hence false
      }}
      plugins={
        hasMultipleSlides && !isMobile
          ? [
              Autoplay({
                delay: 5000,
                stopOnInteraction: true,
                stopOnMouseEnter: true,
                stopOnFocusIn: true,
              }),
            ]
          : []
      }
      useDots={hasMultipleSlides}
    >
      <CarouselContent>
        {slides.map((slide, index) => (
          <CarouselItem key={index}>
            <div className={`relative flex ${heightClassName} items-center justify-center`}>
              <Image
                src={slide.imageSrc}
                alt="Carousel Image"
                fill
                priority={index === 0}
                sizes="100vw"
                className="object-cover"
              />
              {slide.content ? <div className="absolute inset-0 bg-black/55" /> : null}
              {slide.content ? (
                <span className="z-10 text-center text-2xl font-semibold text-white md:text-4xl">
                  {slide.content}
                </span>
              ) : null}
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      {hasMultipleSlides ? (
        <>
          <CarouselPrevious className="text-white bg-transparent border-primary/35" />
          <CarouselNext className="text-white bg-transparent border-primary/35" />
        </>
      ) : null}
    </Carousel>
  );
}
