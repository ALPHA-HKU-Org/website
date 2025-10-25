export type Partner = {
  name: string;
  description: string;
  href: string;
  logo?: string;
};

export const partners: Partner[] = [
  {
    name: "ALPHA Education",
    description:
      "We extend our wholehearted gratitude to ALPHA Education for their inspiration and support in all aspects!",
    href: "https://www.alphaeducation.org",
    logo: "/partners/alpha-education.png",
  },
];
