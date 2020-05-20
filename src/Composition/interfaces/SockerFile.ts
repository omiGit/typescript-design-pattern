import { CSVSockerDataType } from "../../types";

export interface SockerFile {
  fileName: string;
  read(): string;
}
