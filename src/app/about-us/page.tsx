import { Metadata } from "next";
import { ComingSoon, comingSoonText } from "@/components/sections/coming-soon";
import { buildPageMetadata } from "@/lib/config";

const description = comingSoonText;
export const metadata: Metadata = buildPageMetadata("/about-us", { description });

export default function AboutUs() {
  return (
    <>
      <ComingSoon />
    </>
  );
}
