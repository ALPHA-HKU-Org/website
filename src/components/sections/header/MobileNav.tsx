"use client";

import { SmartLink } from "@/components/primitives/smart-link";
import { CollapsibleContent } from "@/components/ui/collapsible";
import { siteConfig } from "@/lib/config";

type NavItem = (typeof siteConfig.mainNav)[number];

/**
 * Mobile-only group that renders a top-level link and optional children.
 *
 * @param link Top-level nav item to render.
 * @param onLinkClick Invoked when any link is clicked;
 */
function MobileMenuGroup({ link, onLinkClick }: { link: NavItem; onLinkClick: () => void }) {
  return (
    <>
      <SmartLink
        href={link.href}
        className="hover:text-foreground/80"
        onClick={onLinkClick}
      >
        {link.label}
      </SmartLink>
      {link.children && link.children.length > 0 && (
        <div className="ml-4 grid gap-2">
          {link.children.map((child) => (
            <SmartLink
              key={child.href}
              href={child.href}
              className="hover:text-foreground/80"
              onClick={onLinkClick}
            >
              {child.label}
            </SmartLink>
          ))}
        </div>
      )}
    </>
  );
}

export function MobileNav({ onLinkClick }: { onLinkClick: () => void }) {
  return (
    <CollapsibleContent
      asChild
      className="absolute right-0 left-0 overflow-hidden data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down"
    >
      <nav className="grid gap-4 border-b border-b-border/40 bg-background/95 px-4 py-4 text-sm backdrop-blur supports-backdrop-filter:bg-background/80 lg:px-6">
        {siteConfig.mainNav.map((link) => (
          <div
            key={link.href}
            className="grid gap-4"
          >
            <MobileMenuGroup
              link={link}
              onLinkClick={onLinkClick}
            />
          </div>
        ))}
      </nav>
    </CollapsibleContent>
  );
}
