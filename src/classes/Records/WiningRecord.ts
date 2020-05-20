import { ReportData } from "../../interfaces/ReportData";
import { SockerFileReader } from "../../inheritance/classes/SockerFileReader";
import { CSVSockerDataType, MatchOutcomes } from "../../types";
import _ from "lodash";

export class WiningRecord implements ReportData {
  constructor(private teamName: string) {}

  read(): string {
    const file = new SockerFileReader("original.csv");
    const data: CSVSockerDataType[] = file.read();
    const result = _.chain(data)
      .filter(
        (v) =>
          v[1] === this.teamName &&
          (v[5] === MatchOutcomes.HomeWin || v[5] === MatchOutcomes.AwayWin)
      )
      .map((v) => [v[0].format("L"), ..._.slice(v, 1)].toString())
      .value();
    return result.join("\n");
  }
}
