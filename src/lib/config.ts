import { jobs } from "@/lib/jobs";
import { resources } from "@/lib/resources";
import { flattenByChildren, isInternalHref } from "@/lib/utils";
import type { Metadata } from "next";

/**
 * For sitemap XML tags.
 */
type NavItem = {
  href: string;
  label: string;
  children?: NavItem[];
};

const donateLink = "mailto:alphahku1213@gmail.com?subject=Donation%20Inquiry";

const mainNav: NavItem[] = [
  { href: "/", label: "Home" },
  {
    href: "/about-us",
    label: "About Us",
    children: [
      { href: "/about-us/our-story", label: "Our Story" },
      { href: "/about-us/annual-report", label: "Annual Report" },
      { href: "/about-us/exco", label: "Executive Committee" },
      { href: "/about-us/partners", label: "Partners" },
    ],
  },
  {
    href: "/join-us",
    label: "Join Us",
    children: jobs.map((j) => ({ href: `/join-us/${j.slug}`, label: j.name })),
  },
  { href: donateLink, label: "Donate" },
  {
    href: "/resources",
    label: "Resources",
  },
];

/**
 * Routes that should be included in the sitemap but hidden from the header navigation.
 */
const sitemapOnlyNav: NavItem[] = [
  { href: "/upcoming-event", label: "Upcoming Event" },
  { href: "/our-work", label: "Our Work" },
  { href: "/blog", label: "Blog" },
  ...resources.map((r) => ({ href: `/resources/${r.slug}`, label: r.title })),
];

export const siteConfig = {
  title: "ALPHA HKU",
  description:
    "The first and only global student initiative based in Hong Kong for constructive peace and humanity. First international student chapter of ALPHA Education.",
  email: "alphahku1213@gmail.com",
  instagram: "https://www.instagram.com/alpha.hku",
  github: "https://github.com/ALPHA-HKU",
  linkedin: "https://www.linkedin.com/company/alpha-hku/",
  donate: donateLink,
  parentOrg: "https://www.alphaeducation.org",
  seoImage: "/ALPHA-HKU.png",
  seoImageWidth: 882, // open paint.exe and check seoImage
  seoImageHeight: 802,
  mainNav,
  sitemapOnlyNav,
  staticRoutes: flattenByChildren(mainNav)
    .filter((item) => isInternalHref(item.href))
    .map((item) => (item.href === "/" ? "" : item.href)),
  siteUrl: process.env.SITE_URL?.replace(/\/$/, ""),
};

export function getNavLabel(path: string): string | undefined {
  // normalize trailing slash
  const normalized = path === "/" ? "/" : path.replace(/\/$/, "");
  return flattenByChildren(siteConfig.mainNav).find((i) => i.href === normalized)?.label;
}

/**
 * Consolidate SEO metadata building logic here.
 */
export function buildPageMetadata(
  path: string,
  options?: { description?: string; title?: string }
): Metadata {
  const inferredLabel = getNavLabel(path) || siteConfig.title;
  const label = options?.title || inferredLabel;

  const description = options?.description ?? siteConfig.description;

  return {
    title: label,
    description,
    alternates: {
      canonical: path === "/" ? "/" : path.replace(/\/$/, ""), // Google Search Console; prevents {www.}alphahku.page subdomain issues
    },
    openGraph: {
      title: label,
      description,
      images: [
        {
          url: siteConfig.seoImage,
          width: siteConfig.seoImageWidth,
          height: siteConfig.seoImageHeight,
          alt: label,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: label,
      description,
      images: [siteConfig.seoImage],
    },
  } satisfies Metadata;
}
