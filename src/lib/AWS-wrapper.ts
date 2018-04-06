import {S3} from 'aws-sdk';
import s3Factory  from './S3-factory'; 

export class FileStorage {
  _S3: S3;
  constructor(environment: string) {
    this._S3 = s3Factory.getS3Instance(environment);
  }

  get S3() { return this._S3; }
}