import { SmartLink } from "@/components/primitives/smart-link";
import type { NavItem } from "@/lib/config";

/**
 * Mobile-only group that renders a top-level link and optional children.
 *
 * @param link Top-level nav item to render.
 * @param onLinkClick Invoked when any link is clicked;
 */
function MobileMenuGroup({ link }: { link: NavItem }) {
  return (
    <>
      <SmartLink
        href={link.href}
        className="hover:text-foreground/80"
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
            >
              {child.label}
            </SmartLink>
          ))}
        </div>
      )}
    </>
  );
}

export function MobileNav({ mainNav }: { mainNav: NavItem[] }) {
  return (
    <nav className="grid gap-4 border-b border-b-border/40 bg-background/95 px-4 py-4 text-sm backdrop-blur supports-backdrop-filter:bg-background/80 lg:px-6">
      {mainNav.map((link: NavItem) => (
        <div
          key={link.href}
          className="grid gap-4"
        >
          <MobileMenuGroup link={link} />
        </div>
      ))}
    </nav>
  );
}
