import { Metadata } from "next";
import { Hero } from "@/components/hero";
import { FeaturedProgram } from "@/components/featured-program";
import { WhoWeAre } from "@/components/who-we-are";
import { WhatsHappening } from "@/components/whats-happening";

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
        url: "/og-home.png",
        width: 800,
        height: 600,
        alt: "ALPHA HKU Home Page",
      },
    ],
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
