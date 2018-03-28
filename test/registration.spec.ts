import 'mocha';
import { expect } from "chai";
import * as sinon from 'sinon';
import { StubContext } from './stubs/hello';
import { CognitoUserPoolEvent, Callback } from 'aws-lambda';
import { provisionUserDataStorage } from '../src/handlers/handler';

describe('provisionUserDataStorage', function () {
  let event: CognitoUserPoolEvent;
  let context: StubContext = new StubContext('provisionUserDataStorage');

  it('creates a folder for a newly registered user to store data', function() {
  });
  it('confirms that the correct lambda trigger was used on the user pool', function() {
  });
});