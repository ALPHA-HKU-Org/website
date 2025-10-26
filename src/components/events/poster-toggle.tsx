"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useMemo, useState } from "react";

type PosterToggleProps = {
  posters: {
    code: string;
    label: string;
    src: string;
  }[];
  initialLanguageCode: string;
  alt: string;
  className?: string;
};

export function PosterToggle({ posters, initialLanguageCode, alt, className }: PosterToggleProps) {
  // Re-render the poster image when user clicks the language button
  const [selectedLanguageCode, setSelectedLanguageCode] = useState<string>(initialLanguageCode);

  const selectedPoster = useMemo(
    () => posters.find((poster) => poster.code === selectedLanguageCode),
    [posters, selectedLanguageCode]
  );

  if (!selectedPoster) {
    throw new Error("Poster Toggle: initialLanguageCode does not match any provided posters.");
  }

  return (
    <div className={cn("space-y-3", className)}>
      <div className="space-x-3">
        {posters.map((poster) => (
          <Button
            key={poster.code}
            type="button"
            variant={selectedLanguageCode === poster.code ? "default" : "outline"} // Default: turn background color to primary
            size="sm"
            onClick={() => setSelectedLanguageCode(poster.code)}
            aria-pressed={selectedLanguageCode === poster.code}
          >
            {poster.label}
          </Button>
        ))}
      </div>

      {/* Full size image: https://stackoverflow.com/a/76008677/14278613 */}
      <Image
        src={selectedPoster.src}
        alt={alt}
        width={0}
        height={0}
        sizes="100vw"
        className="h-auto w-full rounded-sm"
      />
    </div>
  );
}
