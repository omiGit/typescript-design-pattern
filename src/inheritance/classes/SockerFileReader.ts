import { CSVFileReader } from "../absctract/CSVFileReader";
import { CSVSockerDataType, MatchOutcomes } from "../../types";
import _ from "lodash";
import moment from "moment";

export class SockerFileReader extends CSVFileReader<CSVSockerDataType> {
  constructor(fileName: string) {
    super(fileName);
  }

  protected parseData(fileData: string): CSVSockerDataType[] {
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
