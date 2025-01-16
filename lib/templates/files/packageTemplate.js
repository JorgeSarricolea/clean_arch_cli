export const packageTemplate = (projectName) =>
  JSON.stringify(
    {
      name: projectName,
      version: "1.0.0",
      type: "module",
      description: "A backend project following Clean Architecture principles",
      main: "src/infrastructure/webserver/server.js",
      scripts: {
        start: "node src/infrastructure/webserver/server.js",
        dev: "watch 'node src/infrastructure/webserver/server.js' src/infrastructure/webserver/",
        lint: "eslint . --fix",
        test: "jest",
        prepare: "husky install",
      },
      dependencies: {
        express: "^4.18.2",
      },
      devDependencies: {
        eslint: "^9.18.0",
        jest: "^29.7.0",
        husky: "^8.0.0",
        "@commitlint/config-conventional": "^17.7.0",
        "@commitlint/cli": "^17.7.0",
        watch: "^1.0.2",
        dotenv: "^16.0.0",
      },
    },
    null,
    2
  );
