import { SmartLink } from "@/components/primitives/smart-link";
import { siteConfig } from "@/lib/config";
import { SiGithub, SiInstagram } from "@icons-pack/react-simple-icons";
import { Mail } from "lucide-react";
import type { ComponentType } from "react";
import { FaLinkedin } from "react-icons/fa";

type SocialLink = {
  href: string;
  label: string;
  Icon: ComponentType<{ size?: number | string }>;
  showTextInFooter?: boolean;
};

const socialLinks: SocialLink[] = [
  {
    href: `mailto:${siteConfig.email}`,
    label: "Email",
    Icon: Mail,
    showTextInFooter: true,
  },
  {
    href: siteConfig.instagram,
    label: "Instagram",
    Icon: SiInstagram,
  },
  {
    href: siteConfig.linkedin,
    label: "LinkedIn",
    Icon: FaLinkedin,
  },
  {
    href: siteConfig.github,
    label: "GitHub",
    Icon: SiGithub,
  },
];

type SocialLinksProps = {
  variant?: "header" | "footer";
  className?: string;
  iconSize?: number;
  linkClassName?: string;
};

export function SocialLinks({
  variant = "header",
  className,
  iconSize = 18,
  linkClassName,
}: SocialLinksProps) {
  const isHeader = variant === "header";

  return (
    <div className={className}>
      {socialLinks.map(({ href, label, Icon, showTextInFooter }) => (
        <SmartLink
          key={href}
          href={href}
          aria-label={isHeader ? label : undefined}
          className={linkClassName}
        >
          {isHeader ? (
            <Icon size={iconSize} />
          ) : (
            <>
              <Icon size={iconSize} />
              {showTextInFooter && href.startsWith("mailto:") ? siteConfig.email : label}
            </>
          )}
        </SmartLink>
      ))}
    </div>
  );
}
