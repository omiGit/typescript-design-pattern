"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var CSVFileReader = /** @class */ (function () {
    function CSVFileReader(fileName) {
        this.file = fileName;
    }
    Object.defineProperty(CSVFileReader.prototype, "fileName", {
        get: function () {
            return this.fileName;
        },
        enumerable: true,
        configurable: true
    });
    CSVFileReader.prototype.read = function () {
        var fileData = fs_1.default.readFileSync(this.file, { encoding: "utf-8" });
        return fileData;
    };
    return CSVFileReader;
}());
exports.CSVFileReader = CSVFileReader;
