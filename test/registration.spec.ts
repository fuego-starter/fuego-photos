import 'mocha';
import { provisionUserDataStorage } from '../src/handlers/handler';
import { expect } from "chai";
import * as sinon from 'sinon';
import * as fs from 'fs';
import { StubContext, StubEvent } from './stubs/hello';
import { CognitoUserPoolEvent, Callback, APIGatewayEvent } from 'aws-lambda';


describe.skip('provisionUserDataStorage', function() {

  let context: StubContext = new StubContext('provisionUserDataStorage');
  let event: CognitoUserPoolEvent;
  it('creates a folder for a newly registered user to store data', async function() {
    // mock s3 object folder creation workflow
    // ensure call to folder creation takes an argument of user email
    // calls: new AWS.S3; s3.upload
    let fileData: string;
    fileData = fs.readFileSync('./test/fixtures/post-confirmation-user-pool.json', 'utf8');
    event = JSON.parse(fileData);

    // let AWS = new FileStorage;


    // let params = { Bucket: 'fuegophotos', Key: `${event.userName}/` }

    // await provisionUserDataStorage(event, context, (err, result) => {});
    // let saveObject: sinon.SinonStub = <sinon.SinonStub> AWS.S3.putObject;
    // saveObject.restore();
    // sinon.assert.calledOnce(saveObject);
  });
});