import type { ReactNode } from "react";
import { Button } from "@/components/ui/button";

type AnimatedFillButtonProps = {
  href: string;
  children: ReactNode;
};

export function AnimatedFillButton({ href, children }: AnimatedFillButtonProps) {
  return (
    <Button
      asChild
      variant="outline"
      size="lg"
      className="rounded-full bg-gradient-to-r from-primary to-primary bg-no-repeat bg-[length:0%_100%] text-primary transition-[background-size,color] duration-300 hover:bg-[length:100%_100%] hover:text-primary-foreground"
    >
      <a
        href={href}
        target="_blank"
        rel="noopener"
      >
        {children}
      </a>
    </Button>
  );
}
