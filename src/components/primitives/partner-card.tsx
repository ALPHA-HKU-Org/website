import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import type { Partner } from "@/lib/partners";
import { cn } from "@/lib/utils";
import Image from "next/image";

type PartnerCardProps = {
  partner: Partner;
  className?: string;
};

export function PartnerCard({ partner, className }: PartnerCardProps) {
  return (
    <a
      href={partner.href}
      target="_blank"
      rel="noopener"
    >
      <Card className={cn("h-full", className)}>
        <CardHeader className="text-center">
          {partner.logo && (
            <div className="relative mx-auto h-16 w-16">
              <Image
                src={partner.logo}
                alt={`${partner.name} logo`}
                fill
                className="object-contain"
              />
            </div>
          )}
          <CardTitle>{partner.name}</CardTitle>
          <CardDescription>{partner.description}</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground text-sm">{partner.href}</p>
        </CardContent>
      </Card>
    </a>
  );
}
