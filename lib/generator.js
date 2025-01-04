import fs from "fs";
import path from "path";

export const generateProject = (projectName) => {
  const root = path.join(process.cwd(), projectName);

  const structure = {
    adapters: { api: {}, database: { orm: {} } },
    application: { dtos: {}, services: {}, "use-cases": {} },
    domain: { entities: {}, repositories: {}, errors: {}, "value-objects": {} },
    infrastructure: {
      database: { daos: {}, models: {}, repositories: {} },
      config: {},
      routes: {},
      logger: {},
      "server.js": `import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.json({ message: 'Welcome to your Clean Architecture API' });
});

const PORT = 8000;
app.listen(PORT, () => {
    console.log('🚀 Server deployed on http://localhost:' + PORT);
});`,
    },
    interfaces: {
      controllers: {},
      middlewares: {},
      presenters: {},
      validators: {},
    },
    shared: { utils: {}, constants: {}, exceptions: {} },
    "README.md": `# ${projectName}

## Project Structure

\`\`\`
${generateTreeText()}
\`\`\`

This is a basic setup for a backend project using Clean Architecture.
`,
    "package.json": JSON.stringify(
      {
        name: projectName,
        version: "1.0.0",
        type: "module",
        description:
          "A backend project following Clean Architecture principles",
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
    ),
    ".gitignore": `
# Node.js
node_modules/
npm-debug.log*
pnpm-debug.log*
yarn-debug.log*
yarn-error.log*
.env

# Logs
logs/
*.log
npm-debug.log*
yarn-debug.log*
pnpm-debug.log*

# OS
.DS_Store
Thumbs.db

# Editor
.vscode/
.idea/
*.swp
`,
  };

  const createFolder = (folderPath, content = {}) => {
    fs.mkdirSync(folderPath, { recursive: true });
    Object.entries(content).forEach(([name, value]) => {
      const fullPath = path.join(folderPath, name);
      if (typeof value === "string") {
        fs.writeFileSync(fullPath, value, "utf8");
      } else {
        createFolder(fullPath, value);
      }
    });
  };

  createFolder(root, structure);
  console.log(`✅ Project "${projectName}" created successfully!`);
};

const generateTreeText = () => `
project-root/
├── adapters/
│   ├── api/
│   ├── database/
│       └── orm/
├── application/
│   ├── dtos/
│   ├── services/
│   └── use-cases/
├── domain/
│   ├── entities/
│   ├── repositories/
│   ├── errors/
│   └── value-objects/
├── infrastructure/
│   ├── database/
│   │   ├── daos/
│   │   ├── models/
│   │   └── repositories/
│   ├── config/
│   ├── routes/
│   ├── logger/
│   └── server.js
├── interfaces/
│   ├── controllers/
│   ├── middlewares/
│   ├── presenters/
│   └── validators/
└── shared/
    ├── utils/
    ├── constants/
    └── exceptions/
`;
