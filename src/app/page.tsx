import { Metadata } from "next";
import { Hero } from "@/components/sections/hero";
import { FeaturedProgram } from "@/components/sections/featured-program";
import { WhoWeAre } from "@/components/sections/who-we-are";
import { WhatsHappening } from "@/components/sections/whats-happening";

const title = "Home - ALPHA HKU";
const description = "Welcome to the official website for the ALPHA University Chapter at the University of Hong Kong.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    images: [
      {
        url: "/ALPHA-HKU.png",
        width: 882,
        height: 802,
        alt: title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/ALPHA-HKU.png"],
  },
};

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-start gap-8 md:gap-16">
      <Hero />
      <FeaturedProgram />
      <WhoWeAre />
      <WhatsHappening />
    </main>
  );
}
