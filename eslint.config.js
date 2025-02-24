import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";
import checkFile from "eslint-plugin-check-file";
import unusedImports from "eslint-plugin-unused-imports";
import thRules from "eslint-plugin-th-rules";

export default tseslint.config(
  { ignores: ["dist"] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
      "check-file": checkFile,
      "unused-imports": unusedImports,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
      "no-console": ["error", { allow: ["warn", "error"] }],
      "unused-imports/no-unused-imports": "error",
      "no-unused-vars": [
        "error",
        {
          vars: "all",
          args: "none",
          ignoreRestSiblings: false,
        },
      ],
      "@typescript-eslint/no-unused-vars": "off",
    },
  },
  {
    files: ["**/*.{ts,tsx}"],
    plugins: {
      "th-rules": thRules,
    },
    rules: {
      "th-rules/no-comments": [
        "error",
        {
          allow: ["keep", "important", "vite/client"],
          disallow: ["deprecated", "hack"],
        },
      ],
    },
  },
  {
    files: ["**/*"],
    plugins: {
      "check-file": checkFile,
    },
    rules: {
      "check-file/filename-naming-convention": [
        "error",
        {
          "**/*.{ts}": "CAMEL_CASE",
          "**/*.{tsx}": "PASCAL_CASE",
        },
        {
          ignoreMiddleExtensions: true,
        },
      ],
    },
  },
);
