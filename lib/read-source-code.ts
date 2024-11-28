"use server"
import { promises as fs } from "fs";
import path from "path";

export async function readSourceCode(pathName: string): Promise<string> {
    try {
      const filePath = path.resolve(process.cwd(), pathName); 
    const code = await fs.readFile(filePath, "utf-8");
    return code;
  } catch (error) {
    console.error(`Error reading file at ${pathName}:`, error);
    throw new Error("Could not read the file");
  }
}
