// eslint.config.js
import eslintRecommended from "eslint/conf/eslint-recommended";

export default [
  {
    files: ["**/*.js"],
    rules: {
      semi: ["error", "always"],
      quotes: ["error", "double"],
    },
  },
  eslintRecommended,
];
