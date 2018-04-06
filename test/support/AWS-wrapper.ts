import {S3} from 'aws-sdk';
import s3Factory  from './S3-factory'; 

export class FileStorage {
  _S3: S3;
  email: string;
  constructor(email: string) {
    this._S3 = s3Factory.getS3Instance();
    this.email = email;
  }
  
  get S3() { return this._S3; }
}