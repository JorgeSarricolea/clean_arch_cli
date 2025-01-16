export const structureTemplate = {
  src: {
    domain: {
      entities: {},
      repositories: {},
      "value-objects": {},
    },
    application: {
      "use-cases": {},
      services: {},
    },
    infrastructure: {
      orm: {
        schema: null,
        migrations: {},
        client: null,
        repositories: {},
      },
      external: {
        apis: {},
      },
      webserver: {
        express: {},
        "server.js": null,
      },
      config: {},
      logger: {},
      docker: {},
    },
    interfaces: {
      controllers: {},
      routes: {},
      middlewares: {},
      validators: {},
    },
    tests: {
      unit: {},
      integration: {},
      e2e: {},
      mocks: {},
    },
    shared: {
      utils: {},
      constants: {},
      exceptions: {},
    },
  },
};
