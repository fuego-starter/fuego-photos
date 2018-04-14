import { S3 } from 'aws-sdk';
import { Context } from 'aws-lambda';
// import { StubContext } from '../../test/stubs/hello'
import * as fs from 'fs';
import { IStubContext } from '../../test/stubs/hello';

export default class s3Factory {
  public static getS3Instance(config: Context | IStubContext) {
    let s3Object = new S3();
    if ((config as IStubContext).environment.toLowerCase() == 'test') {
      let sinon = require('sinon');
      let putObjectStub = sinon.stub(s3Object, 'putObject');

      if ((config as IStubContext).testType === 'fail') {
        let err = fs.readFileSync('./test/fixtures/s3-put-object-error.json', 'utf8');;
        err = JSON.parse(err);
        putObjectStub.callsArgWith(1, err, null);
      } else if ((config as IStubContext).testType === 'success') {
        let data = fs.readFileSync('./test/fixtures/s3-data-object.json', 'utf8')
        data = JSON.parse(data);
        putObjectStub.callsArgWith(1, null, data);
      }
    }
    return s3Object;
  }
}