import { MetadataRoute } from "next";

type NavItem = {
  href: string;
  label: string;
  priority?: MetadataRoute.Sitemap[0]["priority"];
  changeFrequency?: MetadataRoute.Sitemap[0]["changeFrequency"];
};

const mainNav: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/about-us", label: "About Us" },
  { href: "/upcoming-event", label: "Upcoming Event" },
  { href: "/blog", label: "Blog" },
  { href: "/our-work", label: "Our Work" },
  { href: "/resources", label: "Resources" },
];

const utilityNav: NavItem[] = [{ href: "/join-us", label: "Join Us" }];

export const siteConfig = {
  email: "alphahku1213@gmail.com",
  instagram: "https://www.instagram.com/alpha.hku",
  github: "https://github.com/ALPHA-HKU",
  linkedin: "https://www.linkedin.com/company/alpha-hku/",
  donate: "mailto:alphahku1213@gmail.com?subject=Donation Inquiry",
  parentOrg: "https://alphaeducation.org",
  seoImage: "/ALPHA-HKU.png",
  mainNav,
  utilityNav,
  staticRoutes: [
    ...mainNav.map((item) => (item.href === "/" ? "" : item.href)),
    ...utilityNav.map((item) => item.href),
  ],
};
