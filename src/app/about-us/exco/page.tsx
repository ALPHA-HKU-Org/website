import { ExcoCard } from "@/components/primitives/exco-card";
import { PageHeader } from "@/components/primitives/page-header";
import { buildPageMetadata } from "@/lib/config";
import { excoMembers } from "@/lib/exco";
import { Metadata } from "next";

const description = "Meet the team leading ALPHA HKU.";
export const metadata: Metadata = buildPageMetadata("/about-us/exco", { description });

export default function ExecutiveCommittee() {
  return (
    <div className="container mx-auto px-4 pt-8">
      <PageHeader
        title="Executive Committee"
        description={`${description} Hover a card to learn more.`}
        className="mb-8"
      />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {excoMembers.map((member) => (
          <ExcoCard
            key={`${member.name}-${member.position}`}
            member={member}
          />
        ))}
      </div>
    </div>
  );
}
