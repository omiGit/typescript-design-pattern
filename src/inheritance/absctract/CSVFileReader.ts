import { CSVSockerDataType, MatchOutcomes } from "../../types";
import fs from "fs";

export abstract class CSVFileReader<T> {
  fileName: string;
  constructor(fileName: string) {
    this.fileName = fileName;
  }
  protected abstract parseData(fileData: string): T[];
  read(): T[] {
    const fileData = fs.readFileSync(this.fileName, { encoding: "utf-8" });
    const data: T[] = this.parseData(fileData);
    return data;
  }
}
