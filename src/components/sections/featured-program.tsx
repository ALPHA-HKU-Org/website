import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";

export function FeaturedProgram() {
  return (
    <section>
      <div className="container mx-auto px-4">
        <Card className="p-8 border-primary/35 hover:border-primary transition-all">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold">Featured Program</h2>
              <p className="text-muted-foreground">
                This is a description of the featured program. It highlights a key initiative and invites
                users to learn more.
              </p>
              <Button asChild>
                <Link href="#placeholder">Learn More</Link>
              </Button>
            </div>
            <div>
              <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                <p className="text-muted-foreground">Embedded Video</p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
