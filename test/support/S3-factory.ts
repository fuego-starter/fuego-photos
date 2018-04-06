import { S3 } from 'aws-sdk';

export default class s3Factory {
  public static getS3Instance(environment: string = 'test', email: string) {
    if (environment.toLowerCase() == 'test') {
      let s3Object = new S3();
      let sinon = require('sinon');
      sinon.stub(s3Object, 'putObject');
      return s3Object;
    }
    return new S3();
  }
}