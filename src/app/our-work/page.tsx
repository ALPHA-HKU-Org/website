import { ComingSoon, comingSoonText } from "@/components/sections/coming-soon";
import { buildPageMetadata } from "@/lib/config";
import { Metadata } from "next";

const description = comingSoonText;
export const metadata: Metadata = buildPageMetadata("/our-work", { description });

export default function OurWork() {
  return (
    <>
      <ComingSoon />
    </>
  );
}
