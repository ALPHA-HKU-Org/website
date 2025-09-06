import { isInternalHref } from "@/lib/utils";
import Link from "next/link";
import { forwardRef, type AnchorHTMLAttributes, type ReactNode } from "react";

type SmartLinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
  href: string; // mark href as required for strict validation
  children: ReactNode;
};

/**
 * In next.js, <Link> is used for internal links (SPA).
 * <a> is used for external links.
 * Using <Link> for external links will add an redundant JS event handler.
 * Puristist wise, we should use <a> for external links.
 */
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
  // Let other server owners see traffic coming from us!
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
