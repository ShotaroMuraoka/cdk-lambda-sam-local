import { Stack, StackProps } from 'aws-cdk-lib'
import { Construct } from 'constructs'
import * as path from "path";
import * as lambda from 'aws-cdk-lib/aws-lambda'
import * as nodeLambda from 'aws-cdk-lib/aws-lambda-nodejs'

export class LambdaLocalSamStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props)

    new nodeLambda.NodejsFunction(this, 'MyTypeScriptFunction', {
      entry: path.join(__dirname, '../lambda/index.ts'),
      handler: 'handler',
    })

    new lambda.Function(this, 'MyPythonFunction', {
      runtime: lambda.Runtime.PYTHON_3_7,
      handler: 'app.lambda_handler',
      code: lambda.Code.fromAsset('./lambda'),
    })
  }
}
