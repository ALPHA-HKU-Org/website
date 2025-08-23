import { PageHeader } from "@/components/primitives/page-header";
import { Hero } from "@/components/sections/hero";
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
        className="mb-8"
      />
      <Hero
        slides={[
          {
            imageSrc: "/about-us/our-story/white-doves.jpg",
            content: null,
          },
        ]}
        heightClassName="h-[15rem] md:h-[20rem]"
      />
    </section>
  );
}
