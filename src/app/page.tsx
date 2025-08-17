import { Metadata } from "next";
import { Hero } from "@/components/sections/hero";
import { FeaturedProgram } from "@/components/sections/featured-program";
import { WhoWeAre } from "@/components/sections/who-we-are";
import { WhatsHappening } from "@/components/sections/whats-happening";
import { buildPageMetadata } from "@/lib/config";
import { description } from "@/app/layout";

export const metadata: Metadata = buildPageMetadata("/", { description, title: "Home - ALPHA HKU" });

export default function Home() {
  return (
    <>
      <Hero
        slides={[
          {
            imageSrc: "/home/Pond Lilies by the Law Faculty.webp",
            text: "Next generation voices for peace.",
          },
          {
            imageSrc: "/home/Main Building 4.webp",
            text: "ALPHA University Chapter at the University of Hong Kong.",
          },
        ]}
        heightClassName="h-[30rem]"
      />
      <FeaturedProgram
        heading="Featured Program"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        mediaSrc="/favicon/android-chrome-512x512.png"
        mediaAlt="ALPHA HKU Icon"
        isVideo={false}
        ctaHref="/upcoming-event"
        ctaLabel="Learn More About This Program"
      />
      <WhoWeAre />
      <WhatsHappening
        events={[
          {
            title: "Event 1",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            image: "/file.svg",
            href: "/upcoming-event",
            ctaLabel: "Magis Cognoscere",
          },
          {
            title: "Event 2",
            description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            image: "/globe.svg",
            href: "/upcoming-event",
            ctaLabel: "Plura Lege",
          },
          {
            title: "Event 3",
            description:
              "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            image: "/window.svg",
            href: "/upcoming-event",
            ctaLabel: "Explorare Porro",
          },
        ]}
      />
    </>
  );
}
