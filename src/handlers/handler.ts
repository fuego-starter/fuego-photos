import { APIGatewayEvent,CognitoUserPoolEvent, ProxyCallback} from 'aws-lambda'
import { Context, ProxyHandler, Handler, ProxyResult, Callback } from 'aws-lambda';
import S3 from "aws-sdk/clients/s3";


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
  // Ensure that correct lambda trigger was used PostConfirmation
  // Verify user in pool via username
  // Setup storage on s3


  callback(null, event);
}
