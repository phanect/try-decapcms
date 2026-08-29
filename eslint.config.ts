import { core, unbundled } from "@phanect/lint";
import { astro } from "@phanect/lint-astro";
import { defineConfig, globalIgnores } from "eslint/config";

const configs = defineConfig([
  globalIgnores([
    "./**/dist/**",
  ]),

  ...core,
  ...unbundled,
  ...astro,

  {
    // Do not add `files: [ "*" ],` here.

    languageOptions: {
      parserOptions: {
        // Use `project: true` instead if you use `astro` ruleset.
        projectService: false,
        project: true,

        tsconfigRootDir: import.meta.dirname,
      },
    },
    rules: {
      // Plugins does not support ESLint v10.x yet
      "import/order": "off",
    },
  },
]);

export default configs;
