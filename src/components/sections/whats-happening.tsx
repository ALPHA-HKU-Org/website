import Image from "next/image";
import { Card } from "@/components/ui/card";

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
        <h2 className="text-3xl font-bold text-center mb-8">What's Happening</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <Card
              key={index}
              className="p-6 flex flex-col items-center text-center gap-4 border-primary/35 hover:border-primary transition-all"
            >
              <div className="relative h-24 w-24">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="rounded-lg object-contain"
                />
              </div>
              <div className="space-y-2 flex flex-col flex-1">
                <h3 className="text-2xl font-semibold">{event.title}</h3>
                <p className="text-muted-foreground">{event.description}</p>
                <a
                  href={event.href}
                  className="text-primary hover:underline mt-auto pt-2 inline-block"
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
