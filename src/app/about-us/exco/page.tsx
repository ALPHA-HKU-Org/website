import { Metadata } from "next";
import { buildPageMetadata } from "@/lib/config";
import { PageHeader } from "@/components/primitives/page-header";
import { ExcoCard } from "@/components/primitives/exco-card";
import { excoMembers } from "@/lib/exco";

const description = "Meet the team leading ALPHA HKU.";
export const metadata: Metadata = buildPageMetadata("/about-us/exco", { description });

export default function ExecutiveCommittee() {
  return (
    <section>
      <div className="container mx-auto p-4">
        <PageHeader
          title="Executive Committee"
          description={`${description} Hover a card to learn more.`}
          className="mb-8"
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {excoMembers.map((member) => (
            <ExcoCard
              key={`${member.name}-${member.position}`}
              member={member}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
