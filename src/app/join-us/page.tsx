import { Metadata } from "next";
import { ComingSoon, comingSoonText } from "@/components/sections/coming-soon";
import { buildPageMetadata } from "@/lib/config";

const description = comingSoonText;
export const metadata: Metadata = buildPageMetadata("/join-us", { description });

export default function JoinUs() {
  return (
    <>
      <ComingSoon />
    </>
  );
}
