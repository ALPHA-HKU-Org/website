import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export function Hero() {
  return (
    <Carousel className="w-full">
      <CarouselContent>
        <CarouselItem>
          <div className="p-1">
            <div className="flex h-96 items-center justify-center p-6">
              <span className="text-4xl font-semibold">ALPHA Education Chapter at HKU</span>
            </div>
          </div>
        </CarouselItem>
        <CarouselItem>
          <div className="p-1">
            <div className="flex h-96 items-center justify-center p-6">
              <span className="text-4xl font-semibold">Second Slide Placeholder</span>
            </div>
          </div>
        </CarouselItem>
        <CarouselItem>
          <div className="p-1">
            <div className="flex h-96 items-center justify-center p-6">
              <span className="text-4xl font-semibold">Third Slide Placeholder</span>
            </div>
          </div>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
