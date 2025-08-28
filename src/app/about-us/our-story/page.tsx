import { PageHeader } from "@/components/primitives/page-header";
import { Hero } from "@/components/sections/hero";
import { buildPageMetadata } from "@/lib/config";
import { Metadata } from "next";

const description =
  "The first and only global student initiative based in Hong Kong for constructive peace and humanity. First international student chapter of ALPHA Education.";
export const metadata: Metadata = buildPageMetadata("/about-us/our-story", { description });

export default function OurStory() {
  return (
    <Hero
      slides={[
        {
          imageSrc: "/about-us/our-story/white-doves.jpg",
          content: (
            <PageHeader
              title="Our Story"
              descriptionClassName="text-left text-white"
              description={
                <>
                  Carrying ALPHA Education's mandate, we are an independent student organization, the largest
                  student initiative in HKU, formed by an installation size of 30 students to spread the
                  message of peace and humanity.
                  <br />
                  <br />
                  This is an initiative with great potential leading to a Global Institute of Peace and
                  Humanity based in HK by 2027.
                </>
              }
            />
          ),
        },
        {
          imageSrc: "/about-us/our-story/student-gathering.jpg",
          content: (
            <PageHeader
              as="h2"
              title="Our Mission"
              descriptionClassName="text-left text-white"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            />
          ),
        },
      ]}
      heightClassName="h-[calc(100vh-var(--header-height))]"
    />
  );
}
