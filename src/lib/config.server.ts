import "server-only";
import { siteConfig, type NavItem } from "./config";
import { resources, type Resource } from "./data/resources";
import { getJobs } from "./jobs.server";
import type { Jobs } from "./jobs.types";
import { EventSummary, getUpcomingEvents } from "./upcoming-events.server";

export async function getMainNav(): Promise<NavItem[]> {
  const jobs: Jobs["Summary"][] = await getJobs();
  const joinUsChildren: NavItem[] = jobs.map((job_entry: Jobs["Summary"]) => ({
    href: `/join-us/${job_entry.slug}`,
    label: job_entry.name,
  }));

  const upcomingEvents: EventSummary[] = await getUpcomingEvents();
  const upcomingEventChildren: NavItem[] = upcomingEvents.map((event: EventSummary) => ({
    href: `/upcoming-event/${event.slug}`,
    label: event.title,
  }));

  return siteConfig.mainNav.map((item: NavItem) =>
    item.href === "/join-us"
      ? { ...item, children: joinUsChildren }
      : item.href === "/upcoming-event"
        ? { ...item, children: upcomingEventChildren }
        : item
  );
}

export async function getSitemapOnlyNav(): Promise<NavItem[]> {
  return [
    ...siteConfig.sitemapOnlyNav,
    ...resources.map((r: Resource) => ({ href: `/resources/${r.slug}`, label: r.title })),
  ];
}
