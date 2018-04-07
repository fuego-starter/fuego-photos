import 'mocha';
import { expect } from "chai";
import * as sinon from 'sinon';
import { FileStorage } from '../src/lib/file-storage';

describe('creating a user folder on s3', function() {
  it('creates a folder for a newly registered user to store data', async function() {
    let email = 'example@example.com'
    let fileStorage = new FileStorage({env: 'test'});
    let params = { Bucket: 'fuegophotos', Key: `${email}/`};
    await fileStorage.S3.putObject(params);
    let stubPutObject: sinon.SinonStub = <sinon.SinonStub> fileStorage.S3.putObject;
    stubPutObject.restore();
    sinon.assert.calledWith(stubPutObject.firstCall, params);
  });
});