import { Instagram, Mail } from "lucide-react";
import Link from "next/link";

const mainLinks = [
  { href: "/", label: "Home" },
  { href: "/about-us", label: "About Us" },
  { href: "/our-team", label: "Our Team" },
];

const secondaryLinks = [
  { href: "/events", label: "Events" },
  { href: "/blog", label: "Blog" },
  { href: "/join-us", label: "Join Us" },
];

export function Footer() {
  return (
    <footer className="w-full py-12 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
          <div className="space-y-4">
            <h3 className="font-semibold">ALPHA HKU</h3>
            <p className="text-sm text-muted-foreground">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="font-semibold">Sitemap</h3>
              <ul className="space-y-2">
                {mainLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm hover:underline text-muted-foreground">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="font-semibold invisible">.</h3>
              <ul className="space-y-2">
                {secondaryLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm hover:underline text-muted-foreground">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="font-semibold">Connect with us!</h3>
            <div className="flex flex-col items-center md:items-start gap-2">
              <a href="mailto:alphahku1213@gmail.com" className="inline-flex items-center gap-2 text-sm hover:underline text-muted-foreground">
                <Mail size={18} />
                alphahku1213@gmail.com
              </a>
              <a href="https://www.instagram.com/alpha.hku" target="_blank" rel="noopener" className="inline-flex items-center gap-2 hover:underline text-muted-foreground">
                <Instagram size={18} />
                Instagram
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-border/40 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} ALPHA University Chapter at HKU. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
