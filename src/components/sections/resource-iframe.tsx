"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn, noReturnDebounce } from "@/lib/utils";
import { CSSProperties, RefObject, useCallback, useEffect, useRef, useState } from "react";

const IFRAME_DEFAULTS = {
  WIDTH: 1440,
  HEIGHT: 600,
} as const;

function calculateResponsiveScale(containerWidth: number, sourceWidth: number): number {
  if (!containerWidth || !sourceWidth) return 1;
  return Math.min(containerWidth / sourceWidth, 1);
}

function createScaleTransformStyle(scale: number, hideTopPx: number = 0) {
  const computedTopOffset = Math.max(0, hideTopPx) * scale;
  const height = hideTopPx > 0 ? `calc(${100 / scale}% + ${hideTopPx}px)` : `${100 / scale}%`;

  return {
    transform: `scale(${scale})`,
    transformOrigin: "top left",
    width: `${100 / scale}%`,
    height,
    position: "relative" as const,
    top: hideTopPx > 0 ? `-${computedTopOffset}px` : undefined,
  };
}

/**
 * A hook to calculate the responsive scale of an element based on its container's width.
 */
function useResponsiveScale(targetRef: RefObject<HTMLElement | null>, sourceWidth: number): number {
  const [scale, setScale] = useState(1);

  const updateScale = useCallback(() => {
    if (!targetRef.current) return;
    const newScale = calculateResponsiveScale(targetRef.current.clientWidth, sourceWidth);
    setScale(newScale);
  }, [targetRef, sourceWidth]);

  useEffect(() => {
    updateScale();
    const debouncedUpdate = noReturnDebounce(updateScale);
    window.addEventListener("resize", debouncedUpdate);
    return () => window.removeEventListener("resize", debouncedUpdate);
  }, [updateScale]);

  return scale;
}

type ResourceIframeProps = {
  websiteUrl: string;
  title: string;
  className?: string;
  scale?: number;
  desktopWidth?: number;
  /** Can be a number (px) or CSS height string (e.g. "100dvh"). */
  containerHeight?: number | CSSProperties["height"];
  /** Number of pixels to hide from the top of the iframe content (pre-scale units). */
  hideTopPx?: number;
  /** Internal link to a full-page view. If provided, the header button links here instead of external site. */
  fullPageHref?: string;
  /** If true, omits the header (useful for full-page variant). */
  hideHeader?: boolean;
  /** If true, shows the iframe on mobile as well (not just md+). */
  showOnMobile?: boolean;
  /** Optional small text line to display the author information. */
  authorLine?: string;
};

export function ResourceIframe({
  websiteUrl,
  title,
  className,
  scale: forcedScale,
  desktopWidth = IFRAME_DEFAULTS.WIDTH,
  containerHeight = IFRAME_DEFAULTS.HEIGHT,
  hideTopPx = 0,
  fullPageHref,
  hideHeader = false,
  showOnMobile = false,
  authorLine,
}: ResourceIframeProps) {
  const [isLoading, setIsLoading] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const calculatedScale = useResponsiveScale(containerRef, desktopWidth);

  const finalScale = forcedScale ?? calculatedScale;
  const scaleWrapperStyle = createScaleTransformStyle(finalScale, hideTopPx);
  const linkHref = fullPageHref ?? websiteUrl;
  const isExternal = !fullPageHref;
  const buttonLabel = isExternal ? "Open Original Site →" : "Open Full Page →";

  return (
    <Card className={cn("w-full gap-0 md:gap-6", hideHeader && "rounded-none border-0 p-0", className)}>
      {!hideHeader && (
        <CardHeader>
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-col">
              <CardTitle>{title}</CardTitle>
              {authorLine && <span className="mt-2 text-muted-foreground text-xs">by {authorLine}</span>}
              <a
                href={websiteUrl}
                target="_blank"
                rel="noopener"
                className="text-muted-foreground text-xs underline underline-offset-4"
              >
                {websiteUrl}
              </a>
            </div>
            <Button
              asChild
              variant="outline"
            >
              <a
                href={linkHref}
                target={isExternal ? "_blank" : undefined}
                rel="noopener"
              >
                {buttonLabel}
              </a>
            </Button>
          </div>
        </CardHeader>
      )}
      <CardContent className={cn(hideHeader && "p-0")}>
        <div
          ref={containerRef}
          className={cn(
            "relative overflow-hidden",
            !showOnMobile && "hidden md:block",
            hideHeader ? "rounded-none border-0" : "rounded-lg border"
          )}
          style={{ height: containerHeight }}
        >
          {isLoading && (
            <div className="bg-muted absolute inset-0 flex items-center justify-center">
              <p className="text-muted-foreground">Loading website...</p>
            </div>
          )}
          <div
            className="h-full w-full"
            style={scaleWrapperStyle}
          >
            <iframe
              src={websiteUrl}
              title={title}
              allowFullScreen
              className="h-full w-full border-0"
              onLoad={() => setIsLoading(false)}
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
