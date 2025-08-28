import { SmartLink } from "@/components/primitives/smart-link";
import { Button } from "@/components/ui/button";
import type { ReactNode } from "react";

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
      className="from-primary to-primary text-primary hover:text-primary-foreground rounded-full bg-gradient-to-r bg-[length:0%_100%] bg-no-repeat transition-[background-size,color] duration-300 hover:bg-[length:100%_100%]"
    >
      <SmartLink href={href}>{children}</SmartLink>
    </Button>
  );
}
