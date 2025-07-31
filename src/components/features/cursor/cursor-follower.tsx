"use client";

import { useEffect, useState } from "react";

export function CursorFollower() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isClient, setIsClient] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const checkTouchDevice = () => {
      return "ontouchstart" in window || navigator.maxTouchPoints > 0;
    };
    setIsTouchDevice(checkTouchDevice());

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    if (!checkTouchDevice()) {
      window.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      if (!checkTouchDevice()) {
        window.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, []);

  if (!isClient || isTouchDevice) {
    return null;
  }

  return (
    <div
      className="pointer-events-none fixed z-[var(--z-cursor)] h-8 w-8 rounded-full border-2 border-primary/50 transition-transform duration-100 ease-out hidden md:block"
      style={{
        transform: `translate(${position.x - 16}px, ${position.y - 16}px)`,
      }}
    />
  );
}
