import { PageHeader } from "@/components/primitives/page-header";
import { PartnerCard } from "@/components/primitives/partner-card";
import { buildPageMetadata } from "@/lib/config";
import { partners } from "@/lib/partners";
import { Metadata } from "next";

const description =
  "We are collaborating with the following partners to share the message of peace and humanity.";
export const metadata: Metadata = buildPageMetadata("/about-us/partners", { description });

export default function Partners() {
  return (
    <div className="m-auto flex w-fit flex-col items-center justify-center gap-4 pt-8 text-center">
      <PageHeader
        title="Partners"
        descriptionClassName="max-w-2xl"
        description={description}
      />
      <div className="mt-6 flex w-full flex-col items-center gap-4">
        {partners.map((partner) => (
          <PartnerCard
            key={partner.name}
            partner={partner}
          />
        ))}
      </div>
    </div>
  );
}
