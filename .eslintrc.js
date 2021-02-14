module.exports = {
  extends: [
    "plugin:@typescript-eslint/recommended",
    "prettier/@typescript-eslint",
    "plugin:prettier/recommended",
  ],
  rules: {
    "prettier/prettier": "error",
  },
  parserOptions: {
    "sourceType": "module",
    "parser": "babel-eslint",
    "ecmaVersion": 2015,
  },
};
