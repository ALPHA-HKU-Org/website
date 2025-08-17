"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

type HeroSlide = {
  imageSrc: string;
  content: React.ReactNode;
};

type HeroProps = {
  slides: HeroSlide[];
  /** Tailwind height utility. Example: h-[26rem] */
  heightClassName: string;
};

export function Hero({ slides, heightClassName }: HeroProps) {
  if (!slides || slides.length === 0) {
    throw new Error("Hero: 'slides' is required and must contain at least one slide.");
  }
  if (!heightClassName) {
    throw new Error("Hero: 'heightClassName' is required.");
  }
  return (
    <div className="relative w-full">
      <Carousel
        className="w-full"
        opts={{
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 5000,
            stopOnInteraction: true,
          }),
        ]}
        useDots
      >
        <CarouselContent>
          {slides.map((slide, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <div
                  className={`relative flex ${heightClassName} items-center justify-center p-6 bg-cover bg-center bg-no-repeat`}
                  style={{ backgroundImage: `url('${slide.imageSrc}')` }}
                >
                  <div className="absolute inset-0 bg-black/40" />
                  <span className="relative z-10 text-2xl md:text-4xl font-semibold text-center text-white">
                    {slide.content}
                  </span>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
