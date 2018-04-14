import {S3} from 'aws-sdk';
import { Context } from 'aws-lambda'
import { IStubContext } from '../../test/stubs/hello'
import s3Factory  from './S3-factory'; 

export class FileStorage {
  _S3: S3;
  constructor(config: Context | IStubContext) {
    this._S3 = s3Factory.getS3Instance(config);
  }

  get S3() { return this._S3; }
}