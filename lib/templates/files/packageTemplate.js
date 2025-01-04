export const getPackageTemplate = (projectName) =>
  JSON.stringify(
    {
      name: projectName,
      version: "1.0.0",
      type: "module",
      description: "A backend project following Clean Architecture principles",
      main: "infrastructure/server.js",
      scripts: {
        start: "node infrastructure/server.js",
        dev: "watch 'node infrastructure/server.js' infrastructure/",
      },
      dependencies: {
        express: "^4.18.2",
      },
      devDependencies: {
        watch: "^1.0.2",
      },
    },
    null,
    2
  );