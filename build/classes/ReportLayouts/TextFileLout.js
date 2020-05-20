"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var TextFileLayout = /** @class */ (function () {
    function TextFileLayout(fileName) {
        this.fileName = fileName;
    }
    TextFileLayout.prototype.print = function (data) {
        fs_1.default.writeFileSync(this.fileName + ".txt", data);
    };
    return TextFileLayout;
}());
exports.TextFileLayout = TextFileLayout;
