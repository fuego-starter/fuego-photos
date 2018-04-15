import { CognitoUserPoolEvent } from 'aws-lambda';

export class UserPoolEventStub {
  version: number;
  triggerSource: "PreSignUp_SignUp" | "PostConfirmation_ConfirmSignUp" | "PreAuthentication_Authentication" | "PostAuthentication_Authentication" | "CustomMessage_SignUp" | "CustomMessage_AdminCreateUser" | "CustomMessage_ResendCode" | "CustomMessage_ForgotPassword" | "CustomMessage_UpdateUserAttribute" | "CustomMessage_VerifyUserAttribute" | "CustomMessage_Authentication" | "DefineAuthChallenge_Authentication" | "CreateAuthChallenge_Authentication" | "VerifyAuthChallengeResponse_Authentication";
  constructor() {
    this.version = 1.0
    this.triggerSource =  "PostConfirmation_ConfirmSignUp";
  }
}