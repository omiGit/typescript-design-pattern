"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var HTMLReportLayout = /** @class */ (function () {
    function HTMLReportLayout(fileName) {
        this.fileName = fileName;
    }
    HTMLReportLayout.prototype.print = function (data) {
        var htmlLayout = this.getLayout(data);
        var html = "\n        <html>\n            <head>\n               \n            </head>\n            <body>\n              " + htmlLayout + "\n            </body>\n        </html>\n    ";
        fs_1.default.writeFileSync(this.fileName + ".html", html);
    };
    return HTMLReportLayout;
}());
exports.HTMLReportLayout = HTMLReportLayout;
