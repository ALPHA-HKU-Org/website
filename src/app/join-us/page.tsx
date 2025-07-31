import { Metadata } from "next";
import { ComingSoon } from "@/components/sections/coming-soon";

const title = "Join Us";
const description = "Join the ALPHA Chapter at the University of Hong Kong.";

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

export default function JoinUs() {
  return (
    <main className="flex flex-col items-center justify-start gap-8 md:gap-16">
      <ComingSoon />
    </main>
  );
}
