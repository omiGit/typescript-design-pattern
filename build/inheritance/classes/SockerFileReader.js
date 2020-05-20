"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var CSVFileReader_1 = require("../absctract/CSVFileReader");
var lodash_1 = __importDefault(require("lodash"));
var moment_1 = __importDefault(require("moment"));
var SockerFileReader = /** @class */ (function (_super) {
    __extends(SockerFileReader, _super);
    function SockerFileReader(fileName) {
        return _super.call(this, fileName) || this;
    }
    SockerFileReader.prototype.parseData = function (fileData) {
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
}(CSVFileReader_1.CSVFileReader));
exports.SockerFileReader = SockerFileReader;
