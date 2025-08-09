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
      <Hero />
      <FeaturedProgram />
      <WhoWeAre />
      <WhatsHappening />
    </>
  );
}
