"use client";

// Will be imported by client components
import { isInternalHref } from "@/lib/utils";
import Link from "next/link";
import { forwardRef, type AnchorHTMLAttributes, type ReactNode } from "react";

type SmartLinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
  href: string; // mark href as required for strict validation
  children: ReactNode;
};

export const SmartLink = forwardRef<HTMLAnchorElement, SmartLinkProps>(function SmartLink(
  { href, children, className, target, rel, ...rest },
  ref
) {
  const isInternal = isInternalHref(href);

  if (isInternal) {
    return (
      <Link
        href={href}
        className={className}
        ref={ref}
        {...rest}
      >
        {children}
      </Link>
    );
  }

  const computedTarget = target ?? "_blank";
  // I like referrers; +rep for marketing people
  const computedRel = rel ?? (computedTarget === "_blank" ? "noopener" : undefined);

  return (
    <a
      href={href}
      className={className}
      target={computedTarget}
      rel={computedRel}
      ref={ref}
      {...rest}
    >
      {children}
    </a>
  );
});

export default SmartLink;
