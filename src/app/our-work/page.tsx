import { Metadata } from "next";
import { ComingSoon } from "@/components/sections/coming-soon";
import { siteConfig } from "@/lib/config";

const title = "Our Work";
const description =
  "Discover the projects and initiatives by the ALPHA Chapter at the University of Hong Kong.";

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

export default function OurWork() {
  return (
    <>
      <ComingSoon />
    </>
  );
}
