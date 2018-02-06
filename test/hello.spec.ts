import 'mocha';
import { helloWorld, helloUser } from '../src/handlers/handler';
import { StubEvent, StubContext } from '../stubs/hello';
import * as expect from 'expect.js';

describe('helloWorld', function () {
  let event: StubEvent;
  let context: StubContext = new StubContext('helloWorld');

  it('should return a status code of 200', function () {
    helloWorld(event, context, function (error, result) {
      expect(result!.statusCode).to.eql(200);
    });
  });

  it('should return a message body with "Hello World!"', function () {
    helloWorld(event, context, function (error, result) {
      let responseBody = JSON.parse(result!.body);
      expect(responseBody.message).to.eql('Hello World!');
    });
  });
});

describe('helloUser', function () {
  let body: string =  '{"name": "Jane"}';
  let event: StubEvent = new StubEvent(body);
  let context: StubContext = new StubContext('helloUser');

  it('should return a status code of 200', function () {
    helloUser(event, context, function (error, result) {
      expect(result!.statusCode).to.eql(200);
    });
  });

  it('should return a message body with "Hello {User}!"', function () {
    helloUser(event, context, function (error, result) {
      let responseBody = JSON.parse(result!.body);
      expect(responseBody.message).to.eql('Hello Jane!');
    });
  });
});
