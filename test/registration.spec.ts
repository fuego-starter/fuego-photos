import 'mocha';
import * as expect from "expect.js";
import { StubEvent, StubContext } from '../stubs/hello';
import { provisionUserDataStorage } from '../src/handlers/handler';

describe('provisionUserDataStorage', function () {
  let event: StubEvent;
  let context: StubContext = new StubContext('provisionUserDataStorage');

  it('creates a folder for a newly registered user to store data', function() {
  });
  it('confirms that the correct lambda trigger was used on the user pool', function() {
    provisionUserDataStorage(event, context, function(error, result))

  });
});