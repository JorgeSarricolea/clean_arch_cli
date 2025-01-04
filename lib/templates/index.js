import { serverTemplate } from "./files/serverTemplate.js";
import { getPackageTemplate } from "./files/packageTemplate.js";
import { gitignoreTemplate } from "./files/gitignoreTemplate.js";
import { structureTemplate } from "./structure/structureTemplate.js";
import { generateTreeText } from "./tree.js";

export const getTemplates = (projectName) => ({
  ...structureTemplate,
  "infrastructure/server.js": serverTemplate,
  "README.md": `# ${projectName}

## Project Structure

\`\`\`
${generateTreeText()}
\`\`\`

This is a basic setup for a backend project using Clean Architecture.
`,
  "package.json": getPackageTemplate(projectName),
  ".gitignore": gitignoreTemplate,
});
