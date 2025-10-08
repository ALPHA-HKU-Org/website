import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import tailwind from "eslint-plugin-tailwindcss";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  {
    ignores: [
      "node_modules/**",
      ".next/**",
      "out/**",
      ".testing/**",
      "build/**",
      "next-env.d.ts",
      "src/components/ui/**",
    ],
  },
  ...compat.config({
    extends: ["next", "next/core-web-vitals", "next/typescript", "prettier"],
  }),
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
];

export default eslintConfig;
