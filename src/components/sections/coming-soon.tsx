import { PageHeader } from "@/components/primitives/page-header";
import { Construction } from "lucide-react";

export const comingSoonText = "We're working hard to bring you this page. Stay tuned for something amazing!";

export function ComingSoon({ title }: { title?: string }) {
  const heading = title ? `${title} is Coming Soon!` : "Coming Soon!"; // Make each "Coming Soon" page unique
  return (
    <div className="flex min-h-[calc(100vh-8rem)] flex-col items-center justify-center px-4 text-center">
      <Construction className="text-primary mb-4 h-16 w-16" />
      <PageHeader
        title={heading}
        description={comingSoonText}
        descriptionClassName="mt-2 max-w-md"
      />
    </div>
  );
}
