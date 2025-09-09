import { ExcoCard } from "@/components/primitives/exco-card";
import { PageHeader } from "@/components/primitives/page-header";
import { buildPageMetadata } from "@/lib/config";
import { excoMembers } from "@/lib/exco";
import { Metadata } from "next";
import Image from "next/image";

const description = "Meet the team leading ALPHA HKU.";
export const metadata: Metadata = buildPageMetadata("/about-us/exco", { description });

export default function ExecutiveCommittee() {
  return (
    <section className="container mx-auto px-4">
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
      <PageHeader
        title="Organization Structure"
        as="h2"
        size="sm"
        className="mt-10"
      >
        <Image
          src="/about-us/exco/organization-structure.svg"
          alt="Organization Structure Chart"
          width={4953}
          height={3993}
          className="dark:invert"
        />
      </PageHeader>
    </section>
  );
}
