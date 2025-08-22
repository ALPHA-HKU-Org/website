import { Metadata } from "next";
import { ResourceIframe } from "@/components/sections/resource-iframe";
import { buildPageMetadata } from "@/lib/config";

const description =
  "Find useful resources and materials from the ALPHA Chapter at the University of Hong Kong.";
export const metadata: Metadata = buildPageMetadata("/resources", { description });

export default function Resources() {
  return (
    <div className="max-w-8xl mx-auto w-full px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-8 text-center">
        <p className="text-muted-foreground text-lg">
          Here are some recommended websites. They offer more details and different perspectives on our
          chapter's topics.
        </p>
      </div>
      <div className="space-y-8">
        <ResourceIframe
          title="Where She Stood - WWII"
          websiteUrl="https://whereshestoodwwii.wixsite.com/where-she-stood"
          hideTopPx={50}
        />
        <ResourceIframe
          title="The Spine of the Nation"
          websiteUrl="https://thespineofthenation.wordpress.com"
          hideTopPx={49}
        />
      </div>
    </div>
  );
}
