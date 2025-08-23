export type Resource = {
  slug: string;
  title: string;
  websiteUrl: string;
  hideTopPx: number;
};

export const resources: Resource[] = [
  {
    slug: "where-she-stood-wwii",
    title: "Where She Stood - WWII",
    websiteUrl: "https://whereshestoodwwii.wixsite.com/where-she-stood",
    hideTopPx: 50,
  },
  {
    slug: "the-spine-of-the-nation",
    title: "The Spine of the Nation",
    websiteUrl: "https://thespineofthenation.wordpress.com",
    hideTopPx: 49,
  },
];

export function findResourceBySlug(slug: string): Resource | undefined {
  return resources.find((r) => r.slug === slug);
}
