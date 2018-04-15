import { APIGatewayEvent, Context } from 'aws-lambda';

export interface IStubContext extends Context {
  isDefaultFunctionVersion: boolean;
  invokeid: string;
  environment: string; 
  testType: string;
};

export interface IStubEvent extends APIGatewayEvent {};

export class StubContext {
  logGroupName: string;
  functionName: string;
  functionVersion: string;
  awsRequestId: string;
  callbackWaitsForEmptyEventLoop: boolean;
  invokeid: string;
  logStreamName: string;
  isDefaultFunctionVersion: boolean;
  memoryLimitInMB: number;
  config: object;


  constructor(fName: string) {
    this.logGroupName = `/aws/lambda/hello-world-dev-${fName}`;
    this.functionName = `hello-world-dev-${fName}`;
    this.functionVersion = "HEAD";
    this.awsRequestId = "id";
    this.invokeid = "id";
    this.callbackWaitsForEmptyEventLoop = true;
    this.logStreamName = "2015/09/22/[HEAD]13370a84ca4ed8b77c427af260";
    this.isDefaultFunctionVersion = true;
    this.memoryLimitInMB = 1024;
    this.config = { environment: 'test', test: {} }
  }
}

export class StubEvent {
  body: string | null;
  constructor(data: string | null) {
    this.body = data;
  }
}
