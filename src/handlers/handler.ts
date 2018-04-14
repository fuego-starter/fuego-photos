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
  AWS.config.update({region: 'us-west-1'});
  let fileStorage = new FileStorage(context);
  const params = { Bucket: 'fuego-users', Key: `${event.userName}/` };
  fileStorage.S3.putObject(params, (err, data) => {
    if (err) {
      console.log(err, err.stack);
      callback(err, data);
    } else {
      console.log(data);
      callback(null, data);
    }
  });
}