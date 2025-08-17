import { Button } from "@/components/ui/button";
import Link from "next/link";
import { siteConfig } from "@/lib/config";

export function WhoWeAre() {
  return (
    <section className="mx-auto text-center">
      <h2 className="text-3xl font-bold mb-4">Who We Are</h2>
      <p className="max-w-3xl mx-auto text-muted-foreground mb-6">
        Carrying{" "}
        <a
          href={siteConfig.parentOrg}
          target="_blank"
          rel="noopener"
          className="text-primary hover:text-primary/80 underline transition-colors"
        >
          ALPHA Education
        </a>
        's mandate, we are an independent student organization, the largest student initiative in HKU, formed
        by an installation size of 30 students to spread the message of peace and humanity.
        <br />
        <br />
        This is an initiative with great potential leading to a Global Institute of Peace and Humanity based
        in HK by 2027.
      </p>
      <Button asChild>
        <Link href="/about-us">Explore Our Story</Link>
      </Button>
    </section>
  );
}
