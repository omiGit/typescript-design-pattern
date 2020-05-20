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
var HTMLReportLayout_1 = require("../abstract/HTMLReportLayout");
var lodash_1 = __importDefault(require("lodash"));
var HTMLTableLayout = /** @class */ (function (_super) {
    __extends(HTMLTableLayout, _super);
    function HTMLTableLayout(tableName, tableHeaderColumns) {
        var _this = _super.call(this) || this;
        _this.tableName = tableName;
        _this.tableHeaderColumns = tableHeaderColumns;
        return _this;
    }
    HTMLTableLayout.prototype.getTr = function (data) {
        return "<tr>" + lodash_1.default.map(data, function (d) { return "<td>${d}</td>"; }) + "</tr>";
    };
    HTMLTableLayout.prototype.getTh = function () {
        return "<tr>" + lodash_1.default.map(this.tableHeaderColumns, function (th) { return "<th>" + th + "</th>"; }) + "</tr>";
    };
    HTMLTableLayout.prototype.getLayout = function (data) {
        var trData = lodash_1.default.chain(data).split(",").value();
        var tr = lodash_1.default.map(trData, this.getTr);
        var table = "\n        <h4>" + this.tableName + "</h4>\n        <table>\n            " + this.getTh() + "\n            " + tr + "\n        </table>\n    ";
        return table;
    };
    return HTMLTableLayout;
}(HTMLReportLayout_1.HTMLReportLayout));
exports.HTMLTableLayout = HTMLTableLayout;
