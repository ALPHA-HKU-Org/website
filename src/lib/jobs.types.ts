export type Jobs = {
  Summary: {
    slug: string;
    name: string;
    applyUrl?: string;
  };

  BenefitItem: {
    text: string;
    subPoints?: string[];
  };

  Footnote: {
    marker: string;
    text: string;
  };

  Content: {
    suitableFor: string;
    benefits: Jobs["BenefitItem"][];
    howToJoin: string;
    applyUrl?: string;
    footnotes?: Jobs["Footnote"][];
  };
};
