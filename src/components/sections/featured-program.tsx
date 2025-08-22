import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

type FeaturedProgramProps = {
  heading: string;
  description: string;
  mediaSrc: string;
  mediaAlt?: string;
  isVideo?: boolean;
  ctaHref: string;
  ctaLabel?: string;
};

export function FeaturedProgram({
  heading,
  description,
  mediaSrc,
  mediaAlt,
  isVideo = false,
  ctaHref,
  ctaLabel = "Learn More",
}: FeaturedProgramProps) {
  return (
    <section>
      <div className="container mx-auto px-4">
        <Card className="border-primary/35 hover:border-primary p-8 transition-all">
          <div className="grid items-center gap-8 md:grid-cols-2">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold">{heading}</h2>
              <p className="text-muted-foreground">{description}</p>
              {ctaHref && ctaLabel ? (
                <Button asChild>
                  <Link href={ctaHref}>{ctaLabel}</Link>
                </Button>
              ) : null}
            </div>
            <div>
              <div className="bg-muted relative aspect-video overflow-hidden rounded-lg">
                {isVideo ? (
                  <video
                    src={mediaSrc}
                    controls
                    className="h-full w-full object-contain"
                  />
                ) : (
                  <Image
                    src={mediaSrc}
                    alt={mediaAlt ?? heading}
                    fill
                    className="object-contain"
                    sizes="(min-width: 768px) 50vw, 100vw"
                  />
                )}
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
