"use client";

import { siteConfig } from "@/lib/config";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import { ModeToggle } from "@/components/features/theme/mode-toggle";
import { Menu } from "lucide-react";
import { FaLinkedin } from 'react-icons/fa';
import { SiGithub, SiInstagram } from "@icons-pack/react-simple-icons";
import Link from "next/link";
import Image from "next/image";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Button } from "@/components/ui/button";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about-us", label: "About Us" },
  { href: "/event", label: "Event" },
  { href: "/blog", label: "Blog" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Collapsible asChild onOpenChange={setIsOpen}>
      <div className="sticky top-0 z-[var(--z-header)]">
        <header className="w-full border-b border-border/40 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="container flex h-16 max-w-screen-2xl items-center justify-between px-4 md:px-6">
            <div className="flex items-center gap-6">
              <Link href="/" className="flex items-center gap-2">
                <Image src="/next.svg" alt="Logo" width={60} height={24} className="dark:invert" />
                <span className="font-semibold">ALPHA HKU</span>
              </Link>
              <nav className="hidden md:flex items-center gap-6 text-sm">
                <NavigationMenu>
                  <NavigationMenuList>
                    {navLinks.map((link) => (
                      <NavigationMenuItem key={link.href}>
                        <NavigationMenuLink asChild>
                          <Link href={link.href}>{link.label}</Link>
                        </NavigationMenuLink>
                      </NavigationMenuItem>
                    ))}
                  </NavigationMenuList>
                </NavigationMenu>
              </nav>
            </div>

            <div className="flex items-center gap-4 text-sm">
              <a href={siteConfig.donate} className="hidden sm:block">Donate Now</a>
              <a href="/join-us" className="hidden sm:block">Join Us</a>
              <a href={`mailto:${siteConfig.email}`} className="hidden sm:block">Contact Us</a>
              <a href={siteConfig.github} target="_blank" rel="noopener" aria-label="GitHub">
                <SiGithub size={18} />
              </a>
              <a href={siteConfig.instagram} target="_blank" rel="noopener" aria-label="Instagram">
                <SiInstagram size={18} />
              </a>
              <a href={siteConfig.linkedin} target="_blank" rel="noopener" aria-label="LinkedIn">
                <FaLinkedin size={18} />
              </a>
              <ModeToggle />
              <CollapsibleTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </CollapsibleTrigger>
            </div>
          </div>
        </header>
        <AnimatePresence>
          {isOpen && (
            <CollapsibleContent asChild forceMount>
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="border-b border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
                  <div className="container px-4 md:px-6 py-4">
                    <nav className="grid gap-4 text-sm">
                      {navLinks.map((link) => (
                        <Link key={link.href} href={link.href} className="hover:text-foreground/80">
                          {link.label}
                        </Link>
                      ))}
                      <Link href={siteConfig.donate} className="hover:text-foreground/80">Donate Now</Link>
                      <Link href="/join-us" className="hover:text-foreground/80">Join Us</Link>
                      <a href={`mailto:${siteConfig.email}`} className="hover:text-foreground/80">Contact Us</a>
                    </nav>
                  </div>
                </div>
              </motion.div>
            </CollapsibleContent>
          )}
        </AnimatePresence>
      </div>
    </Collapsible>
  )
}
