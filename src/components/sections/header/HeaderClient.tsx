"use client";

import { ModeToggle } from "@/components/primitives/mode-toggle";
import { SocialLinks } from "@/components/primitives/social-links";
import { Button } from "@/components/ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Menu } from "lucide-react";
import { useState, type ReactNode } from "react";

export function HeaderClient({
  desktopNav,
  mobileNav,
}: {
  desktopNav: ReactNode;
  mobileNav: ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);

  // Close the mobile nav when clicking on a link.
  // Originally, onClick listeners were put to every single anchor tag in the mobile nav
  // but it pollutes the server-client boundary and hence break a lot of
  // static site generation logic.
  function handleMobileNavClick(clickEvent: React.MouseEvent<HTMLDivElement>): void {
    const clickedElement: HTMLElement = clickEvent.target as HTMLElement;
    const nearestAnchor: HTMLAnchorElement | null = clickedElement.closest(
      "a"
    ) as HTMLAnchorElement | null;

    // check if the element with this event handler is the parent of the clicked element
    if (nearestAnchor && clickEvent.currentTarget.contains(nearestAnchor)) {
      setIsOpen(false);
    }
  }

  return (
    <Collapsible
      asChild
      open={isOpen}
      onOpenChange={setIsOpen}
    >
      <div className="sticky top-0 z-(--z-header)">
        <header className="w-full border-b border-border/40 bg-background/80 backdrop-blur supports-backdrop-filter:bg-background/60">
          <div className="container flex h-(--header-height) max-w-full items-center justify-between px-4 lg:px-6">
            {desktopNav}

            <div className="flex items-center gap-4 text-sm">
              <SocialLinks
                variant="header"
                className="hidden items-center gap-4 lg:flex"
              />
              <ModeToggle />
              <CollapsibleTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="lg:hidden"
                >
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </CollapsibleTrigger>
            </div>
          </div>
        </header>

        <CollapsibleContent
          asChild
          className="absolute right-0 left-0 overflow-hidden data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down"
        >
          <div onClick={handleMobileNavClick}>{mobileNav}</div>
        </CollapsibleContent>
      </div>
    </Collapsible>
  );
}
