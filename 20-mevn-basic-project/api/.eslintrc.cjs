module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  plugins: ["simple-import-sort", "import"],
  extends: ["eslint:recommended", "plugin:prettier/recommended"],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  rules: {
    "no-console": ["warn", { allow: ["error"] }],
    "no-var": "error",
    "object-shorthand": "error",
    "prefer-const": "error",
    "prefer-template": "error",
    "prefer-rest-params": "warn",
    "prefer-spread": "warn",
    yoda: "error",
    "comma-dangle": ["error", {
      "imports": "never",
    }],
    eqeqeq: "warn",

    "import/first": "error",
    "import/newline-after-import": "error",
    "import/no-duplicates": "error",
  },
};
