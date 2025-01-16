import fs from "fs";
import path from "path";
import { execSync } from "child_process";
import chalk from "chalk";
import {
  initializeGit,
  createGitIgnore,
  createFirstCommit,
  createRemoteRepo,
  pushToRemote,
} from "../scripts/gitHelpers.js";
import { packageTemplate } from "../templates/files/packageTemplate.js";
import { serverTemplate } from "../templates/files/serverTemplate.js";
import { eslintTemplate } from "../templates/files/eslintTemplate.js";
import { jestConfigTemplate } from "../templates/files/jestConfigTemplate.js";
import {
  huskyPreCommitTemplate,
  huskyPrePushTemplate,
  huskyCommitMsgTemplate,
} from "../templates/files/huskyHookTemplate.js";
import { commitlintTemplate } from "../templates/files/commitlintTemplate.js";
import { structureTemplate } from "../templates/structure/structureTemplate.js";
import { generateTreeText } from "../templates/tree.js";
import { exampleTestTemplate } from "../templates/files/exampleTestTemplate.js";

export const generateProject = async (projectName) => {
  console.log(
    chalk.green("\n👋 Welcome to Clean Architecture project JS Generator!")
  );

  const projectPath = path.resolve(projectName);

  // Crear la carpeta principal
  fs.mkdirSync(projectPath, { recursive: true });

  // Crear el archivo package.json
  fs.writeFileSync(
    path.join(projectPath, "package.json"),
    packageTemplate(projectName)
  );

  // Crear el archivo README.md
  const treeText = generateTreeText();
  fs.writeFileSync(
    path.join(projectPath, "README.md"),
    `# ${projectName}\n\n## Project Structure\n\n\`\`\`\n${treeText}\`\`\`\n\nThis is a basic setup for a backend project using Clean Architecture.`
  );

  // Crear la estructura del proyecto
  const createStructure = (basePath, structure) => {
    Object.entries(structure).forEach(([key, value]) => {
      const newPath = path.join(basePath, key);
      if (typeof value === "object" && value !== null) {
        fs.mkdirSync(newPath, { recursive: true });
        createStructure(newPath, value);
      } else if (value === null) {
        fs.writeFileSync(newPath, "");
      }
    });
  };
  createStructure(projectPath, structureTemplate);

  // Crear archivos de configuración
  fs.writeFileSync(path.join(projectPath, "eslint.config.js"), eslintTemplate);
  fs.writeFileSync(
    path.join(projectPath, "jest.config.js"),
    jestConfigTemplate
  );
  fs.writeFileSync(
    path.join(projectPath, "commitlint.config.cjs"),
    commitlintTemplate
  );

  // Configurar Husky
  fs.mkdirSync(path.join(projectPath, ".husky"), { recursive: true });

  // Crear hooks de Husky
  const huskyHooks = [
    { name: "pre-commit", template: huskyPreCommitTemplate },
    { name: "pre-push", template: huskyPrePushTemplate },
    { name: "commit-msg", template: huskyCommitMsgTemplate },
  ];

  huskyHooks.forEach((hook) => {
    const hookPath = path.join(projectPath, ".husky", hook.name);
    fs.writeFileSync(hookPath, hook.template);
    fs.chmodSync(hookPath, "755");
  });

  // Crear el archivo del servidor
  fs.writeFileSync(
    path.join(projectPath, "src", "infrastructure", "webserver", "server.js"),
    serverTemplate
  );

  const testPath = path.join(projectPath, "src", "tests", "unit");
  fs.mkdirSync(testPath, { recursive: true });
  fs.writeFileSync(path.join(testPath, "example.test.js"), exampleTestTemplate);

  // Configuración de Git
  initializeGit(projectPath);
  createGitIgnore(projectPath);

  console.log(
    chalk.yellow("\n--------------------------------------------------\n")
  );
  console.log(chalk.blue("Installing dependencies...\n"));
  execSync("pnpm install", { cwd: projectPath, stdio: "inherit" });

  console.log(
    chalk.yellow("\n--------------------------------------------------\n")
  );
  console.log(chalk.blue("Setting up Husky...\n"));
  execSync("pnpm husky install", { cwd: projectPath, stdio: "inherit" });

  createFirstCommit(projectPath);

  await createRemoteRepo(projectPath, projectName);
  pushToRemote(projectPath);

  console.log(
    chalk.yellow("\n--------------------------------------------------\n")
  );
  console.log(chalk.green("✅ Project created successfully at", projectPath));
};
