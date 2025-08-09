"use client";

import { siteConfig } from "@/lib/config";
import { isInternalHref } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { ModeToggle } from "@/components/features/theme/mode-toggle";
import { Menu, Mail } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";
import { SiGithub, SiInstagram } from "@icons-pack/react-simple-icons";
import Link from "next/link";
import Image from "next/image";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Button } from "@/components/ui/button";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Collapsible
      asChild
      onOpenChange={setIsOpen}
    >
      <div className="sticky top-0 z-[var(--z-header)]">
        <header className="w-full border-b border-border/40 bg-background/60 backdrop-blur supports-[backdrop-filter]:bg-background/40">
          <div className="container flex h-16 max-w-full items-center justify-between px-4 lg:px-6">
            <div className="flex items-center gap-6">
              <Link
                href="/"
                className="flex items-center gap-2"
              >
                <Image
                  src="/next.svg"
                  alt="Logo"
                  width={60}
                  height={24}
                  className="dark:invert"
                />
                <span className="font-semibold">ALPHA HKU</span>
              </Link>
              <nav className="hidden lg:flex items-center gap-6 text-sm">
                <NavigationMenu>
                  <NavigationMenuList>
                    {siteConfig.mainNav.map((link) => (
                      <NavigationMenuItem key={link.href}>
                        <NavigationMenuLink asChild>
                          {isInternalHref(link.href) ? (
                            <Link href={link.href}>{link.label}</Link>
                          ) : (
                            <a href={link.href}>{link.label}</a>
                          )}
                        </NavigationMenuLink>
                      </NavigationMenuItem>
                    ))}
                  </NavigationMenuList>
                </NavigationMenu>
              </nav>
            </div>

            <div className="flex items-center gap-4 text-sm">
              <div className="hidden lg:flex items-center gap-4">
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
                className="overflow-hidden"
              >
                <div className="border-b border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
                  <div className="container px-4 lg:px-6 py-4">
                    <nav className="grid gap-4 text-sm">
                      {siteConfig.mainNav.map((link) =>
                        isInternalHref(link.href) ? (
                          <Link
                            key={link.href}
                            href={link.href}
                            className="hover:text-foreground/80"
                          >
                            {link.label}
                          </Link>
                        ) : (
                          <a
                            key={link.href}
                            href={link.href}
                            className="hover:text-foreground/80"
                          >
                            {link.label}
                          </a>
                        )
                      )}
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
