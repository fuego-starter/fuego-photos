import 'mocha';
import { helloWorld, helloUser } from '../src/handlers/handler';
import { IStubEvent, IStubContext } from './stubs/hello';
import * as expect from "expect.js";

describe('helloWorld', function () {
  let event: IStubEvent;
  let context: IStubContext = {} as IStubContext;

  it('should return a status code of 200', function () {
    event = {} as IStubEvent;
    helloWorld(event, context, function (error, result) {
      expect(result!.statusCode).to.eql(200);
    });
  });

  it('should return a message body with "Hello World!"', function () {
    event = {} as IStubEvent;
    helloWorld(event, context, function (error, result) {
      let responseBody = JSON.parse(result!.body);
      expect(responseBody.message).to.eql('Hello World!');
    });
  });
});

describe('helloUser', function () {
  let event: IStubEvent = {body: '{"name": "Jane"}'} as IStubEvent;
  let context: IStubContext = {} as IStubContext;

  it('should return a status code of 200', function () {
    helloUser(event, context, function (error, result) {
      expect(result.statusCode).to.eql(200);
    });
  });

  it('should return a message body with "Hello {User}!"', function () {
    helloUser(event, context, function (error, result) {
      let responseBody = JSON.parse(result.body);
      expect(responseBody.message).to.eql('Hello Jane!');
    });
  });
});
