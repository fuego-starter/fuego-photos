"use strict";
exports.__esModule = true;
var S3_factory_1 = require("./S3-factory");
var FileStorage = /** @class */ (function () {
    function FileStorage(email) {
        this._S3 = S3_factory_1["default"].getS3Instance();
        this.email = email;
    }
    Object.defineProperty(FileStorage.prototype, "S3", {
        get: function () { return this._S3; },
        enumerable: true,
        configurable: true
    });
    return FileStorage;
}());
exports.FileStorage = FileStorage;
