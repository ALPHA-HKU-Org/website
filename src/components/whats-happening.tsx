import Image from "next/image";
import { Card } from "@/components/ui/card";

const events = [
  {
    title: "Event 1",
    description: "Description for the first event. This is a brief summary of what&apos;s happening.",
    image: "/file.svg",
  },
  {
    title: "Event 2",
    description: "Description for the second event. This is a brief summary of what&apos;s happening.",
    image: "/globe.svg",
  },
  {
    title: "Event 3",
    description: "Description for the third event. This is a brief summary of what&apos;s happening.",
    image: "/window.svg",
  },
];

export function WhatsHappening() {
  return (
    <section>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">What&apos;s Happening</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <Card key={index} className="p-6 flex flex-col items-center text-center gap-4 hover:border-primary/50 transition-all">
              <div className="relative h-24 w-24">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="rounded-lg object-contain"
                />
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-semibold">{event.title}</h3>
                <p className="text-muted-foreground">{event.description}</p>
                <a href="#placeholder" className="text-primary hover:underline mt-2 inline-block">Read More</a>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
