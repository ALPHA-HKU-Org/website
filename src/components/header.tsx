"use client";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import { ModeToggle } from "./mode-toggle"
import { Instagram, Menu } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Button } from "./ui/button";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about-us", label: "About Us" },
  { href: "/our-team", label: "Our Team" },
  { href: "/events", label: "Events" },
  { href: "/blog", label: "Blog" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Collapsible asChild onOpenChange={setIsOpen}>
      <div>
        <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
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
              <a href="/join-us" className="hidden sm:block">Join Us</a>
              <a href="/contact-us" className="hidden sm:block">Contact Us</a>
              <a href="https://www.instagram.com/alpha.hku" target="_blank" rel="noopener" aria-label="Instagram">
                <Instagram size={18} />
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
                <div className="border-b border-t bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                  <div className="container px-4 md:px-6 py-4">
                    <nav className="grid gap-4 text-sm">
                      {navLinks.map((link) => (
                        <Link key={link.href} href={link.href} className="hover:text-foreground/80">
                          {link.label}
                        </Link>
                      ))}
                      <Link href="/join-us" className="hover:text-foreground/80">Join Us</Link>
                      <Link href="/contact-us" className="hover:text-foreground/80">Contact Us</Link>
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
