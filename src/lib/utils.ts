import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function noReturnDebounce<T extends unknown[]>(
  func: (...args: T) => void,
  delay: number = 100
): (...args: T) => void {
  let timeoutId: ReturnType<typeof setTimeout>;

  return (...args: T) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func(...args);
    }, delay);
  };
}

export function isInternalHref(href: string): boolean {
  if (!href) return false;
  if (!href.startsWith("/")) return false;
  if (href.startsWith("//")) return false; // protocol-relative
  return true;
}
