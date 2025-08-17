import Image from "next/image";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import type { Partner } from "@/lib/partners";
import { cn } from "@/lib/utils";

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
            <div className="relative w-16 h-16 mx-auto">
              <Image
                src={partner.logo}
                alt={`${partner.name} logo`}
                fill
                className="object-contain"
                unoptimized
              />
            </div>
          )}
          <CardTitle>{partner.name}</CardTitle>
          <CardDescription>{partner.description}</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">{partner.href}</p>
        </CardContent>
      </Card>
    </a>
  );
}
