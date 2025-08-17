"use client";

import { useState } from "react";
import Image from "next/image";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import type { ExcoMember, ExcoLink } from "@/lib/exco";
import { cn } from "@/lib/utils";
import { Mail, Globe } from "lucide-react";
import { SiGithub, SiInstagram } from "@icons-pack/react-simple-icons";
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
      <div className="h-full w-full flex flex-col items-center justify-center text-center p-4">
        {hasPhoto ? (
          <div className="relative h-16 w-16 mx-auto rounded-full overflow-hidden ring-1 ring-border">
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
      <div className="h-full flex flex-col items-center text-center ml-1 mr-1">
        {!hasBio && !hasLinks ? (
          <p className="m-auto text-muted-foreground">More info coming soon</p>
        ) : (
          <>
            {hasBio ? (
              <div className="w-full pt-2">
                <CardHeader>
                  <CardDescription>{member.bio}</CardDescription>
                </CardHeader>
              </div>
            ) : null}
            {hasLinks ? (
              <div className="flex items-center justify-center gap-3">
                {member.links!.map((link) => (
                  <a
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
                  </a>
                ))}
              </div>
            ) : null}
          </>
        )}
      </div>
    </Card>
  );
}
