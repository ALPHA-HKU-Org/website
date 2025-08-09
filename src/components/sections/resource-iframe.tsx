"use client";

import { useState, useRef, useEffect, useCallback, RefObject } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn, noReturnDebounce } from "@/lib/utils";

const IFRAME_DEFAULTS = {
  WIDTH: 1338,
  HEIGHT: 600,
} as const;

function calculateResponsiveScale(containerWidth: number, sourceWidth: number): number {
  if (!containerWidth || !sourceWidth) return 1;
  return Math.min(containerWidth / sourceWidth, 1);
}

function createScaleTransformStyle(scale: number) {
  return {
    transform: `scale(${scale})`,
    transformOrigin: "top left",
    width: `${100 / scale}%`,
    height: `${100 / scale}%`,
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

interface ResourceIframeProps {
  websiteUrl: string;
  title: string;
  className?: string;
  scale?: number;
  desktopWidth?: number;
  containerHeight?: number;
}

export function ResourceIframe({
  websiteUrl,
  title,
  className,
  scale: forcedScale,
  desktopWidth = IFRAME_DEFAULTS.WIDTH,
  containerHeight = IFRAME_DEFAULTS.HEIGHT,
}: ResourceIframeProps) {
  const [isLoading, setIsLoading] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const calculatedScale = useResponsiveScale(containerRef, desktopWidth);

  const finalScale = forcedScale ?? calculatedScale;
  const scaleWrapperStyle = createScaleTransformStyle(finalScale);

  return (
    <Card className={cn("w-full", className)}>
      <CardHeader>
        <div className="flex flex-wrap items-center justify-between gap-4">
          <CardTitle>{title}</CardTitle>
          <Button
            asChild
            variant="outline"
          >
            <a
              href={websiteUrl}
              target="_blank"
              rel="noopener"
            >
              Visit Full Website →
            </a>
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div
          ref={containerRef}
          className="relative hidden w-full overflow-hidden rounded-lg border md:block"
          style={{ height: containerHeight }}
        >
          {isLoading && (
            <div className="absolute inset-0 z-10 flex items-center justify-center bg-muted">
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
