import { Stack, StackProps } from "aws-cdk-lib";
import { Construct } from "constructs";
import { UserPool } from "aws-cdk-lib/aws-cognito";
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export interface IPasswordlessAuthStack extends StackProps {}

export class PasswordlessAuthStack extends Stack {
  constructor(scope: Construct, id: string, props?: IPasswordlessAuthStack) {
    super(scope, id, props);
    const userPool = new UserPool(this, "UserPool");
  }
}

//TODO continue here: following this: https://catalog.workshops.aws/cognito-webauthn-passwordless/en-US/20-backend/21-cdk-init.
// I  need to propagate env to my Stack so it could synth correctly
