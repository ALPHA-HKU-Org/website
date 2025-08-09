import { Metadata } from "next";
import { Hero } from "@/components/sections/hero";
import { FeaturedProgram } from "@/components/sections/featured-program";
import { WhoWeAre } from "@/components/sections/who-we-are";
import { WhatsHappening } from "@/components/sections/whats-happening";
import { siteConfig } from "@/lib/config";

const title = "Home - ALPHA HKU";
const description =
  "Welcome to the official website for the ALPHA University Chapter at the University of Hong Kong.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    images: [
      {
        url: siteConfig.seoImage,
        width: siteConfig.seoImageWidth,
        height: siteConfig.seoImageHeight,
        alt: title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [siteConfig.seoImage],
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedProgram />
      <WhoWeAre />
      <WhatsHappening />
    </>
  );
}
