import { Button } from "@/components/ui/button";
import Link from "next/link";
import { siteConfig } from "@/lib/config";
import { PageHeader } from "@/components/primitives/page-header";

export function WhoWeAre() {
  return (
    <section className="mx-auto text-center">
      <PageHeader
        as="h2"
        title="Who We Are"
        size="sm"
        description={
          <>
            Carrying{" "}
            <a
              href={siteConfig.parentOrg}
              target="_blank"
              rel="noopener"
              className="text-primary hover:text-primary/80 underline transition-colors"
            >
              ALPHA Education
            </a>
            {"'"}s mandate, we are an independent student organization, the largest student initiative in HKU,
            formed by an installation size of 30 students to spread the message of peace and humanity.
            <br />
            <br />
            This is an initiative with great potential leading to a Global Institute of Peace and Humanity
            based in HK by 2027.
          </>
        }
      >
        <Button asChild>
          <Link href="/about-us">Explore Our Story</Link>
        </Button>
      </PageHeader>
    </section>
  );
}
