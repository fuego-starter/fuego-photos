import 'mocha';
import { expect } from "chai";
import * as sinon from 'sinon';
import * as fs from 'fs';
import { S3 } from 'aws-sdk';
import "isomorphic-fetch";
import { StubContext } from './stubs/hello';
import { CognitoUserPoolEvent, Callback } from 'aws-lambda';
import { provisionUserDataStorage } from '../src/handlers/handler';

describe('provisionUserDataStorage', function () {

  let context: StubContext = new StubContext('provisionUserDataStorage');
  let event: CognitoUserPoolEvent;
  it('creates a folder for a newly registered user to store data', function() {
    // mock s3 object folder creation workflow
    // ensure call to folder creation takes an argument of user email
    // calls: new AWS.S3; s3.upload
    let fileData: string;
    let blah;
    fs.readFile('./test/fixtures/post-confirmation-user-pool.json', 'utf8', (err, data) => {
      if (err) throw err;
      event = JSON.parse(data);
      let S3Mock = sinon.mock(new S3);
      
      let params = { bucket: 'fuegophotos', key: `${event.userName}` }
      S3Mock.expects("putObject").once().withArgs(params);

      provisionUserDataStorage(event, context, function(error, result) {
        S3Mock.verify();
      });
      S3Mock.restore
    });
    

  });
  it('confirms that the correct lambda trigger was used on the user pool', function() {
  });
});