import { SmartLink } from "@/components/primitives/smart-link";
import { Button } from "@/components/ui/button";
import type { ReactNode } from "react";

type AnimatedFillButtonProps = {
  href: string;
  children: ReactNode;
  size?: React.ComponentProps<typeof Button>["size"];
};

export function AnimatedFillButton({ href, children, size }: AnimatedFillButtonProps) {
  return (
    <Button
      asChild
      variant="outline"
      size={size}
      className="rounded-full bg-linear-to-r from-primary to-primary bg-size-[0%_100%] bg-no-repeat text-primary transition-[background-size,color] duration-300 hover:bg-size-[100%_100%] hover:text-primary-foreground"
    >
      <SmartLink href={href}>{children}</SmartLink>
    </Button>
  );
}
