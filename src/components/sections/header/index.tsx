import type { NavItem } from "@/lib/config";
import { DesktopNav } from "./DesktopNav";
import { HeaderClient } from "./HeaderClient";
import { MobileNav } from "./MobileNav";

export function Header({ mainNav }: { mainNav: NavItem[] }) {
  return (
    <HeaderClient
      desktopNav={<DesktopNav mainNav={mainNav} />}
      mobileNav={<MobileNav mainNav={mainNav} />}
    />
  );
}
