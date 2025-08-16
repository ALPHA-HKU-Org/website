import { Metadata } from "next";
import { buildPageMetadata } from "@/lib/config";
import { AnimatedFillButton } from "@/components/primitives/animated-fill-button";
import { siteConfig } from "@/lib/config";

const description =
  "Join The Team at ALPHA University Chapter at HKU, an initiative with great potential.";
export const metadata: Metadata = buildPageMetadata("/join-us", { description });

export default function JoinUs() {
  return (
    <section className="flex min-h-[60vh] flex-col items-center justify-center gap-6 text-center">
      <h1 className="max-w-4xl text-2xl font-bold tracking-tight md:text-4xl">
        Join The Team at ALPHA University Chapter at HKU, an initiative with great potential.
      </h1>
      <p className="text-base text-muted-foreground md:text-lg">
        We provide opportunities for:
      </p>
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
