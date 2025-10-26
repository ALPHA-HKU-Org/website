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
              descriptionClassName="text-left text-white pl-4 pr-4"
              description={
                <>
                  Inspired by an internship in ALPHA Education in the summer of 2025, the Founding
                  Committee of ALPHA-HKU were deeply inspired by the groundbreaking progress HK
                  immigrants over 3 generations have achieved on the opposite side of the globe,
                  regarding the promotion of Asian's overlooked histories.
                  <br />
                  <br />
                  We have seen not only the importance of breaking the silence in achieving global
                  transitional justice for victims of war atrocities, but also, most importantly,
                  the possibility for our shared vision to come true - as far as ALPHA Education has
                  proceeded.
                  <br />
                  <br />
                  Immediately, the Founding Committee gathered and initiated the establishment of
                  ALPHA University Chapter at the University of Hong Kong, the first ever
                  international university chapter of ALPHA Education. From carrying ALPHA
                  Education's mandate, we are an independent student organization, the largest
                  student initiative in HKU, formed by an installation size of 30 students to spread
                  the message of peace and humanity.
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
              descriptionClassName="text-left text-white pl-4 pr-4"
              description={
                <>
                  We vow to strive tirelessly and continuously for excellence, to promote the
                  unsound history of WW2 in Asia and other war atrocities around the world. From
                  studying and promoting these overlooked suffering the people have endured, we aim
                  to obtain the theory for peace advocacy, particularly for youngsters, to break
                  through silence and make their voices heard amongst global decision-makers.
                  <br />
                  <br />
                  We represent the next generation's voices for peace!
                </>
              }
            />
          ),
        },
      ]}
      heightClassName="h-[calc(100vh-var(--header-height))]"
    />
  );
}
