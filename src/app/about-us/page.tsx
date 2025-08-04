import { Metadata } from "next";
import { ComingSoon } from "@/components/sections/coming-soon";

const title = "About Us";
const description = "Learn more about the ALPHA Chapter at the University of Hong Kong.";

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

export default function AboutUs() {
  return (
    <>
      <ComingSoon />
    </>
  );
}
