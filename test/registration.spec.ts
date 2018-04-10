import 'mocha';
import { provisionUserDataStorage } from '../src/handlers/handler';
import { expect, assert } from "chai";
import * as sinon from 'sinon';
import * as fs from 'fs';
import { FileStorage } from '../src/lib/file-storage' 
import { StubContext } from './stubs/hello';
import { CognitoUserPoolEvent, Callback, APIGatewayEvent } from 'aws-lambda';


describe('provisionUserDataStorage', function() {

  let context: StubContext = new StubContext('provisionUserDataStorage');
  let event: CognitoUserPoolEvent;
  it("it returns valid data when a user folder is created", function() {
    // mock s3 object folder creation workflow
    // ensure call to folder creation takes an argument of user email
    // calls: new AWS.S3; s3.upload
    let fileData: string;
    fileData = fs.readFileSync('./test/fixtures/post-confirmation-user-pool.json', 'utf8');
    event = JSON.parse(fileData);
    let fileStorage = new FileStorage();
    let params = { Bucket: 'fuego-photos-users', Key: `${event.userName}/` }
    setEnv();
    provisionUserDataStorage(event, context, function(err, data) {
      
    });
    // fileStorage.S3.getObject(params, (err, data) => {
    //   expect(data.ContentLength).to.be.greaterThan(0);
    // });
  });

  it("it returns an error when a user folder can't be created.", function() {
    // mock s3 object folder creation workflow
    // ensure call to folder creation takes an argument of user email
    // calls: new AWS.S3; s3.upload
    let fileData: string;
    fileData = fs.readFileSync('./test/fixtures/post-confirmation-user-pool.json', 'utf8');
    event = JSON.parse(fileData);
    let fileStorage = new FileStorage();
    let params = { Bucket: 'fuego-photos-users', Key: `${event.userName}/` }
    setEnv();
    provisionUserDataStorage(event, context, function(err, data) {
      
    });
    // fileStorage.S3.getObject(params, (err, data) => {
    //   expect(data.ContentLength).to.be.greaterThan(0);
    // });
  });
});



function setEnv() {
  process.env.NODE_ENV = '_test';
}