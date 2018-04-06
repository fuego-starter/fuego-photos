import 'mocha';
import { provisionUserDataStorage } from '../src/handlers/handler';
import { expect } from "chai";
import * as sinon from 'sinon';
import * as fs from 'fs';
import { FileStorage } from './support/AWS-wrapper';
import { StubContext, StubEvent } from './stubs/hello';
import { CognitoUserPoolEvent, Callback, APIGatewayEvent } from 'aws-lambda';


describe('creating a user folder on s3', function() {
  it('creates a folder for a newly registered user to store data', async function() {
    let email = 'example@example.com'
    let fileStorage = new FileStorage(email);
    await fileStorage.S3.putObject({ Bucket: 'fuegophotos', Key: `${email}/` });
    let stubPutObject: sinon.SinonStub = <sinon.SinonStub> fileStorage.S3.putObject;
    stubPutObject.restore();
    sinon.assert.calledOnce(stubPutObject);
  });
});