import { SmartLink } from "@/components/primitives/smart-link";
import { siteConfig } from "@/lib/config";
import { cn } from "@/lib/utils";
import { SiGithub, SiInstagram } from "@icons-pack/react-simple-icons";
import { Mail } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";

const sitemapLinks = [...siteConfig.mainNav, ...siteConfig.utilityNav];
const baseTextLinkClass = "text-sm hover:underline text-muted-foreground";

export function Footer() {
  return (
    <footer className="bg-muted w-full py-12">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="mx-auto max-w-4xl">
          <div className="grid gap-8 text-left md:grid-cols-2 md:justify-items-center">
            <div className="flex flex-col items-center space-y-4 md:items-start">
              <h3 className="font-semibold">Sitemap</h3>
              <ul className="grid grid-cols-2 gap-x-8 gap-y-2">
                {sitemapLinks.map((link) => (
                  <li key={link.href}>
                    <SmartLink
                      href={link.href}
                      className={baseTextLinkClass}
                    >
                      {link.label}
                    </SmartLink>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col items-center space-y-4">
              <h3 className="font-semibold">Connect with us!</h3>
              <div className="flex flex-col items-start gap-3">
                <SmartLink
                  href={`mailto:${siteConfig.email}`}
                  className={cn(baseTextLinkClass, "inline-flex items-center gap-2")}
                >
                  <Mail size={18} />
                  {siteConfig.email}
                </SmartLink>
                <SmartLink
                  href={siteConfig.instagram}
                  className={cn(baseTextLinkClass, "inline-flex items-center gap-2")}
                >
                  <SiInstagram size={18} />
                  Instagram
                </SmartLink>
                <SmartLink
                  href={siteConfig.github}
                  className={cn(baseTextLinkClass, "inline-flex items-center gap-2")}
                >
                  <SiGithub size={18} />
                  GitHub
                </SmartLink>
                <SmartLink
                  href={siteConfig.linkedin}
                  className={cn(baseTextLinkClass, "inline-flex items-center gap-2")}
                >
                  <FaLinkedin size={18} />
                  LinkedIn
                </SmartLink>
              </div>
            </div>
          </div>
          <div className="border-border/40 text-muted-foreground mt-8 border-t pt-8 text-center text-sm">
            © {new Date().getFullYear()} ALPHA University Chapter at the University of Hong Kong. All rights
            reserved.
            <br />
            <SmartLink
              href={siteConfig.parentOrg}
              className={cn(baseTextLinkClass, "inline-flex items-center gap-2 underline")}
            >
              {siteConfig.parentOrg.replace("https://", "")}
            </SmartLink>
          </div>
        </div>
      </div>
    </footer>
  );
}
