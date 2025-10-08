import { cn } from "@/lib/utils";

export function NewsBanner({ children }: { children: React.ReactNode }) {
  return (
    <p
      className={cn(
        "border-b border-amber-500/20 bg-amber-500/10 py-2 dark:border-amber-500/30 dark:bg-amber-500/5",
        "text-center text-sm text-amber-900 dark:text-amber-100" // text styles
      )}
    >
      {children}
    </p>
  );
}
