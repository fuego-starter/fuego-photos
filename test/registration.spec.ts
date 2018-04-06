import 'mocha';
import { provisionUserDataStorage } from '../src/handlers/handler';
import { expect } from "chai";
import * as sinon from 'sinon';
import * as fs from 'fs';
<<<<<<< HEAD
import { FileStorage } from './support/AWS-wrapper';
=======
import { S3, APIGateway } from 'aws-sdk';
>>>>>>> 0cc6cbe93bc2b5e554f9fdd3e5752e300946a67b
import { StubContext, StubEvent } from './stubs/hello';
import { CognitoUserPoolEvent, Callback, APIGatewayEvent } from 'aws-lambda';


<<<<<<< HEAD
describe.skip('provisionUserDataStorage', function() {

  let context: StubContext = new StubContext('provisionUserDataStorage');
  let event: CognitoUserPoolEvent;
  it('creates a folder for a newly registered user to store data', async function() {
=======
describe('provisionUserDataStorage', function () {

  let context: StubContext = new StubContext('provisionUserDataStorage');
  let event: CognitoUserPoolEvent;
  it('creates a folder for a newly registered user to store data', function() {
>>>>>>> 0cc6cbe93bc2b5e554f9fdd3e5752e300946a67b
    // mock s3 object folder creation workflow
    // ensure call to folder creation takes an argument of user email
    // calls: new AWS.S3; s3.upload
    let fileData: string;
    fileData = fs.readFileSync('./test/fixtures/post-confirmation-user-pool.json', 'utf8');
<<<<<<< HEAD
    event = JSON.parse(fileData);

    // let AWS = new FileStorage;


    // let params = { Bucket: 'fuegophotos', Key: `${event.userName}/` }

    // await provisionUserDataStorage(event, context, (err, result) => {});
    // let saveObject: sinon.SinonStub = <sinon.SinonStub> AWS.S3.putObject;
    // saveObject.restore();
    // sinon.assert.calledOnce(saveObject);
=======
    // , (err, data) => {
      // if (err) throw err;
    event = JSON.parse(fileData);
    let mock = sinon.mock(new S3);
    let params = { bucket: 'fuegophotos', key: `${event.userName}` }
    provisionUserDataStorage(event, context, (err, result) => {
      mock.expects("putObject").once().withArgs(params);
      mock.restore();
      mock.verify();
    });
>>>>>>> 0cc6cbe93bc2b5e554f9fdd3e5752e300946a67b
  });
});