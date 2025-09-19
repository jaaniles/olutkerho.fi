module.exports = {
  extends: [
    "standard",
    "standard-react",
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:switch-case/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
    "next",
    "next/core-web-vitals",
  ],
  plugins: ["switch-case"],
  parser: "@typescript-eslint/parser",
  rules: {
    "newline-per-chained-call": ["error", { ignoreChainWithDepth: 3 }],
    "react/react-in-jsx-scope": "off",
  },
};
