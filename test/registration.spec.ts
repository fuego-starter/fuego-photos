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

  it("it returns valid data when a user folder is created", async function() {
    let event = fs.readFileSync('./test/fixtures/post-confirmation-user-pool.json', 'utf8');
    let eventData = JSON.parse(event) as CognitoUserPoolEvent;
    context.testType = 'success';
    let params = { Bucket: 'fuego-photos-users', Key: `${eventData.userName}/` }

    provisionUserDataStorage(event, context, function(err, data) {
      expect(!!err).to.be.false;
      expect(!!data).to.be.true;
    });

  });

  it("it returns an error when a user folder can't be created.", function() {
    let event = fs.readFileSync('./test/fixtures/post-confirmation-user-pool.json', 'utf8'); 
    let eventData = JSON.parse(event) as CognitoUserPoolEvent;
    context.testType = 'fail';
    let params = { Bucket: 'fuego-photos-users', Key: `${eventData.userName}/` }

    provisionUserDataStorage(event, context, function(err, data) {
      expect(!!data).to.be.false;
      expect(!!err).to.be.true;
    });
  });
});