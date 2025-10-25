import { dirname } from "path";
import { fileURLToPath } from "url";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTypescript from "eslint-config-next/typescript";
import prettier from "eslint-config-prettier";
import tailwind from "eslint-plugin-tailwindcss";
import { defineConfig, globalIgnores } from "eslint/config";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTypescript,
  prettier,
  {
    rules: {
      "react/no-unescaped-entities": "off",
    },
  },
  ...tailwind.configs["flat/recommended"],
  {
    settings: {
      tailwindcss: {
        config: `${__dirname}/src/app/globals.css`,
      },
    },
  },
  globalIgnores([
    "node_modules/**",
    ".next/**",
    "out/**",
    ".testing/**",
    "build/**",
    "next-env.d.ts",
    "src/components/ui/**",
  ]),
]);

export default eslintConfig;
