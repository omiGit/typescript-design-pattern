import fs from "fs";
import _ from "lodash";
import moment, { Moment } from "moment";
import { SockerFileReader } from "./inheritance/classes/SockerFileReader";
import { SockerFileReader as SOKreader } from "./Composition/classes/SockerFileReader";
import { CSVFileReader } from "./Composition/classes/CSVFileReader";
import { Report } from "./classes/Report";
import { WiningRecord } from "./classes/Records/WiningRecord";
import { TextFileLayout } from "./classes/ReportLayouts/TextFileLout";
import { HTMLTableLayout } from "./classes/ReportLayouts/HTMLTableLayout";
//Inheritance
const data1 = new SockerFileReader("original.csv");
console.log("Inheritance :", data1.read());

//Composition
const data2 = new SOKreader(new CSVFileReader("original.csv"));

console.log("Composition :", data2.parseData());

const textReport = new Report(
  new WiningRecord("Everton"),
  new TextFileLayout("WiningRecord")
);

textReport.create();

const htmlReport = new Report(
  new WiningRecord("Everton"),
  new HTMLTableLayout("Wining Records", "Wining Records", [
    "Date",
    "Home Team",
    "Away Team",
    "Home Goals",
    "Away Goals",
    "Winner",
    "Referee",
  ])
);
htmlReport.create();
