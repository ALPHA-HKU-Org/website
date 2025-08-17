export type ExcoLinkType = "email" | "github" | "linkedin" | "instagram" | "website" | "x";

export type ExcoLink = {
  type: ExcoLinkType;
  url: string;
};

export type ExcoMember = {
  name: string;
  position: string;
  photoSrc?: string;
  bio?: string;
  links?: ExcoLink[];
};

export const excoMembers: ExcoMember[] = [
  {
    name: "Lam Tze Hei",
    position: "President",
  },
  {
    name: "Bibi Hajirah",
    position: "Vice-President",
  },
  {
    name: "Liu Chung Wing",
    position: "Vice-President",
  },
  {
    name: "Fatima-Tul-Zahra",
    position: "General Secretary",
  },
  {
    name: "Pak Wing Ching",
    position: "Director of Treasury",
  },
  {
    name: "SeoJin Moon",
    position: "co-Directory of Publicity",
  },
  {
    name: "Razzaq Kinza",
    position: "co-Directory of Publicity",
  },
  {
    name: "Cheng Ho Ming",
    position: "Chief Technician",
    bio: "Eric is a year 3 student at HKU, majoring in BASc(AppliedAI).",
    links: [
      { type: "email", url: "eric310@connect.hku.hk" },
      { type: "github", url: "https://github.com/eric15342335" },
      { type: "linkedin", url: "https://www.linkedin.com/in/eric15342335/" },
      { type: "instagram", url: "https://www.instagram.com/ericcheng0310/" },
      { type: "x", url: "https://x.com/eric15342335/" },
      { type: "website", url: "https://eric15342335.github.io/" },
    ],
  },
];
