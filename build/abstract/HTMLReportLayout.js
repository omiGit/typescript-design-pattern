"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var HTMLReportLayout = /** @class */ (function () {
    function HTMLReportLayout() {
    }
    HTMLReportLayout.prototype.print = function (data) {
        var htmlLayout = this.getLayout(data);
        return "\n        <html>\n            <head>\n                " + htmlLayout + "\n            </head>\n        </html>\n    ";
    };
    return HTMLReportLayout;
}());
exports.HTMLReportLayout = HTMLReportLayout;
