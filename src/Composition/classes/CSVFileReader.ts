import { SockerFile } from "../interfaces/SockerFile";
import fs from "fs";

export class CSVFileReader implements SockerFile {
  private file: string;

  constructor(fileName: string) {
    this.file = fileName;
  }
  get fileName(): string {
    return this.fileName;
  }
  read(): string {
    const fileData = fs.readFileSync(this.file, { encoding: "utf-8" });
    return fileData;
  }
}
