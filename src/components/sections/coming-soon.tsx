import { Construction } from "lucide-react";
import { PageHeader } from "@/components/primitives/page-header";

export const comingSoonText = "We're working hard to bring you this page. Stay tuned for something amazing!";

export function ComingSoon() {
  return (
    <div className="flex min-h-[calc(100vh-8rem)] flex-col items-center justify-center px-4 text-center">
      <Construction className="text-primary mb-4 h-16 w-16" />
      <PageHeader
        title="Coming Soon!"
        description={comingSoonText}
        descriptionClassName="mt-2 max-w-md"
      />
    </div>
  );
}
