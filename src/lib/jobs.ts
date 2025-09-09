export type JobBenefitItem = {
  text: string;
  subPoints?: string[];
};

export type JobFootnote = {
  marker: string; // e.g. "*", "†", "1"
  text: string;
};

export type Job = {
  slug: string;
  name: string;
  suitableFor: string;
  benefits: JobBenefitItem[]; // nested bullet points supported via subPoints
  howToJoin: string;
  applyUrl: string;
  footnotes?: JobFootnote[];
};

export const jobs: Job[] = [
  {
    slug: "full-membership",
    name: "Full Membership",
    suitableFor:
      "HKU students who have extremely tight schedules but wish to support our cause for global peace and join our EXCLUSIVE and FRUITFUL international opportunities.",
    benefits: [
      { text: "Discounts in book fairs" },
      {
        text: "Priority and discounts in joining our exclusive",
        subPoints: [
          "Study tours, seminars",
          "Guest lectures from prestigious scholars",
          "International youth conference",
          "Summer opportunities at ALPHA Education",
          "And many more!",
        ],
      },
    ],
    howToJoin:
      "Full-time undergrad or postgrad HKU students - pay HKD$150 per annum by each September to secure your membership!",
    applyUrl:
      "https://docs.google.com/forms/d/e/1FAIpQLSd3KW8gkHzVffqupn1qAywQHQBoiFHBcSjXJ1qIMzovqevr9g/viewform?usp=header",
  },
  {
    slug: "officers",
    name: "Officers",
    suitableFor:
      "Dedicated HKU students who wish to contribute your skills in sustaining our operation, we welcome TALENTS FROM ALL FIELDS, including but not limited to: filming, video editing, graphic design, human resources, event curation, communication, social media engagement and others.",
    benefits: [
      { text: "Free admission fee" },
      {
        text: "Valuable and unique experience in running an international student initiative for peace based in HK",
      },
      { text: "Discounts in book fairs" },
      {
        text: "Priority and discounts in joining our exclusive",
        subPoints: [
          "Study tours, seminars",
          "Guest lectures from prestigious scholars",
          "International youth conference",
          "Summer opportunities at ALPHA Education",
          "And many more!",
        ],
      },
    ],
    howToJoin:
      "Full-time undergrad HKU students (preferrably NOT in your final year of study). Submit your CV with other relevant information on request, and pass the 2-stage interview.",
    applyUrl:
      "https://docs.google.com/forms/d/e/1FAIpQLSfc1i4WHhnTjYT6GyhhrlQjaDwC74Qy9WdBW0BOQeytU0YqeQ/viewform?usp=header",
  },
  {
    slug: "research-fellowship",
    name: "Research Fellowship",
    suitableFor:
      "Dedicated university students from ANY accredited universities in Hong Kong who have knowledge of WW2 in Asia, war crimes, international humanitarian law, international tribunal of atrocities and any related field, and are interested in writing academic publications and/or hosting workshops for primary/secondary local/international schools in Hong Kong.",
    benefits: [
      { text: "Free admission and membership fee" },
      {
        text: "Valuable and unique experience in academic research in aspects such as",
        subPoints: [
          "International humanitarian law",
          "Political science regarding wars",
          "Transitional justice",
          "Criminology of war crimes",
          "UN system",
          "Grassroots advocacy",
          "Human Rights",
          "And so on.",
        ],
      },
      { text: "Discounts in book fairs" },
      {
        text: "Priority and discounts in joining our exclusive*",
        subPoints: [
          "Study tours, seminars",
          "Guest lectures from prestigious scholars",
          "International youth conference",
          "Summer opportunities at ALPHA Education",
          "And many more!",
        ],
      },
    ],
    howToJoin:
      "Full-time undergrad or postgrad students in Hong Kong, submit your CV with other relevant information on request and pass the interview.",
    applyUrl:
      "https://docs.google.com/forms/d/e/1FAIpQLScUaIazk_aO7QU77izuS9EDt8nGq89mEzV1G5J8BjIHocjB0w/viewform?usp=header",
    footnotes: [
      {
        marker: "*",
        text: "HKU students will be prioritized due to university policy, but all researchers from other institutions will also enjoy priority over non-members.",
      },
    ],
  },
];

export function findJobBySlug(slug: string): Job | undefined {
  return jobs.find((j) => j.slug === slug);
}
