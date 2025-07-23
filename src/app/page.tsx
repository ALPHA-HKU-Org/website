import { Metadata } from "next";
import { Hero } from "@/components/hero";
import { FeaturedProgram } from "@/components/featured-program";
import { WhoWeAre } from "@/components/who-we-are";
import { WhatsHappening } from "@/components/whats-happening";

export const metadata: Metadata = {
  title: "Home",
  description: "Welcome to the official website for the Alpha Chapter at the University of Hong Kong.",
  openGraph: {
    title: "Home",
    description: "Welcome to the official website for the Alpha Chapter at the University of Hong Kong.",
    images: [
      {
        url: "/og-home.png",
        width: 800,
        height: 600,
        alt: "Alpha HKU Home Page",
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
