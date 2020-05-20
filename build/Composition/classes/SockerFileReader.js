"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var moment_1 = __importDefault(require("moment"));
var lodash_1 = __importDefault(require("lodash"));
var SockerFileReader = /** @class */ (function () {
    function SockerFileReader(file) {
        this.file = file;
    }
    SockerFileReader.prototype.parseData = function () {
        var fileData = this.file.read();
        var data = lodash_1.default.chain(fileData)
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
    return SockerFileReader;
}());
exports.SockerFileReader = SockerFileReader;
