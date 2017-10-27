module.exports = {
  env: {
    node: true,
    browser: true,
    commonjs: true,
    es6: true
  },
  extends: [
    "eslint:recommended",
    "prettier",
    "prettier/react",
    "plugin:react/recommended"
  ],
  plugins: ["prettier"],
  parserOptions: {
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true
    },
    ecmaVersion: 2017,
    sourceType: "module"
  },
  parser: "babel-eslint",
  globals: {},
  rules: {
    "prettier/prettier": [
      "error",
      {
        singleQuote: true,
        trailingComma: "es5"
      }
    ],
    eqeqeq: ["error", "always"]
  }
};
