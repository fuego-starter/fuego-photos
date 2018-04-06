import { APIGatewayEvent, CognitoUserPoolEvent, ProxyCallback} from 'aws-lambda'
import { Context, ProxyHandler, Handler, ProxyResult, Callback } from 'aws-lambda';
<<<<<<< HEAD
import * as AWS from "aws-sdk";
import { FileStorage } from '../../test/support/AWS-wrapper';

=======
import { S3 } from "aws-sdk";
>>>>>>> 0cc6cbe93bc2b5e554f9fdd3e5752e300946a67b

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
  let body = JSON.parse(event.body);
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
<<<<<<< HEAD
  AWS.config.update({region: 'us-west-1'});
  let s3Storage = new FileStorage;
  const params = { Bucket: 'fuego-photos-users', Key: `${event.userName}/` };
  s3Storage.S3.putObject();
=======
>>>>>>> 0cc6cbe93bc2b5e554f9fdd3e5752e300946a67b
  callback(null, event);
}