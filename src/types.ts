import { Moment } from "moment";

export type CSVSockerDataType = [
  Moment,
  string,
  string,
  number,
  number,
  string,
  string
];

export enum MatchOutcomes {
  HomeWin = "H",
  AwayWin = "A",
  Draw = "D",
}
