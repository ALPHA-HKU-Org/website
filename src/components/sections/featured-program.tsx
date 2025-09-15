import { AnimatedFillButton } from "@/components/primitives/animated-fill-button";
import { Card } from "@/components/ui/card";
import Image from "next/image";

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
    <section className="container mx-auto">
      <Card className="border-primary/35 hover:border-primary pr-8 pl-8 transition-all">
        <div className="grid items-center gap-8 md:grid-cols-5 md:gap-0">
          <div className="space-y-4 md:col-span-3">
            <h2 className="text-3xl font-bold">{heading}</h2>
            <p className="text-muted-foreground">{description}</p>
            {ctaHref && ctaLabel ? <AnimatedFillButton href={ctaHref}>{ctaLabel}</AnimatedFillButton> : null}
          </div>
          <div className="relative aspect-video overflow-hidden rounded-lg md:col-span-2">
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
              />
            )}
          </div>
        </div>
      </Card>
    </section>
  );
}
