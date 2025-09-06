import { AnimatedFillButton } from "@/components/primitives/animated-fill-button";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Image from "next/image";

type WhatsHappeningEvent = {
  title: string;
  description: string;
  image: string;
  href: string;
  ctaLabel: string;
};

export function WhatsHappening({ events }: { events: WhatsHappeningEvent[] }) {
  return (
    <section>
      <div className="container mx-auto">
        <h2 className="mb-8 text-center text-3xl font-bold">What's Happening</h2>
        <div className={cn("grid gap-8", "md:grid-cols-" + Math.min(events.length, 3))}>
          {events.map((event, index) => (
            <Card
              key={index}
              className="border-primary/35 hover:border-primary flex flex-col items-center gap-4 p-6 text-center transition-all"
            >
              <div className="relative h-24 w-24">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="rounded-lg object-contain"
                />
              </div>
              <div className="flex flex-1 flex-col space-y-2">
                <h3 className="text-2xl font-semibold">{event.title}</h3>
                <p className="text-muted-foreground">{event.description}</p>
                <div className="mt-auto pt-2">
                  <AnimatedFillButton
                    href={event.href}
                    size="lg"
                  >
                    {event.ctaLabel}
                  </AnimatedFillButton>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
