import { AnimatedFillButton } from "@/components/primitives/animated-fill-button";
import { PageHeader } from "@/components/primitives/page-header";
import SmartLink from "@/components/primitives/smart-link";
import { buildPageMetadata, siteConfig } from "@/lib/config";
import { findJobBySlug, jobs } from "@/lib/jobs";
import type { Job } from "@/lib/jobs";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return jobs.map((j) => ({ slug: j.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const job = findJobBySlug(slug);
  if (!job) return buildPageMetadata("/join-us");
  return buildPageMetadata(`/join-us/${job.slug}`, {
    title: job.name,
    description: `Join us as ${job.name}`,
  });
}

function BenefitsSection({ benefits }: { benefits: Job["benefits"] }) {
  return (
    <>
      <h2 className="text-xl font-semibold">Benefits</h2>
      <ul className="mt-3 list-disc pl-6 space-y-2">
        {benefits.map((benefit, index) => (
          <li key={`${benefit.text}-${index}`}>
            <p>{benefit.text}</p>
            {benefit.subPoints && benefit.subPoints.length > 0 ? (
              <ul className="mt-2 list-[circle] pl-6 space-y-1">
                {benefit.subPoints.map((point, index) => (
                  <li key={`${point}-${index}`}>{point}</li>
                ))}
              </ul>
            ) : null}
          </li>
        ))}
      </ul>
    </>
  );
}

function ApplyCta({ applyUrl }: { applyUrl: Job["applyUrl"] }) {
  if (!applyUrl) {
    return (
      <p className="text-muted-foreground">
        Please contact us at{" "}
        <SmartLink
          href={`mailto:${siteConfig.email}`}
          className="text-primary hover:underline"
        >
          {siteConfig.email}
        </SmartLink>{" "}
        for more information.
      </p>
    );
  }
  return (
    <AnimatedFillButton
      href={applyUrl}
      size="lg"
    >
      Apply Now
    </AnimatedFillButton>
  );
}

function FootnotesSection({ footnotes }: { footnotes?: Job["footnotes"] }) {
  if (!footnotes || footnotes.length === 0) {
    return null;
  }
  return (
    <div className="border-t pt-4 text-sm text-muted-foreground">
      <h3 className="mb-2 font-medium">Notes</h3>
      <ul className="space-y-1">
        {footnotes.map((note, index) => (
          <li key={`${note.marker}-${index}`}>
            <span className="mr-1">{note.marker}</span>
            <span>{note.text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default async function JoinUsJobPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const job = findJobBySlug(slug);
  if (!job) return notFound();

  return (
    <section className="mx-auto max-w-3xl space-y-6">
      <PageHeader title={job.name + " Opportunity"}>
        <PageHeader
          as="h2"
          title="Suitable for"
          titleClassName="text-xl font-semibold"
          className="text-left"
          descriptionClassName="text-left"
          description={job.suitableFor}
        />
      </PageHeader>
      <BenefitsSection benefits={job.benefits} />
      <PageHeader
        as="h2"
        title="How to Join"
        titleClassName="text-xl font-semibold"
        className="text-left"
        description={job.howToJoin}
        size="sm"
      />
      <ApplyCta applyUrl={job.applyUrl} />
      <FootnotesSection footnotes={job.footnotes} />
    </section>
  );
}
