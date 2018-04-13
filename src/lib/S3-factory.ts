import { S3 } from 'aws-sdk';
import * as fs from 'fs';

export default class s3Factory {
  public static getS3Instance(config) {
    let s3Object = new S3();
    if (process.env.NODE_ENV!.toLowerCase() == 'test') {
      let sinon = require('sinon');
      let putObjectStub = sinon.stub(s3Object, 'putObject');

      if (config.test.fail === true) {
        let err = fs.readFileSync('./test/fixtures/s3-put-object-error.json', 'utf8');;
        err = JSON.parse(err);
        putObjectStub.callsArgWith(1, err, null);
      } else if (config.test.success === true) {
        let data = fs.readFileSync('./test/fixtures/s3-data-object.json', 'utf8')
        data = JSON.parse(data);
        putObjectStub.callsArgWith(1, null, data);
      }
    }
    return s3Object;
  }
}