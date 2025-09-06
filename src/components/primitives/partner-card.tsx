import { SmartLink } from "@/components/primitives/smart-link";
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
        <CardDescription>
          <SmartLink
            href={partner.href}
            className="hover:underline"
          >
            {partner.href}
          </SmartLink>
        </CardDescription>
      </CardHeader>
      <CardContent className="max-w-[27ch] text-left">{partner.description}</CardContent>
    </Card>
  );
}
