import "server-only";
import fs from "fs";
import path from "path";
import { cache } from "react";
import type { Jobs } from "./jobs.types";
import { getContentDir } from "./paths.server";

/**
 * Server-only: scan join-us MDX, import frontmatter via remark-mdx-frontmatter.
 */
export const getJobs = cache(async (): Promise<Jobs["Summary"][]> => {
  const dir: string = getContentDir("join-us");
  const files: string[] = fs.readdirSync(dir);

  const jobs: Jobs["Summary"][] = await Promise.all(
    files
      .filter((file) => file.endsWith(".mdx"))
      .map(async (file) => {
        // todo: investigate why path.join(dir, file) does not work
        const { frontmatter } = await import(`@/content/join-us/${file}`);

        // Ensure slug is present on the returned object, by providing
        // a default slug filename and allows overriding by the frontmatter.
        const slug: string = path.parse(file).name;
        return { slug, ...frontmatter } as Jobs["Summary"];
      })
  );

  return jobs;
});
