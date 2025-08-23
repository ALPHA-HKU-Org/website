import { ResourceIframe } from "@/components/sections/resource-iframe";
import { buildPageMetadata } from "@/lib/config";
import { resources } from "@/lib/resources";
import { Metadata } from "next";

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
        {resources.map((r) => (
          <ResourceIframe
            key={r.slug}
            title={r.title}
            websiteUrl={r.websiteUrl}
            hideTopPx={r.hideTopPx}
            fullPageHref={`/resources/${r.slug}`}
            authorLine={r.authorLine}
          />
        ))}
      </div>
    </div>
  );
}
