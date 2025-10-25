import { AnimatedFillButton } from "@/components/primitives/animated-fill-button";
import { PageHeader } from "@/components/primitives/page-header";
import { SmartLink } from "@/components/primitives/smart-link";
import { buildPageMetadata, siteConfig } from "@/lib/config";
import { getJobs } from "@/lib/jobs.server";
import { Metadata } from "next";

const description =
  "Join The Team at ALPHA University Chapter at the University of Hong Kong, an initiative with great potential.";
export const metadata: Metadata = buildPageMetadata("/join-us", { description });

export default async function JoinUs() {
  const jobs = await getJobs();
  return (
    <section className="m-auto flex flex-col gap-4 text-center">
      <PageHeader
        title={description}
        description="We provide opportunities for:"
        titleClassName="max-w-4xl mx-auto text-2xl md:text-4xl"
        descriptionClassName="text-base md:text-lg"
      />
      <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
        {jobs.map((job) => (
          <AnimatedFillButton
            href={`/join-us/${job.slug}`}
            size="lg"
            key={job.slug}
          >
            {job.name}
          </AnimatedFillButton>
        ))}
      </div>
      <p className="pt-3 text-sm text-muted-foreground md:text-base">
        For more information, contact us at{" "}
        <SmartLink
          href={`mailto:${siteConfig.email}`}
          className="text-primary hover:underline"
        >
          {siteConfig.email}
        </SmartLink>
        .
      </p>
    </section>
  );
}
