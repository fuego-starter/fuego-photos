import { APIGatewayEvent,CognitoUserPoolEvent, ProxyCallback} from 'aws-lambda'
import { Context, ProxyHandler, ProxyResult } from 'aws-lambda';
// import aws-sdk to access s3 storage


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

export const provisionUserDataStorage: ProxyHandler = (event: CognitoUserPoolEvent, context: Context, callback: ProxyCallback) => {
  // Verify user in pool, then setup storage on s3
  let response: ProxyResult; // Needs setup and assignment
  callback(null, response);
}
