import { APIGatewayEvent, Context } from 'aws-lambda';

export interface StubContext extends Context {
  isDefaultFunctionVersion: boolean;
  invokeid: string;
};

export interface StubEvent extends APIGatewayEvent {};

export class StubContext {
  config: object;
  constructor(fName: string) {
    this.logGroupName = `/aws/lambda/hello-world-dev-${fName}`;
    this.functionName = `hello-world-dev-${fName}`;
    this.functionVersion = "HEAD";
    this.awsRequestId = "id";
    this.invokeid = "id";
    this.logStreamName = "2015/09/22/[HEAD]13370a84ca4ed8b77c427af260";
    this.isDefaultFunctionVersion = true;
    this.memoryLimitInMB = 1024;
  }
}

export class StubEvent {
  constructor(data: string) {
    this.body = data;
  }
}
