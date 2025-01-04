import fs from "fs";
import path from "path";

export const createFolder = (folderPath, content = {}) => {
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
