"use client";

import { ModeToggle } from "@/components/primitives/mode-toggle";
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
import { isInternalHref } from "@/lib/utils";
import { SiGithub, SiInstagram } from "@icons-pack/react-simple-icons";
import { AnimatePresence, motion } from "framer-motion";
import { Mail, Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, type ReactNode } from "react";
import { FaLinkedin } from "react-icons/fa";

function NavAnchor({ href, className, children }: { href: string; className?: string; children: ReactNode }) {
  return isInternalHref(href) ? (
    <Link
      href={href}
      className={className}
    >
      {children}
    </Link>
  ) : (
    <a
      href={href}
      className={className}
    >
      {children}
    </a>
  );
}

type NavItem = (typeof siteConfig.mainNav)[number];

function DesktopMenuItem({ link, onTriggerClick }: { link: NavItem; onTriggerClick: () => void }) {
  const hasChildren = !!link.children?.length;
  if (!hasChildren) {
    return (
      <NavigationMenuLink asChild>
        <NavAnchor href={link.href}>{link.label}</NavAnchor>
      </NavigationMenuLink>
    );
  }
  return (
    <>
      <NavigationMenuTrigger
        className="bg-transparent p-2 font-normal"
        onClick={onTriggerClick}
      >
        {link.label}
      </NavigationMenuTrigger>
      <NavigationMenuContent>
        <div className="w-28">
          {link.children!.map((child) => (
            <NavigationMenuLink
              key={child.href}
              asChild
            >
              <NavAnchor href={child.href}>{child.label}</NavAnchor>
            </NavigationMenuLink>
          ))}
        </div>
      </NavigationMenuContent>
    </>
  );
}

function MobileMenuGroup({ link }: { link: NavItem }) {
  return (
    <>
      <NavAnchor
        href={link.href}
        className="hover:text-foreground/80"
      >
        {link.label}
      </NavAnchor>
      {link.children && link.children.length > 0 && (
        <div className="ml-4 grid gap-2">
          {link.children.map((child) => (
            <NavAnchor
              key={child.href}
              href={child.href}
              className="hover:text-foreground/80"
            >
              {child.label}
            </NavAnchor>
          ))}
        </div>
      )}
    </>
  );
}
export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  return (
    <Collapsible
      asChild
      onOpenChange={setIsOpen}
    >
      <div className="sticky top-0 z-[var(--z-header)]">
        <header className="border-border/40 bg-background/80 supports-[backdrop-filter]:bg-background/60 w-full border-b backdrop-blur">
          <div
            className={`container flex h-[var(--header-height)] max-w-full items-center justify-between px-4 lg:px-6`}
          >
            <div className="flex items-center gap-6">
              <Link
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
              </Link>
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
                <a
                  href={siteConfig.github}
                  target="_blank"
                  rel="noopener"
                  aria-label="GitHub"
                >
                  <SiGithub size={18} />
                </a>
                <a
                  href={siteConfig.instagram}
                  target="_blank"
                  rel="noopener"
                  aria-label="Instagram"
                >
                  <SiInstagram size={18} />
                </a>
                <a
                  href={siteConfig.linkedin}
                  target="_blank"
                  rel="noopener"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin size={18} />
                </a>
                <a
                  href={`mailto:${siteConfig.email}`}
                  aria-label="Email"
                >
                  <Mail size={18} />
                </a>
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
        <AnimatePresence>
          {isOpen && (
            <CollapsibleContent
              asChild
              forceMount
            >
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="absolute right-0 left-0 overflow-hidden"
              >
                <div className="bg-background/95 supports-[backdrop-filter]:bg-background/80 border-t border-b backdrop-blur">
                  <div className="container px-4 py-4 lg:px-6">
                    <nav className="grid gap-4 text-sm">
                      {siteConfig.mainNav.map((link) => (
                        <div
                          key={link.href}
                          className="grid gap-4"
                        >
                          <MobileMenuGroup link={link} />
                        </div>
                      ))}
                    </nav>
                  </div>
                </div>
              </motion.div>
            </CollapsibleContent>
          )}
        </AnimatePresence>
      </div>
    </Collapsible>
  );
}
