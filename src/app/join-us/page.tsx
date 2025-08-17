import { Metadata } from "next";
import { buildPageMetadata } from "@/lib/config";
import { AnimatedFillButton } from "@/components/primitives/animated-fill-button";
import { siteConfig } from "@/lib/config";
import { PageHeader } from "@/components/primitives/page-header";

const description =
  "Join The Team at ALPHA University Chapter at the University of Hong Kong, an initiative with great potential.";
export const metadata: Metadata = buildPageMetadata("/join-us", { description });

export default function JoinUs() {
  return (
    <section className="pt-8 flex flex-col items-center gap-4 text-center m-auto w-fit">
      <PageHeader
        title="Join The Team at ALPHA University Chapter at the University of Hong Kong, an initiative with great potential."
        description="We provide opportunities for:"
        titleClassName="max-w-4xl mx-auto text-2xl md:text-4xl"
        descriptionClassName="text-base md:text-lg"
      />
      <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
        {[
          { label: "Full Membership", href: "" },
          { label: "Research Fellowship", href: "" },
          { label: "Officers", href: "" },
        ].map((item) => (
          <AnimatedFillButton
            href={item.href}
            key={item.label}
          >
            {item.label}
          </AnimatedFillButton>
        ))}
      </div>
      <p className="text-sm text-muted-foreground md:text-base pt-3">
        For more information, contact us at{" "}
        <a
          href={`mailto:${siteConfig.email}`}
          className="text-primary hover:underline"
        >
          {siteConfig.email}
        </a>
        .
      </p>
    </section>
  );
}
