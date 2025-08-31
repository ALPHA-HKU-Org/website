export type Resource = {
  slug: string;
  title: string;
  websiteUrl: string;
  hideTopPx: number;
  authorLine?: string;
  scale?: number;
};

export const resources: Resource[] = [
  {
    slug: "where-she-stood-wwii",
    title: "Where She Stood - WWII",
    websiteUrl: "https://whereshestoodwwii.wixsite.com/where-she-stood",
    hideTopPx: 50,
    authorLine: "Ms Febe Chan (ALPHA Summer Program 2025)",
  },
  {
    slug: "the-spine-of-the-nation",
    title: "The Spine of the Nation",
    websiteUrl: "https://thespineofthenation.wordpress.com/2025/07/22/the-spine-of-the-nation/",
    hideTopPx: 49,
    authorLine: "Mr Richard Yan (ALPHA Summer Program 2025)",
    scale: 1,
  },
];

export function findResourceBySlug(slug: string): Resource | undefined {
  return resources.find((r) => r.slug === slug);
}
