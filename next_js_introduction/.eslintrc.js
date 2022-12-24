module.exports = {
  extends: [
    "airbnb",
    "plugin:@typescript-eslint/recommended",
    "next/core-web-vitals",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
    "prettier",
  ],
  parserOptions: {
    project: "./tsconfig.eslint.json",
    tsconfigRootDir: __dirname,
  },
  plugins: ["@typescript-eslint"],
  root: true,
  rules: {
    "react/function-component-definition": [
      2,
      { namedComponents: "arrow-function" },
    ],
    "react/jsx-filename-extension": [
      "error",
      {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    ],
    "react/jsx-props-no-spreading": "off",
  },
};
