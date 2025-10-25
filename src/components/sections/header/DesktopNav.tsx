"use client";

import { SmartLink } from "@/components/primitives/smart-link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { siteConfig } from "@/lib/config";
import Image from "next/image";
import { useRouter } from "next/navigation";

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
  // Pop up submenu on hover, which shows subpages
  return (
    <>
      <NavigationMenuTrigger
        className="bg-transparent p-2 font-normal" // shadcn trigger overrides defaults to font-medium, inconsistent with page wide default font-normal
        onClick={onTriggerClick}
      >
        {link.label}
      </NavigationMenuTrigger>
      <NavigationMenuContent
        className="border-none! shadow shadow-muted-foreground dark:shadow-popover"
        /**
         * In dark mode, light shadow looks weird with great contrast from background
         * since shadcn uses popover for background, which global.css defined differently as background,
         * we could use that.
         */
      >
        <div className="w-max">
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

export function DesktopNav() {
  const router = useRouter();

  return (
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
          priority
          fetchPriority="high"
          className="aspect-auto h-11 w-auto dark:invert"
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
  );
}
