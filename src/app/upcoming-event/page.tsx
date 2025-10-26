import { AnimatedFillButton } from "@/components/primitives/animated-fill-button";
import { PageHeader } from "@/components/primitives/page-header";
import { buildPageMetadata } from "@/lib/config";
import { EventSummary, getUpcomingEvents } from "@/lib/upcoming-events.server";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = buildPageMetadata("/upcoming-event", {
  description: "", // TODO: add SEO description
});

function EventCard({ eventSummary }: { eventSummary: EventSummary }) {
  const { slug, title, summary, date, cardImageSrc } = eventSummary;
  return (
    <article className="flex flex-col overflow-hidden rounded-xl border shadow-sm sm:flex-row">
      <div className="relative min-h-[40vh] sm:w-64">
        <Image
          src={cardImageSrc ?? ""}
          alt={`${title} event card image`}
          width={0}
          height={0}
          sizes="100vw"
          className="h-auto w-full"
        />
      </div>
      <div className="flex flex-col gap-3 p-8">
        <PageHeader
          title={title}
          size="sm"
          as="h3"
        />
        <p className="max-w-[70ch] text-sm text-muted-foreground">{summary}</p>
        <div className="mt-auto">
          <AnimatedFillButton
            href={`/upcoming-event/${slug}`}
            size="sm"
          >
            View details
          </AnimatedFillButton>
          <span className="ml-2 text-sm text-muted-foreground"> {date}</span>
        </div>
      </div>
    </article>
  );
}

export default async function Events() {
  const events: EventSummary[] = await getUpcomingEvents();

  return (
    <section className="mx-auto max-w-5xl">
      <PageHeader
        title="Upcoming Event"
        titleClassName="mb-6"
      />

      <div className="grid gap-4">
        {events.map((eventItem) => (
          <EventCard
            key={eventItem.slug}
            eventSummary={eventItem}
          />
        ))}
      </div>
    </section>
  );
}
