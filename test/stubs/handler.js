"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
;
;
class StubContext {
    constructor(fName) {
        this.logGroupName = `/aws/lambda/hello-world-dev-${fName}`;
        this.functionName = `hello-world-dev-${fName}`;
        this.functionVersion = "HEAD";
        this.awsRequestId = "id";
        this.invokeid = "id";
        this.callbackWaitsForEmptyEventLoop = true;
        this.logStreamName = "2015/09/22/[HEAD]13370a84ca4ed8b77c427af260";
        this.isDefaultFunctionVersion = true;
        this.memoryLimitInMB = 1024;
        this.config = { environment: 'test', test: {} };
    }
}
exports.StubContext = StubContext;
class StubEvent {
    constructor(data) {
        this.body = data;
    }
}
exports.StubEvent = StubEvent;
