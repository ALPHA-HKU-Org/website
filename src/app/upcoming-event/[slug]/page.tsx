import { buildPageMetadata } from "@/lib/config";
import { getEventSummaries } from "@/lib/upcoming-events.server";
import type { Metadata } from "next";

export async function generateStaticParams() {
  const events = await getEventSummaries();
  return events.map((event) => ({ slug: event.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const allEvents = await getEventSummaries();
  const event = allEvents.find((eventItem) => eventItem.slug === slug);

  if (!event) return buildPageMetadata("/upcoming-event");
  return buildPageMetadata(`/upcoming-event/${event.slug}`, {
    title: event.title,
    description: event.summary,
  });
}

export default async function EventDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const { default: Post } = await import(`@/content/events/${slug}.mdx`);
  return <Post />;
}

// Return 404 instead of error
export const dynamicParams = false;
