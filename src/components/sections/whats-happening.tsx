import { Card } from "@/components/ui/card";
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
      <div className="container mx-auto px-4">
        <h2 className="mb-8 text-center text-3xl font-bold">What's Happening</h2>
        <div className="grid gap-8 md:grid-cols-3">
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
                <a
                  href={event.href}
                  className="text-primary mt-auto inline-block pt-2 hover:underline"
                >
                  {event.ctaLabel}
                </a>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
