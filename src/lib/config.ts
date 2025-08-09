import { MetadataRoute } from "next";
import { isInternalHref } from "@/lib/utils";

type NavItem = {
  href: string;
  label: string;
  priority?: MetadataRoute.Sitemap[0]["priority"];
  changeFrequency?: MetadataRoute.Sitemap[0]["changeFrequency"];
};

const donateLink = "mailto:alphahku1213@gmail.com?subject=Donation%20Inquiry";

const mainNav: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/about-us", label: "About Us" },
  { href: "/upcoming-event", label: "Upcoming Event" },
  { href: "/our-work", label: "Our Work" },
  { href: "/blog", label: "Blog" },
  { href: "/join-us", label: "Join Us" },
  { href: donateLink, label: "Donate" },
  { href: "/resources", label: "Resource" },
];

const utilityNav: NavItem[] = [];

export const siteConfig = {
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
  staticRoutes: [
    ...mainNav
      .filter((item) => isInternalHref(item.href))
      .map((item) => (item.href === "/" ? "" : item.href)),
  ],
};
