"use client";

import { AnimatedFillButton } from "@/components/primitives/animated-fill-button";
import { SmartLink } from "@/components/primitives/smart-link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn, isInternalHref, noReturnDebounce } from "@/lib/utils";
import { CSSProperties, RefObject, useCallback, useEffect, useRef, useState } from "react";

/**
 * @todo Explain why we need this sophisticated iframe size calculation/CSS transform trickery.
 *
 * The reason is that the Wix website we are using is not truly responsive for iframe
 * scenarios. While the usual way to handle this is with CSS media queries, Wix uses a
 * User-Agent detection approach.
 *
 * So, when we embed it in an iframe (where the width is unknown and depends on the
 * margin/padding of its container, i.e., resource-iframe.tsx), the iframe's inner
 * content is not responsive when the frame is smaller than a certain pixel value.
 * e.g. DESKTOP screen + 500px width iframe -> broken
 *
 * For mobile screens, due to the hacky way Wix implements its layout (using absolute
 * pixel positioning like `left: 274px` instead of percentages), embedding it in an
 * iframe always results in gaps on the left and right. In other words, the elements
 * are not auto-scaled to fit the full iframe width.
 * e.g. MOBILE screen + full width iframe -> broken
 */
const IFRAME_SIZE = {
  /**
   * For Wix, mobile UA serves:
   * <div id="SITE_CONTAINER">
   * body.device-mobile-optimized:not(.responsive) #SITE_CONTAINER
   * width: 320px;
   * Hence MOBILE_WIDTH = 320.
   */
  MOBILE_WIDTH: 320,
  DESKTOP_WIDTH: 1338,
  /** DEFAULT_WIDTH = DESKTOP_WIDTH */
  DEFAULT_WIDTH: 1338,
  /** Non-fullscreen view iframe height in /resource page */
  HEIGHT: 600,
} as const;

/** Prefer UA detection when available; fallback to viewport width <= 640px. */
function getIsMobileNow(): boolean {
  if (typeof window === "undefined" || typeof navigator === "undefined") return false;
  // Wix uses UserAgent to detect mobile, so its better for us to stay consistent.
  const nav = navigator as Navigator & { userAgentData?: { mobile?: boolean }; maxTouchPoints?: number };
  if (typeof nav.userAgentData?.mobile === "boolean") {
    if (nav.userAgentData.mobile) return true;
  }

  const ua = navigator.userAgent || "";
  const isIpadOs =
    /iPad/i.test(ua) && (navigator as Navigator & { maxTouchPoints?: number }).maxTouchPoints! > 1;
  const isMobileUa = /Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini|Mobi/i.test(ua) && !isIpadOs;
  if (isMobileUa) return true;
  return window.innerWidth <= 640;
}

/**
 * Determine whether the client is mobile and update on user rotating/resize their screen.
 */
function useIsMobile(): boolean {
  const [isMobile, setIsMobile] = useState<boolean>(() => getIsMobileNow());

  useEffect(() => {
    const recompute = noReturnDebounce(() => {
      setIsMobile(getIsMobileNow());
    });
    window.addEventListener("resize", recompute);
    return () => window.removeEventListener("resize", recompute);
  }, []);

  return isMobile;
}

/** Resize the iframe zoom level to fit the container width to make it look normal */
function useResponsiveScale(targetRef: RefObject<HTMLElement | null>, sourceWidth: number): number {
  const [scale, setScale] = useState(1);

  const updateScale = useCallback(() => {
    if (!targetRef.current) return;
    setScale(targetRef.current.clientWidth && sourceWidth ? targetRef.current.clientWidth / sourceWidth : 1);
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
  containerHeight?: number | CSSProperties["height"];
  /** Adjust this to hide Wix/WordPress ad headers */
  hideTopPx?: number;
  /** We host the iframe fullscreen ourselves, so we can link to it */
  fullPageHref?: string;
  /** Useful for the full-page variant, which is just the iframe */
  hideHeader?: boolean;
  showOnMobile?: boolean;
  authorLine?: string;
};

export function ResourceIframe({
  websiteUrl,
  title,
  className,
  scale: forcedScale,
  desktopWidth = IFRAME_SIZE.DEFAULT_WIDTH,
  containerHeight = IFRAME_SIZE.HEIGHT,
  hideTopPx = 0,
  fullPageHref,
  hideHeader = false,
  showOnMobile = false,
  authorLine,
}: ResourceIframeProps) {
  const [isLoading, setIsLoading] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const isMobileClient = useIsMobile();
  const effectiveSourceWidth = isMobileClient ? IFRAME_SIZE.MOBILE_WIDTH : desktopWidth;
  const calculatedScale = useResponsiveScale(containerRef, effectiveSourceWidth);

  const finalScale = forcedScale ?? calculatedScale;
  const linkHref = fullPageHref ?? websiteUrl;
  const isInternalLink = isInternalHref(linkHref);
  const buttonLabel = isInternalLink ? "Open Full Page →" : "Open Original Site →";

  return (
    <Card className={cn("w-full gap-0 md:gap-4", hideHeader && "rounded-none border-0 p-0", className)}>
      {!hideHeader && (
        <CardHeader>
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-col">
              <CardTitle>{title}</CardTitle>
              {authorLine && <span className="text-muted-foreground mt-2 text-xs">by {authorLine}</span>}
              <SmartLink
                href={websiteUrl}
                className="text-muted-foreground text-xs break-all underline underline-offset-4"
              >
                {websiteUrl}
              </SmartLink>
            </div>
            <AnimatedFillButton
              href={linkHref}
              size="lg"
            >
              {buttonLabel}
            </AnimatedFillButton>
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
          <iframe
            src={websiteUrl}
            title={title}
            allowFullScreen
            loading="lazy"
            className="w-full border-0"
            style={{
              transform: `scale(${finalScale})`,
              transformOrigin: "top left",
              width: `${100 / finalScale}%`,
              height: hideTopPx > 0 ? `calc(${100 / finalScale}% + ${hideTopPx}px)` : `${100 / finalScale}%`,
              position: "relative" as const,
              top: hideTopPx > 0 ? `-${Math.max(0, hideTopPx) * finalScale}px` : undefined,
            }}
            onLoad={() => setIsLoading(false)}
          />
        </div>
      </CardContent>
    </Card>
  );
}
