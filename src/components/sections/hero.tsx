"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
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
            <div className={cn("relative flex items-center justify-center", heightClassName)}>
              <Image
                src={slide.imageSrc}
                alt={`Hero slide ${index + 1} image: ${slide.imageSrc}`}
                fill
                quality={25}
                priority={index === 0}
                fetchPriority={index === 0 ? "high" : "auto"}
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
          <CarouselPrevious
            className={cn(
              // color styling
              "border-white/30 bg-foreground/80 text-white backdrop-blur-sm",
              // move position to bottom for mobile, avoid blocking over text
              "top-auto bottom-0 md:top-1/2 md:bottom-auto"
            )}
          />
          <CarouselNext
            className={cn(
              "border-white/30 bg-foreground/80 text-white backdrop-blur-sm",
              "top-auto bottom-0 md:top-1/2 md:bottom-auto"
            )}
          />
        </>
      ) : null}
    </Carousel>
  );
}
