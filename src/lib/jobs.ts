// @ts-expect-error
import { frontmatter as JobAFrontmatter } from "../content/join-us/full-membership.mdx";
// @ts-expect-error
import { frontmatter as JobBFrontmatter } from "../content/join-us/officers.mdx";
// @ts-expect-error
import { frontmatter as JobCFrontmatter } from "../content/join-us/research-fellowship.mdx";

export const jobs: Jobs["Summary"][] = [JobAFrontmatter, JobBFrontmatter, JobCFrontmatter];

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
