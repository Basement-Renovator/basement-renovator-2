import fs from "fs";

export function exists(filePath: string): boolean {
  let pathExists: boolean;
  try {
    pathExists = fs.existsSync(filePath);
  } catch (err) {
    throw new Error(`Failed to check to see if "${filePath}" exists: ${err}`);
  }

  return pathExists;
}
