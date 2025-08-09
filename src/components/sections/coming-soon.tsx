import { Construction } from "lucide-react";

export const comingSoonText = "We're working hard to bring you this page. Stay tuned for something amazing!";

export function ComingSoon() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-8rem)] text-center px-4">
      <Construction className="h-16 w-16 mb-4 text-primary" />
      <h1 className="text-4xl font-bold mb-2">Coming Soon!</h1>
      <p className="text-lg text-muted-foreground max-w-md">{comingSoonText}</p>
    </div>
  );
}
