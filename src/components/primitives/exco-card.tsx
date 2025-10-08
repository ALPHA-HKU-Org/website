"use client";

import { SmartLink } from "@/components/primitives/smart-link";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import type { ExcoLink, ExcoMember } from "@/lib/exco";
import { cn } from "@/lib/utils";
import { SiGithub, SiInstagram } from "@icons-pack/react-simple-icons";
import { Globe, Mail } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function SocialIcon({ link }: { link: ExcoLink }) {
  const common = "h-4 w-4";
  switch (link.type) {
    case "email":
      return <Mail className={common} />;
    case "github":
      return <SiGithub size={16} />;
    case "instagram":
      return <SiInstagram size={16} />;
    case "linkedin":
      return <FaLinkedin size={16} />;
    case "website":
      return <Globe className={common} />;
    case "x":
      return <FaXTwitter size={16} />;
    default:
      return null;
  }
}

type ExcoCardProps = {
  member: ExcoMember;
  className?: string;
};

export function ExcoCard({ member, className }: ExcoCardProps) {
  const hasPhoto = !!member.photoSrc;
  const [isFlipped, setIsFlipped] = useState(false);

  const containerHeightClass = hasPhoto ? "h-56" : "h-32";
  const flipActiveClass = isFlipped ? "[transform:rotateY(180deg)]" : "";
  return (
    <div
      className={cn("group cursor-pointer select-none", "[perspective:1000px]", className)}
      role="button"
      tabIndex={0}
      onClick={() => setIsFlipped((v) => !v)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          setIsFlipped((v) => !v);
        }
      }}
    >
      <div
        className={cn(
          "relative w-full transition-transform duration-500 [transform-style:preserve-3d]", // innerBase
          "group-hover:[transform:rotateY(180deg)]", // innerHover
          flipActiveClass,
          containerHeightClass
        )}
      >
        <FrontFace member={member} />
        <BackFace member={member} />
      </div>
    </div>
  );
}

function FrontFace({ member }: { member: ExcoMember }) {
  const hasPhoto = !!member.photoSrc;
  return (
    <Card className="absolute inset-0 [backface-visibility:hidden]">
      <div className="flex h-full w-full flex-col items-center justify-center p-4 text-center">
        {hasPhoto ? (
          <div className="relative mx-auto h-16 w-16 overflow-hidden rounded-full ring-1 ring-border">
            <Image
              src={member.photoSrc as string}
              alt={`${member.name} photo`}
              fill
              sizes="64px"
              className="object-cover"
            />
          </div>
        ) : null}
        <CardTitle className="mt-1">{member.name}</CardTitle>
        <CardDescription>{member.position}</CardDescription>
      </div>
    </Card>
  );
}

function BackFace({ member }: { member: ExcoMember }) {
  const hasBio = !!member.bio;
  const hasLinks = !!(member.links && member.links.length > 0);
  return (
    <Card className="absolute inset-0 [transform:rotateY(180deg)] [backface-visibility:hidden]">
      <div className="mr-1 ml-1 flex h-full flex-col items-center text-center">
        {!hasBio && !hasLinks ? (
          <p className="m-auto text-muted-foreground">More info coming soon</p>
        ) : (
          <div className="flex w-full flex-1 flex-col items-center justify-center gap-2">
            {hasBio ? (
              <div className="w-full">
                <CardHeader>
                  <CardDescription>{member.bio}</CardDescription>
                </CardHeader>
              </div>
            ) : null}
            {hasLinks ? (
              <div className={cn("flex items-center justify-center gap-3", { "m-auto": !hasBio })}>
                {member.links!.map((link) => (
                  <SmartLink
                    key={`${member.name}-${link.type}-${link.url}`}
                    href={link.type === "email" ? `mailto:${link.url}` : link.url}
                    target={link.type === "email" ? undefined : "_blank"}
                    rel={link.type === "email" ? undefined : "noopener"}
                    aria-label={link.type}
                    className="text-muted-foreground hover:text-foreground"
                    onClick={(e) => e.stopPropagation()}
                    onTouchStart={(e) => e.stopPropagation()}
                  >
                    <SocialIcon link={link} />
                  </SmartLink>
                ))}
              </div>
            ) : null}
          </div>
        )}
      </div>
    </Card>
  );
}
