import { Button } from "@/components/ui/button";
import Link from "next/link";

export function WhoWeAre() {
  return (
    <section>
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Who We Are</h2>
        <p className="max-w-3xl mx-auto text-muted-foreground mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
          et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <Button asChild>
          <Link href="#placeholder">Explore Our Story</Link>
        </Button>
      </div>
    </section>
  );
}
