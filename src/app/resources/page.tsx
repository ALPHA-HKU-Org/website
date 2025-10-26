import { PageHeader } from "@/components/primitives/page-header";
import { ResourceIframe } from "@/components/sections/resource-iframe";
import { buildPageMetadata } from "@/lib/config";
import { resources } from "@/lib/data/resources";
import { Metadata } from "next";

const description =
  "Following are the collections of websites donated by experts and students who have published their research through online media, which share unique yet often overlooked perspectives of WW2 in Asia.";
export const metadata: Metadata = buildPageMetadata("/resources", { description });

export default function Resources() {
  return (
    <section>
      <PageHeader
        title="Resource"
        descriptionClassName="text-left"
        description={
          <>
            {description}
            <br />
            <br />
            ALPHA-HKU hereby extends our heartfelt gratitude for the author's generosity and we
            invite all of you to browse through the websites for new insights of the human stories
            during WW2 in Asia.
          </>
        }
        className="mb-8"
      />
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
    </section>
  );
}
