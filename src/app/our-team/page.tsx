import { Metadata } from "next";
import { ComingSoon } from "@/components/coming-soon";

export const metadata: Metadata = {
  title: "Our Team",
  description: "Meet the team behind the Alpha Chapter at the University of Hong Kong.",
  openGraph: {
    title: "Our Team",
    description: "Meet the team behind the Alpha Chapter at the University of Hong Kong.",
    images: [
      {
        url: "/placeholder.png",
        width: 1200,
        height: 630,
        alt: "Our Team",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Team",
    description: "Meet the team behind the Alpha Chapter at the University of Hong Kong.",
    images: ["/placeholder.png"],
  },
};

export default function OurTeam() {
  return (
    <main className="flex flex-col items-center justify-start gap-8 md:gap-16">
      <ComingSoon />
    </main>
  );
}