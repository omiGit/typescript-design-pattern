"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var CSVFileReader = /** @class */ (function () {
    function CSVFileReader(fileName) {
        this.fileName = fileName;
    }
    CSVFileReader.prototype.read = function () {
        var fileData = fs_1.default.readFileSync(this.fileName, { encoding: "utf-8" });
        var data = this.parseData(fileData);
        return data;
    };
    return CSVFileReader;
}());
exports.CSVFileReader = CSVFileReader;
