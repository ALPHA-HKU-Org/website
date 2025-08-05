import { Metadata } from "next";
import { ComingSoon } from "@/components/sections/coming-soon";
import { siteConfig } from "@/lib/config";

const title = "Events";
const description = "Find out about upcoming events from the ALPHA Chapter at the University of Hong Kong.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    images: [
      {
        url: siteConfig.seoImage,
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
    images: [siteConfig.seoImage],
  },
};

export default function Events() {
  return (
    <>
      <ComingSoon />
    </>
  );
}
