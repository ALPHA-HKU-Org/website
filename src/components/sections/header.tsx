"use client";

import { ModeToggle } from "@/components/primitives/mode-toggle";
import { SmartLink } from "@/components/primitives/smart-link";
import { Button } from "@/components/ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { siteConfig } from "@/lib/config";
import { SiGithub, SiInstagram } from "@icons-pack/react-simple-icons";
import { motion } from "framer-motion";
import { Mail, Menu } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaLinkedin } from "react-icons/fa";

type NavItem = (typeof siteConfig.mainNav)[number];

function DesktopMenuItem({ link, onTriggerClick }: { link: NavItem; onTriggerClick: () => void }) {
  const hasChildren = !!link.children?.length;
  if (!hasChildren) {
    return (
      <NavigationMenuLink asChild>
        <SmartLink href={link.href}>{link.label}</SmartLink>
      </NavigationMenuLink>
    );
  }
  return (
    <>
      <NavigationMenuTrigger
        className="bg-transparent p-2 font-normal" // shadcn trigger overrides defaults to font-medium, inconsistent with page wide default font-normal
        onClick={onTriggerClick}
      >
        {link.label}
      </NavigationMenuTrigger>
      <NavigationMenuContent
        className="!border-none shadow shadow-muted-foreground dark:shadow-popover"
        /**
         * In dark mode, light shadow looks weird with great contrast from background
         * since shadcn uses popover for background, which global.css defined differently as background,
         * we could use that.
         */
      >
        <div className="w-28">
          {link.children!.map((child) => (
            <NavigationMenuLink
              key={child.href}
              asChild
            >
              <SmartLink href={child.href}>{child.label}</SmartLink>
            </NavigationMenuLink>
          ))}
        </div>
      </NavigationMenuContent>
    </>
  );
}

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

export function Header() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const handleCloseMenu = () => setIsOpen(false);

  return (
    <Collapsible
      asChild
      open={isOpen}
      onOpenChange={setIsOpen}
    >
      <div className="sticky top-0 z-[var(--z-header)]">
        <header className="border-border/40 bg-background/80 supports-[backdrop-filter]:bg-background/60 w-full border-b backdrop-blur">
          <div className="container flex h-[var(--header-height)] max-w-full items-center justify-between px-4 lg:px-6">
            <div className="flex items-center gap-6">
              <SmartLink
                href="/"
                className="flex items-center gap-2"
              >
                <Image
                  src="/navigation-bar.webp"
                  alt="Logo"
                  width={173}
                  height={44}
                  unoptimized
                  className="dark:invert h-11 aspect-auto w-auto"
                />
              </SmartLink>
              <nav className="hidden lg:flex">
                <NavigationMenu viewport={false}>
                  <NavigationMenuList className="gap-0">
                    {siteConfig.mainNav.map((link) => (
                      <NavigationMenuItem key={link.href}>
                        <DesktopMenuItem
                          link={link}
                          onTriggerClick={() => router.push(link.href)}
                        />
                      </NavigationMenuItem>
                    ))}
                  </NavigationMenuList>
                </NavigationMenu>
              </nav>
            </div>

            <div className="flex items-center gap-4 text-sm">
              <div className="hidden items-center gap-4 lg:flex">
                <SmartLink
                  href={siteConfig.github}
                  aria-label="GitHub"
                >
                  <SiGithub size={18} />
                </SmartLink>
                <SmartLink
                  href={siteConfig.instagram}
                  aria-label="Instagram"
                >
                  <SiInstagram size={18} />
                </SmartLink>
                <SmartLink
                  href={siteConfig.linkedin}
                  aria-label="LinkedIn"
                >
                  <FaLinkedin size={18} />
                </SmartLink>
                <SmartLink
                  href={`mailto:${siteConfig.email}`}
                  aria-label="Email"
                >
                  <Mail size={18} />
                </SmartLink>
              </div>
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
          forceMount
        >
          <motion.div
            initial={false}
            animate={isOpen ? { opacity: 1, height: "auto" } : { opacity: 0, height: 0 }} // Closing must be animated to reduce SPA page navigation flash
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="absolute right-0 left-0 overflow-hidden"
          >
            <nav className="px-4 py-4 lg:px-6 bg-background/95 supports-[backdrop-filter]:bg-background/80 border-b border-b-border/40 backdrop-blur grid gap-4 text-sm">
              {siteConfig.mainNav.map((link) => (
                <div
                  key={link.href}
                  className="grid gap-4"
                >
                  <MobileMenuGroup
                    link={link}
                    onLinkClick={handleCloseMenu}
                  />
                </div>
              ))}
            </nav>
          </motion.div>
        </CollapsibleContent>
      </div>
    </Collapsible>
  );
}
