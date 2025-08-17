export type Partner = {
  name: string;
  description: string;
  href: string;
  logo?: string;
};

export const partners: Partner[] = [
  {
    name: "ALPHA Education",
    description: "Parent Organization",
    href: "https://www.alphaeducation.org",
    logo: "/partners/alpha-education.png",
  },
];
