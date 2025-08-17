import { Metadata } from "next";
import { buildPageMetadata } from "@/lib/config";
import { partners } from "@/lib/partners";
import { PageHeader } from "@/components/primitives/page-header";
import { PartnerCard } from "@/components/primitives/partner-card";

const description =
  "We are collaborating with the following partners to share the message of peace and humanity.";
export const metadata: Metadata = buildPageMetadata("/about-us/partners", { description });

export default function Partners() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 text-center m-auto w-fit pt-8">
      <PageHeader
        title="Partners"
        descriptionClassName="max-w-2xl"
        description={description}
      />
      <div className="mt-6 flex flex-col items-center gap-4 w-full">
        {partners.map((partner) => (
          <PartnerCard
            key={partner.name}
            partner={partner}
          />
        ))}
      </div>
    </section>
  );
}
