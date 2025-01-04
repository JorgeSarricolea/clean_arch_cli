#!/usr/bin/env node

import { generateProject } from "../lib/generator.js";
import { program } from "commander";

program
  .name("clean-arch-cli")
  .description("Generate a backend project with Clean Architecture")
  .version("1.0.0");

program
  .argument("<project-name>", "Name of the project to be created")
  .action((projectName) => {
    generateProject(projectName);
  });

program.parse(process.argv);
