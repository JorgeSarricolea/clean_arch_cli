export const eslintTemplate = `export default [
  {
    files: ["**/*.js", "**/*.ts"],
    rules: {
      "no-unused-vars": "warn",
      "no-console": "warn",
      indent: ["error", 2],
    },
  },
];

`;
