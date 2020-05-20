"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Report = /** @class */ (function () {
    function Report(reportData, report) {
        this.report = report;
        this.reportData = reportData;
    }
    Report.prototype.create = function () {
        var data = this.reportData.read();
        this.report.print(data);
    };
    return Report;
}());
exports.Report = Report;
