module.exports = {
  env: {
    commonjs: true,
    es2021: true,
    node: true,
  },
  extends: ["plugin:prettier/recommended"],
  parserOptions: {
    ecmaVersion: 12,
  },
  rules: {
    "prettier/prettier": [
      "warn",
      {
        printWidth: 100,
        trailingComma: "all",
        tabWidth: 2,
        semi: true,
        singleQuote: false,
        bracketSpacing: false,
        arrowParens: "always",
        endOfLine: "auto",
      },
    ],
  },
};
