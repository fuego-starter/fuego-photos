import 'mocha';
import { provisionUserDataStorage } from '../src/handlers/handler';
import { expect, assert } from "chai";
import * as sinon from 'sinon';
import * as fs from 'fs';
import { IStubContext } from './stubs/hello';
import { Context, CognitoUserPoolEvent, Callback, APIGatewayEvent } from 'aws-lambda';


describe('provisionUserDataStorage', function() {

  // let context: StubContext = new StubContext('provisionUserDataStorage');
  let context: IStubContext = {environment: 'test'} as IStubContext;
  let event: CognitoUserPoolEvent;

  beforeEach(() => {
    let eventString = fs.readFileSync('./test/fixtures/post-confirmation-user-pool.json', 'utf8');
    event = JSON.parse(eventString) as CognitoUserPoolEvent;
  });

  it("returns an error if triggered incorrectly", function() {
    event.triggerSource = 'PreSignUp_SignUp';

    provisionUserDataStorage(event, context, function(err, data) {
      expect(err.message).to.eql('Invalid trigger source.');
    });
  });  

  it("returns valid data when a user folder is created", function() {
    context.testType = 'success';

    provisionUserDataStorage(event, context, function(err, data) {
      expect(!!err).to.be.false;
      expect(!!data).to.be.true;
    });

  });

  it("returns an error when a user folder can't be created.", function() {
    context.testType = 'fail';

    provisionUserDataStorage(event, context, function(err, data) {
      expect(!!data).to.be.false;
      expect(!!err).to.be.true;
    });
  });
});