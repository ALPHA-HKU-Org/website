import "server-only";
import path from "path";

export function getContentDir(...segments: string[]): string {
  return path.join(process.cwd(), "src", "content", ...segments);
}
