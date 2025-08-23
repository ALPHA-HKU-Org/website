import { PageHeader } from "@/components/primitives/page-header";
import { buildPageMetadata, siteConfig } from "@/lib/config";
import { Metadata } from "next";

const description =
  "The first and only global student initiative based in Hong Kong for constructive peace and humanity. First international student chapter of ALPHA Education.";
export const metadata: Metadata = buildPageMetadata("/about-us/our-story", { description });

export default function OurStory() {
  return (
    <section className="pt-8">
      <PageHeader
        title="Our Story"
        descriptionClassName="text-left"
        description={
          <>
            Carrying{" "}
            <a
              href={siteConfig.parentOrg}
              target="_blank"
              rel="noopener"
              className="text-primary hover:text-primary/80 underline transition-colors"
            >
              ALPHA Education
            </a>
            {"'"}s mandate, we are an independent student organization, the largest student initiative in HKU,
            formed by an installation size of 30 students to spread the message of peace and humanity.
            <br />
            <br />
            This is an initiative with great potential leading to a Global Institute of Peace and Humanity
            based in HK by 2027.
          </>
        }
      />
    </section>
  );
}
