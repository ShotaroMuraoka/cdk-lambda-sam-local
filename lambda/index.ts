import { Handler } from 'aws-cdk-lib/aws-lambda'

export const handler: Handler = async function () {
    return "Hello from SAM and the CDK!";
}
