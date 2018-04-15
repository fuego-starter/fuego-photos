import 'mocha';
import { expect } from "chai";
import * as sinon from 'sinon';
import { FileStorage } from '../src/lib/file-storage';
import {IStubContext} from './stubs/handler';

describe('creating a user folder on s3', function() {
  it('creates an object on s3 given a set of parameters', function() {
    let email = 'example@example.com'
    let fileStorage = new FileStorage({ environment: 'test', testType: ''} as IStubContext);
    let params = { Bucket: 'fuegophotos', Key: `${email}/`};
    fileStorage.S3.putObject(params);
    let stubPutObject: sinon.SinonStub = <sinon.SinonStub> fileStorage.S3.putObject;
    stubPutObject.restore();
    sinon.assert.calledWith(stubPutObject.firstCall, params);
  });
});