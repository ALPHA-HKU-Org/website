import { MetadataRoute } from "next";
import { isInternalHref, flattenByChildren } from "@/lib/utils";
import type { Metadata } from "next";

type NavItem = {
  href: string;
  label: string;
  priority?: MetadataRoute.Sitemap[0]["priority"];
  changeFrequency?: MetadataRoute.Sitemap[0]["changeFrequency"];
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
  { href: "/upcoming-event", label: "Upcoming Event" },
  { href: "/our-work", label: "Our Work" },
  { href: "/blog", label: "Blog" },
  { href: "/join-us", label: "Join Us" },
  { href: donateLink, label: "Donate" },
  { href: "/resources", label: "Resource" },
];

const utilityNav: NavItem[] = [];

export const siteConfig = {
  title: "ALPHA HKU",
  description:
    "The first and only global student initiative based in Hong Kong for constructive peace and humanity. First international student chapter of ALPHA Education.",
  email: "alphahku1213@gmail.com",
  instagram: "https://www.instagram.com/alpha.hku",
  github: "https://github.com/ALPHA-HKU",
  linkedin: "https://www.linkedin.com/company/alpha-hku/",
  donate: donateLink,
  parentOrg: "https://alphaeducation.org",
  seoImage: "/ALPHA-HKU.png",
  seoImageWidth: 882,
  seoImageHeight: 802,
  mainNav,
  utilityNav,
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
      canonical: path === "/" ? "/" : path.replace(/\/$/, ""),
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
