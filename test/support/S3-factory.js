"use strict";
exports.__esModule = true;
var aws_sdk_1 = require("aws-sdk");
var s3Factory = /** @class */ (function () {
    function s3Factory() {
    }
    s3Factory.getS3Instance = function (environment, email) {
        if (environment === void 0) { environment = 'test'; }
        if (environment.toLowerCase() == 'test') {
            var s3Object = new aws_sdk_1.S3();
            var sinon_1 = require('sinon');
            sinon_1.stub(s3Object, 'putObject');
            return s3Object;
        }
        return new aws_sdk_1.S3();
    };
    return s3Factory;
}());
exports["default"] = s3Factory;
