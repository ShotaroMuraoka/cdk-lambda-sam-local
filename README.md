# CDK Lambda SAM Local

## Requirement
* SAM CLI, version 1.40.1
* CDK 2.2.0 (build 4f5c27c)

## Usage

```bash
cdk synth --no-staging
sam local invoke MyTypeScriptFunction --no-event -t ./cdk.out/LambdaLocalSamStack.template.json
sam local invoke MyPythonFunction --no-event -t ./cdk.out/LambdaLocalSamStack.template.json
```
