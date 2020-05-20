import { SockerFile } from "../interfaces/SockerFile";
import { CSVSockerDataType, MatchOutcomes } from "../../types";
import moment from "moment";
import _ from "lodash";

export class SockerFileReader {
  constructor(private file: SockerFile) {}

  parseData() {
    const fileData: string = this.file.read();
    let data: CSVSockerDataType[] = _.chain(fileData)
      .split("\n")
      .map((r) => [r])
      .map(
        (r): CSVSockerDataType => {
          const row = _.split(r.join(), ",");
          return [
            moment(row[0], "DD/MM/YYYY"),
            row[1],
            row[2],
            Number(row[3]),
            Number(row[4]),
            row[5] as MatchOutcomes,
            row[6],
          ];
        }
      )
      .value();
    return data;
  }
}
