import { Metadata } from "next";
import Image from "next/image";
import { buildPageMetadata } from "@/lib/config";
import { partners } from "@/lib/partners";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { PageHeader } from "@/components/primitives/page-header";

const description =
  "We are collaborating with the following partners to share the message of peace and humanity.";
export const metadata: Metadata = buildPageMetadata("/about-us/partners", { description });

export default function Partners() {
  return (
    <section className="flex min-h-[85vh] flex-col items-center justify-center gap-4 text-center m-auto w-fit">
      <PageHeader
        title="Partners"
        descriptionClassName="max-w-2xl"
        description={description}
      />
      <div className="mt-6 flex flex-col items-center gap-4 w-full">
        {partners.map((partner) => (
          <a
            key={partner.name}
            href={partner.href}
            target="_blank"
            rel="noopener"
          >
            <Card className="h-full">
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
        ))}
      </div>
    </section>
  );
}
