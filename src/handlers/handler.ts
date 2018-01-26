import { APIGatewayEvent, Callback, Context, Handler } from 'aws-lambda';

export const helloWorld: Handler = (event: APIGatewayEvent, context: Context, callback: Callback) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Hello World!',
      input: event,
    }),
  };

  callback(null, response);
}

export const helloUser: Handler = (event: any, context: Context, callback: Callback) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: `Hello ${event.name}!`,
      input: event,
    }),
  };

  callback(null, response);
}
