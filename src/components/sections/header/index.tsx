"use client";

import { ModeToggle } from "@/components/primitives/mode-toggle";
import { SocialLinks } from "@/components/primitives/social-links";
import { Button } from "@/components/ui/button";
import { Collapsible, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Menu } from "lucide-react";
import { useState } from "react";
import { DesktopNav } from "./DesktopNav";
import { MobileNav } from "./MobileNav";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const handleCloseMenu = () => setIsOpen(false);

  return (
    <Collapsible
      asChild
      open={isOpen}
      onOpenChange={setIsOpen}
    >
      <div className="sticky top-0 z-[var(--z-header)]">
        <header className="w-full border-b border-border/40 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="container flex h-[var(--header-height)] max-w-full items-center justify-between px-4 lg:px-6">
            <DesktopNav />

            {/* Social media icons and theme toggle on the right side of the header */}
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

        {/* This component is only visible on mobile */}
        <MobileNav onLinkClick={handleCloseMenu} />
      </div>
    </Collapsible>
  );
}
