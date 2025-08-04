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
                <span className="text-4xl font-semibold text-center">ALPHA University Chapter at HKU</span>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="p-1">
              <div className="flex h-96 items-center justify-center p-6">
                <span className="text-4xl font-semibold text-center">Second Slide Placeholder</span>
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
