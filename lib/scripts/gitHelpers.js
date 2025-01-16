import readline from "readline";
import chalk from "chalk";
import { execSync } from "child_process";
import fs from "fs";
import path from "path";
import { gitignoreTemplate } from "../templates/files/gitignoreTemplate.js";

// Helper para preguntar al usuario
const askQuestion = (query) => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  return new Promise((resolve) =>
    rl.question(query, (answer) => {
      rl.close();
      resolve(answer.trim());
    })
  );
};

// Inicializar un repositorio Git
export const initializeGit = (projectPath) => {
  console.log(
    chalk.yellow("\n--------------------------------------------------\n")
  );
  console.log(chalk.blue("⚡ Initializing Git repository..."));
  execSync("git init", { cwd: projectPath, stdio: "inherit" });
  console.log(chalk.green("\n✅ Git repository initialized successfully."));
};

// Crear un archivo .gitignore
export const createGitIgnore = (projectPath) => {
  console.log(
    chalk.yellow("\n--------------------------------------------------\n")
  );
  console.log(chalk.blue("Creating .gitignore file..."));
  fs.writeFileSync(path.join(projectPath, ".gitignore"), gitignoreTemplate);
  console.log(chalk.green("\n✅ .gitignore file created successfully."));
};

// Crear el primer commit
export const createFirstCommit = (projectPath) => {
  console.log(
    chalk.yellow("\n--------------------------------------------------\n")
  );
  console.log(chalk.blue("Creating initial commit...\n"));
  execSync("git add .", { cwd: projectPath, stdio: "inherit" });
  execSync('git commit -m "chore: launching project in 3... 2... 1... 🚀"', {
    cwd: projectPath,
    stdio: "inherit",
  });
  console.log(chalk.green("\n✅ First commit created successfully."));
};

// Crear un repositorio remoto en GitHub
export const createRemoteRepo = async (projectPath, projectName) => {
  console.log(
    chalk.yellow("\n--------------------------------------------------\n")
  );
  console.log(chalk.blue("Creating remote GitHub repository..."));

  let visibility;
  while (true) {
    const input = await askQuestion(
      "\nShould the repository be public or private? [public/private]: "
    );
    visibility = input.toLowerCase();

    if (visibility === "public" || visibility === "private") {
      break;
    } else {
      console.log(
        chalk.red("\n❌ Invalid input. Please enter 'public' or 'private'.")
      );
    }
  }

  execSync(
    `gh repo create ${projectName} --${visibility} --source=. --remote=origin`,
    { cwd: projectPath, stdio: "inherit" }
  );
  console.log(
    chalk.green(`\n✅ Remote repository '${projectName}' created successfully.`)
  );
};

// Push cambios al repositorio remoto
export const pushToRemote = (projectPath) => {
  console.log(
    chalk.yellow("\n--------------------------------------------------\n")
  );
  console.log(chalk.blue("Pushing to remote repository...\n"));
  execSync("git push -u origin main", { cwd: projectPath, stdio: "inherit" });
  console.log(
    chalk.green("\n✅ Changes pushed to the remote repository successfully.")
  );
};
