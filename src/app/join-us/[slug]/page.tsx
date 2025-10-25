import { AnimatedFillButton } from "@/components/primitives/animated-fill-button";
import { PageHeader } from "@/components/primitives/page-header";
import SmartLink from "@/components/primitives/smart-link";
import { buildPageMetadata, siteConfig } from "@/lib/config";
import { getJobs } from "@/lib/jobs.server";
import type { MDXComponents } from "mdx/types";
import { type Metadata } from "next";

export async function generateStaticParams() {
  const jobs = await getJobs();
  return jobs.map((job) => ({ slug: job.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const jobs = await getJobs();
  const job = jobs.find((j) => j.slug === slug);
  if (!job) return buildPageMetadata("/join-us");
  return buildPageMetadata(`/join-us/${job.slug}`, {
    title: job.name,
    description: `Join us as ${job.name}`,
  });
}

function ApplyCta({ applyUrl }: { applyUrl: string | undefined }) {
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

const mdxOverrides: MDXComponents = {
  h1: ({ children }) => <PageHeader title={children} />,
  h2: ({ children }) => (
    <PageHeader
      title={children}
      as="h2"
      className="text-left"
      titleClassName="text-xl font-semibold"
    />
  ),
  ul: (props) => (
    <ul
      {...props}
      className="mt-3 list-disc space-y-2 pl-6"
    />
  ),
  a: ({ href = "", children, ...rest }) => (
    <SmartLink
      href={href}
      {...rest}
      className="text-primary hover:underline"
    >
      {children}
    </SmartLink>
  ),
};

export default async function JoinUsJobPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const { default: Post, frontmatter } = await import(`@/content/join-us/${slug}.mdx`);
  return (
    <section className="mx-auto max-w-3xl space-y-6">
      <PageHeader title={`${frontmatter.name} Opportunity`} />
      <Post components={mdxOverrides} />
      <ApplyCta applyUrl={frontmatter.applyUrl} />
    </section>
  );
}

export const dynamicParams = false;
