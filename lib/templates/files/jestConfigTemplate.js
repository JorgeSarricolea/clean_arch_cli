export const jestConfigTemplate = `export default {
  testEnvironment: "node",
  transform: {},
  moduleNameMapper: {
    "^(\\.{1,2}/.*)\\.js$": "$1",
  },
  verbose: true,
  setupFiles: ["dotenv/config"],
};
`;
