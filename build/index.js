"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SockerFileReader_1 = require("./inheritance/classes/SockerFileReader");
var SockerFileReader_2 = require("./Composition/classes/SockerFileReader");
var CSVFileReader_1 = require("./Composition/classes/CSVFileReader");
var Report_1 = require("./classes/Report");
var WiningRecord_1 = require("./classes/Records/WiningRecord");
var TextFileLout_1 = require("./classes/ReportLayouts/TextFileLout");
var HTMLTableLayout_1 = require("./classes/ReportLayouts/HTMLTableLayout");
//Inheritance
var data1 = new SockerFileReader_1.SockerFileReader("original.csv");
console.log("Inheritance :", data1.read());
//Composition
var data2 = new SockerFileReader_2.SockerFileReader(new CSVFileReader_1.CSVFileReader("original.csv"));
console.log("Composition :", data2.parseData());
var textReport = new Report_1.Report(new WiningRecord_1.WiningRecord("Everton"), new TextFileLout_1.TextFileLayout("WiningRecord"));
textReport.create();
var htmlReport = new Report_1.Report(new WiningRecord_1.WiningRecord("Everton"), new HTMLTableLayout_1.HTMLTableLayout("Wining Records", "Wining Records", [
    "Date",
    "Home Team",
    "Away Team",
    "Home Goals",
    "Away Goals",
    "Winner",
    "Referee",
]));
htmlReport.create();
