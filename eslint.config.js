import babelParser from "@babel/eslint-parser";
import unusedImports from "eslint-plugin-unused-imports";
import reactPlugin from "eslint-plugin-react";
import sonarjs from "eslint-plugin-sonarjs";

export default [
  {
    files: ["src/**/*.{js,jsx}"],
    languageOptions: {
      parser: babelParser,
      parserOptions: {
        requireConfigFile: false,
        babelOptions: {
          presets: ["@babel/preset-react"],
        },
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        window: "readonly",
        document: "readonly",
        // console: "readonly",
        localStorage: "readonly",
        sessionStorage: "readonly",
        navigator: "readonly",
        fetch: "readonly",
        XMLHttpRequest: "readonly",
        React: "readonly",
      },
    },
    plugins: {
      react: reactPlugin,
      "unused-imports": unusedImports,
      sonarjs,
    },
    rules: {
      // Core styling
      semi: ["error", "always"],
      quotes: ["error", "double"],

      // Disallow console logs
      // "no-console": "error",

      // Enforce only TODO comments, disallow all others
      "no-warning-comments": [
        "error",
        {
          terms: ["fixme", "xxx"],
          location: "start",
        },
      ],
      "spaced-comment": [
        "error",
        "always",
        {
          markers: ["/ TODO"],
        },
      ],
      "no-inline-comments": "error",

      // Unused imports/vars
      "unused-imports/no-unused-imports": "error",
      "unused-imports/no-unused-vars": [
        "error",
        {
          vars: "all",
          varsIgnorePattern: "^_",
          args: "after-used",
          argsIgnorePattern: "^_",
        },
      ],

      // React rules
      "react/jsx-uses-react": "error",
      "react/jsx-uses-vars": "error",
      "react/react-in-jsx-scope": "off",

      // Padding between statements
      // "padding-line-between-statements": [
      //   "error",
      //   { blankLine: "never", prev: "import", next: "import" },
      //   { blankLine: "never", prev: ["const", "let", "var"], next: ["const", "let", "var"] },
      //   {
      //     blankLine: "always",
      //     prev: "import",
      //     next: ["const", "let", "var", "function", "class", "export"],
      //   },
      //   { blankLine: "always", prev: ["const", "let", "var"], next: "*" },
      //   { blankLine: "always", prev: "*", next: ["const", "let", "var"] },
      //   { blankLine: "always", prev: "if", next: "*" },
      //   { blankLine: "always", prev: "*", next: "if" },
      //   { blankLine: "always", prev: "expression", next: "*" },
      //   { blankLine: "always", prev: "*", next: "expression" },
      // ],
      "sonarjs/cognitive-complexity": ["error", 4],
    },
  },
];
