// eslintrc.js

const dev_mode_ignore = {
  "no-empty-pattern": "off",
  "jsx-a11y/anchor-is-valid": "off",
  "no-unused-variable": "off",
  "no-empty": "off",
  "@typescript-eslint/no-empty-function": "warn",
  "@typescript-eslint/no-unused-vars": "off",
  "@typescript-eslint/no-use-before-define": "off",
  "@typescript-eslint/no-var-requires": "off",
  "@typescript-eslint/no-explicit-any": "off",
  "@typescript-eslint/no-empty-interface": "off",
  "@typescript-eslint/ban-ts-ignore": "off",
  "@typescript-eslint/explicit-function-return-type": "off",
  "@typescript-eslint/camelcase": "off",
}

module.exports = {
  env: {
    "es6": true,
    "node": true,
    "browser": true,
    "jest": true,
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
    ecmaFeatures: { jsx: true },
  },
  plugins: [
    "prettier",
    "@typescript-eslint",
  ],
  extends: [
    "eslint:recommended",
    "prettier",
    "prettier/react",
    "prettier/@typescript-eslint",
    "plugin:@typescript-eslint/recommended",
  ],
  rules: {
    "global-require": "off",
    ...dev_mode_ignore,
  },
}
