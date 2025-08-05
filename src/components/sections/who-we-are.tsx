import { Button } from "@/components/ui/button";
import Link from "next/link";

export function WhoWeAre() {
  return (
    <section className="container mx-auto px-4 text-center">
      <h2 className="text-3xl font-bold mb-4">Who We Are</h2>
      <p className="max-w-3xl mx-auto text-muted-foreground mb-6">
        We are the largest student initiative leading to a Global Peace Institute based in Hong Kong by 2027,
        with{" "}
        <a
          href="https://www.alphaeducation.org"
          target="_blank"
          rel="noopener"
          className="text-primary hover:text-primary/80 underline transition-colors"
        >
          ALPHA Education
        </a>
        's mandate.
      </p>
      <Button asChild>
        <Link href="/about-us">Explore Our Story</Link>
      </Button>
    </section>
  );
}
