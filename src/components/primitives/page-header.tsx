import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type PageHeaderProps = {
  title: ReactNode;
  description?: ReactNode;
  as?: "h1" | "h2" | "h3";
  size?: "sm" | "md" | "lg";
  className?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  childrenClassName?: string;
  children?: ReactNode;
};

export function PageHeader({
  title,
  description,
  as = "h1",
  size = "md",
  className,
  titleClassName,
  descriptionClassName,
  childrenClassName,
  children,
}: PageHeaderProps) {
  const HeadingTag = as;
  const sizeStyles = {
    sm: { title: "text-3xl", description: "text-base" },
    md: { title: "text-4xl", description: "text-lg" },
    lg: { title: "text-5xl", description: "text-xl" },
  } as const;
  return (
    <div className={cn("text-center", className)}>
      <HeadingTag className={cn(sizeStyles[size].title, "font-bold", titleClassName)}>{title}</HeadingTag>
      {description ? (
        <p
          className={cn(
            "mt-4 text-muted-foreground max-w-3xl mx-auto",
            sizeStyles[size].description,
            descriptionClassName
          )}
        >
          {description}
        </p>
      ) : null}
      {children ? <div className={cn("mt-6", childrenClassName)}>{children}</div> : null}
    </div>
  );
}
