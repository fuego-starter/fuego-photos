import { APIGatewayEvent, CognitoUserPoolEvent, ProxyCallback} from 'aws-lambda'
import { Context, ProxyHandler, Handler, ProxyResult, Callback } from 'aws-lambda';
import * as AWS from "aws-sdk";
import { FileStorage } from '../lib/file-storage';


export const helloWorld: ProxyHandler = (event: APIGatewayEvent, context: Context, callback: ProxyCallback) => {
  const response: ProxyResult = {
    statusCode: 200,
    body: JSON.stringify({
      message: "Hello World!",
      input: event,
    }),
  };

  callback(null, response);
}

export const helloUser: ProxyHandler = (event: APIGatewayEvent, context: Context, callback: ProxyCallback) => {
  let body = JSON.parse(event.body || '');
  const response: ProxyResult = {
    statusCode: 200,
    body: JSON.stringify({
      message: `Hello ${body.name}!`,
      input: event,
    }),
  };

  callback(null, response);
}

export const provisionUserDataStorage: Handler = (event: CognitoUserPoolEvent, context: Context, callback: Callback) => {
  if (event.triggerSource !== 'PostConfirmation_ConfirmSignUp') {
    callback(Error('Invalid trigger source.'));
    return undefined; 
  }

  AWS.config.update({region: 'us-west-1'});
  // Pass in context for different results based on the development environment
  let fileStorage = new FileStorage(context);
  const params = { Bucket: 'fuego-photos-users', Key: `${event.userName}/` };
  fileStorage.S3.putObject(params, (err, data) => {
    if (err) {
      // If an error occurred, log it and return it as a response
      console.log(err, err.stack);
      callback(err, data);
    } else {
      // If the folder was created successfully, log and return the response data
      console.log(data);
      callback(null, data);
    }
  });
}