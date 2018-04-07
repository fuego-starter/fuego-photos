import { S3 } from 'aws-sdk';

export default class s3Factory {
  public static getS3Instance() {
    let s3Object = new S3();
    if (process.env.NODE_ENV!.toLowerCase() == 'test') {
      let sinon = require('sinon');
      sinon.stub(s3Object, 'putObject');
    }
    return s3Object;
  }
}