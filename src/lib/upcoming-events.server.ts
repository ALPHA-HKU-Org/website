import "server-only";
import fileSystem from "fs";
import pathModule from "path";
import { cache } from "react";
import { getContentDir } from "./paths.server";

export type EventSummary = {
  slug: string;
  title: string;
  date: string;
  summary: string | undefined;
  cardImageSrc: string | undefined;
};

function normalizeDateString(value: string | undefined): string | undefined {
  if (!value) return undefined;

  const javascriptDate = new Date(value);
  if (Number.isNaN(javascriptDate.getTime())) return undefined;

  const parsedDate: { year: string; month: string; day: string } = {
    year: String(javascriptDate.getUTCFullYear()),
    month: String(javascriptDate.getUTCMonth() + 1).padStart(2, "0"),
    day: String(javascriptDate.getUTCDate()).padStart(2, "0"),
  };

  return `${parsedDate.year}-${parsedDate.month}-${parsedDate.day}`;
}

export const getEventSummaries = cache(async (): Promise<EventSummary[]> => {
  const dir: string = getContentDir("events");
  const files: string[] = fileSystem.readdirSync(dir);

  const events: EventSummary[] = await Promise.all(
    files
      .filter((file) => file.endsWith(".mdx"))
      .map(async (file) => {
        const { frontmatter } = await import(`@/content/events/${file}`);

        const slug = frontmatter?.slug ?? pathModule.parse(file).name;
        const title: string = frontmatter?.title ?? slug;
        const date: string | undefined = normalizeDateString(frontmatter?.date);
        const summary: string | undefined = frontmatter?.summary;
        const cardImageSrc: string | undefined = frontmatter?.cardImageSrc;

        return { slug, title, date, summary, cardImageSrc } as EventSummary;
      })
  );

  // sort ascending by date if defined
  events.sort((left, right) => left.date?.localeCompare(right.date ?? "") ?? 0);
  return events as EventSummary[];
});

// Ignore events with no date, or already passed (but forgot to move away from "Upcoming Event" page)
export const getUpcomingEvents = cache(async (): Promise<EventSummary[]> => {
  // new Date() is always valid, so normalizeDateString won't return undefined in the foreseeable future
  // the variable[!] <- symbol is to tell TypeScript that it is definitely not undefined!
  const todayIso: string = normalizeDateString(new Date().toISOString())!;
  const allEvents: EventSummary[] = await getEventSummaries();

  return allEvents.filter((eventItem) => eventItem.date && eventItem.date >= todayIso);
});
