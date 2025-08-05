import { siteConfig } from "@/lib/config";
import { Mail } from "lucide-react";
import { SiGithub, SiInstagram } from "@icons-pack/react-simple-icons";
import { FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import { staticRoutes } from "@/app/sitemap";

const sitemapLinks = staticRoutes.map((route) => {
  if (route === "") {
    return { href: "/", label: "Home" };
  }
  const label = route.replace("/", "").replace("-", " ");
  return { href: route, label: label.charAt(0).toUpperCase() + label.slice(1) };
});

export function Footer() {
  return (
    <footer className="w-full py-12 bg-muted/60">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 text-center md:text-left md:justify-items-center">
            <div className="space-y-4 flex flex-col items-center md:items-start">
              <h3 className="font-semibold">Sitemap</h3>
              <ul className="grid grid-cols-2 gap-x-8 gap-y-2">
                {sitemapLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm hover:underline text-muted-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-4 flex flex-col items-center">
              <h3 className="font-semibold">Connect with us!</h3>
              <div className="flex flex-col items-center md:items-start gap-2">
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="inline-flex items-center gap-2 text-sm hover:underline text-muted-foreground"
                >
                  <Mail size={18} />
                  {siteConfig.email}
                </a>
                <a
                  href={siteConfig.instagram}
                  target="_blank"
                  rel="noopener"
                  className="inline-flex items-center gap-2 text-sm hover:underline text-muted-foreground"
                >
                  <SiInstagram size={18} />
                  Instagram
                </a>
                <a
                  href={siteConfig.github}
                  target="_blank"
                  rel="noopener"
                  className="inline-flex items-center gap-2 text-sm hover:underline text-muted-foreground"
                >
                  <SiGithub size={18} />
                  GitHub
                </a>
                <a
                  href={siteConfig.linkedin}
                  target="_blank"
                  rel="noopener"
                  className="inline-flex items-center gap-2 text-sm hover:underline text-muted-foreground"
                >
                  <FaLinkedin size={18} />
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-border/40 text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} ALPHA University Chapter at the University of Hong Kong. All rights
            reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
