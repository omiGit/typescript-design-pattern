import { Reporter } from "../../interfaces/Reporter";
import fs from "fs";
import _ from "lodash";

export class TextFileLayout implements Reporter {
  constructor(private fileName: string) {}

  print(data: string): void {
    fs.writeFileSync(`${this.fileName}.txt`, data);
  }
}
