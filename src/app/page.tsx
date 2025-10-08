import { description } from "@/app/layout";
import { AnimatedFillButton } from "@/components/primitives/animated-fill-button";
import { PageHeader } from "@/components/primitives/page-header";
import { SmartLink } from "@/components/primitives/smart-link";
import { FeaturedProgram } from "@/components/sections/featured-program";
import { Hero } from "@/components/sections/hero";
import { WhatsHappening } from "@/components/sections/whats-happening";
import { buildPageMetadata, siteConfig } from "@/lib/config";
import { Metadata } from "next";

export const metadata: Metadata = buildPageMetadata("/", {
  description,
  title: "ALPHA University Chapter at the University of Hong Kong",
});

export default function Home() {
  return (
    <>
      <Hero
        slides={[
          {
            imageSrc: "/home/Pond Lilies by the Law Faculty.webp",
            content: <i>Next generation voices for peace.</i>,
          },
          {
            imageSrc: "/home/Main Building 4.webp",
            content: (
              <>
                The first and only global student initiative
                <br />
                based in Hong Kong
                <br />
                for constructive peace and humanity.
              </>
            ),
          },
        ]}
        heightClassName="h-[30rem]"
      />
      <FeaturedProgram
        heading={'Restage of "Rape of Nanking"'}
        description=""
        mediaSrc="/ALPHA-HKU.png"
        mediaAlt="ALPHA HKU Logo"
        isVideo={false}
        ctaHref="/upcoming-event"
        ctaLabel="More Details Coming Soon"
      />
      <section className="mx-auto text-center">
        <PageHeader
          as="h2"
          title="Who We Are"
          size="sm"
          description={
            <>
              Carrying{" "}
              <SmartLink
                href={siteConfig.parentOrg}
                className="text-primary underline transition-colors hover:text-primary/80"
              >
                ALPHA Education
              </SmartLink>
              {"'"}s mandate, we are an independent student organization, the largest student initiative in
              HKU, formed by an installation size of 30 students to spread the message of peace and humanity.
              <br />
              <br />
              This is an initiative with great potential leading to a Global Institute of Peace and Humanity
              based in HK by 2027.
            </>
          }
        >
          <AnimatedFillButton
            href="/about-us/our-story"
            size="lg"
          >
            Explore Our Story
          </AnimatedFillButton>
        </PageHeader>
      </section>
      <WhatsHappening
        events={[
          {
            title: "International Peace Conference for Youth",
            description: "First Quarter of 2026.",
            image: "/globe.svg",
            href: "/upcoming-event",
            ctaLabel: "More Details Coming Soon",
          },
        ]}
      />
    </>
  );
}
