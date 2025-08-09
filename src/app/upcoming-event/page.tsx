import { Metadata } from "next";
import { ComingSoon, comingSoonText } from "@/components/sections/coming-soon";
import { buildPageMetadata } from "@/lib/config";

const description = comingSoonText;
export const metadata: Metadata = buildPageMetadata("/upcoming-event", { description });

export default function Events() {
  return (
    <>
      <ComingSoon />
    </>
  );
}
