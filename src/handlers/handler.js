"use strict";
exports.__esModule = true;
exports.helloWorld = function (event, context, callback) {
    var response = {
        statusCode: 200,
        body: JSON.stringify({
            message: 'Hello World!',
            input: event
        })
    };
    callback(null, response);
};
exports.helloUser = function (event, context, callback) {
    var response = {
        statusCode: 200,
        body: JSON.stringify({
            message: "Hello " + event.name + "!",
            input: event
        })
    };
    callback(null, response);
};
