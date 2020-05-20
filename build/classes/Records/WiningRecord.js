"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var SockerFileReader_1 = require("../../inheritance/classes/SockerFileReader");
var types_1 = require("../../types");
var lodash_1 = __importDefault(require("lodash"));
var WiningRecord = /** @class */ (function () {
    function WiningRecord(teamName) {
        this.teamName = teamName;
    }
    WiningRecord.prototype.read = function () {
        var _this = this;
        var file = new SockerFileReader_1.SockerFileReader("original.csv");
        var data = file.read();
        var result = lodash_1.default.chain(data)
            .filter(function (v) {
            return v[1] === _this.teamName &&
                (v[5] === types_1.MatchOutcomes.HomeWin || v[5] === types_1.MatchOutcomes.AwayWin);
        })
            .map(function (v) { return __spreadArrays([v[0].format("L")], lodash_1.default.slice(v, 1)).toString(); })
            .value();
        return result.join("\n");
    };
    return WiningRecord;
}());
exports.WiningRecord = WiningRecord;
