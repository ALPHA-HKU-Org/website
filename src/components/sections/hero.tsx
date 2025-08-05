"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

export function Hero() {
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
          <CarouselItem>
            <div className="p-1">
              <div className="flex h-96 items-center justify-center p-6">
                <span className="text-4xl font-semibold text-center">Next generation voices for peace.</span>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="p-1">
              <div className="flex h-96 items-center justify-center p-6">
                <span className="text-4xl font-semibold text-center">
                  ALPHA University Chapter at the University of Hong Kong.
                </span>
              </div>
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
