"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var lodash_1 = __importDefault(require("lodash"));
var moment_1 = __importDefault(require("moment"));
var CSVFileReader = /** @class */ (function () {
    function CSVFileReader() {
    }
    CSVFileReader.prototype.read = function () {
        var file = fs_1.default.readFileSync(this.fileName, { encoding: "utf-8" });
        var data = lodash_1.default.chain(file)
            .split("\n")
            .map(function (r) { return [r]; })
            .map(function (r) {
            var row = lodash_1.default.split(r.join(), ",");
            return [
                moment_1.default(row[0], "DD/MM/YYYY"),
                row[1],
                row[2],
                Number(row[3]),
                Number(row[4]),
                row[5],
                row[6],
            ];
        })
            .value();
        return data;
    };
    return CSVFileReader;
}());
exports.CSVFileReader = CSVFileReader;
