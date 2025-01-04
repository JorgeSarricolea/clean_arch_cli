import path from "path";
import { createFolder } from "./utils.js";
import { getTemplates } from "../templates/index.js";

export const generateProject = (projectName) => {
  const root = path.join(process.cwd(), projectName);

  const templates = getTemplates(projectName);

  createFolder(root, templates);

  console.log(`✅ Project "${projectName}" created successfully!`);
};
