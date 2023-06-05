# Graph Endpoint with Serverless CLI, Apolo Server, and AWS Lambda

documentation on how to set one of these up is in progress so if you notice something missing or incorrect please open an issue.

## Getting Started

<br />

### AWS CLI

<br />

You will need to install and configure the AWS CLI v2 to deploy this endpoint. Instructions and full documentation on the aws CLI can be found at: [AWS CLI 2](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-configure.html#cli-configure-quickstart-config) </br>
see below for OS Specific installer packages and instructions

<br />

#### Install the AWS CLI

- Windows: for windows users you will need to download and run the
  [AWS CLI 2 MSI Installer](https://awscli.amazonaws.com/AWSCLIV2.msi)

- MacOS: for MacOS users if the cli installation mathod does not work or you prefer to use an installer package you will need to download and run the
  [AWS CLI 2 PKG Installer](https://awscli.amazonaws.com/AWSCLIV2.pkg)

- Linux: for linux users if the cli installation mathod does not work or you prefer to use a manual installation method you will need to download and run the
  [AWS CLI 2 ZIP Installer](https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip)

to confirm the CLI is installed run the following command in your terminal

```
aws --version
```

and you should see something like this

```
aws-cli/2.0.30 Python/3.7.4 Darwin/19.6.0 botocore/2.0.0dev31
```

Finally you will need to configure the CLI with your AWS credentials. For full details on how to do this refer to this documentation found at the top of the page and look for "Configuring the AWS CLI" </br>

The short version is you will need to run the configure command in your terminal and follow the prompts. Be sure to have the following information on hand:

- AWS Access Key ID
- AWS Secret Access Key
- Default region name (typically this is us-east-1 for us)
- Default output format (typically this is json)

```
aws configure
```

Additionally it is best practice to set up an aditional AWS CLI Profile specifically for serverless to use for deployment of your endpoint. To do this you will need to have an AWS account and an IAM user with the following permissions policies attached (this is for serverless cli to deploy the endpoint, try to avoid using your admin account if possible):

- AWSLambda_FullAccess
- AWSCodeDeployRoleForLambda
- AWSCloudFormationFullAccess
- AmazonS3FullAccess

These policies and permissions groups will likely change in the future as we build out custom policies and roles so alwasy check with the team/current aws admin for the most up to date information.

<br />

### Serverless CLI

<br />

TLast thing to install is the serverless CLI. This is what we will use to deploy our endpoint to AWS. To install the serverless CLI run the following command in your terminal

```
npm install -g serverless
```

in the serverless.yml file change the name on the first line from apollo-lambda to whatever you want to call your endpoint. This will be the name of the endpoint in AWS and the serverlessx cli will use this name to create a lambda function, S3 Bucket, API Gateway, and Application Stack. </br>

download this repo as a .zip - initilize a new repository for your endpoint - and finally run

```
serverless deploy
```

### Dependancy Docs

[Apollo Server](https://www.apollographql.com/docs/apollo-server/)</br>
[Apollo Server Lambda](https://www.apollographql.com/docs/apollo-server/deployment/lambda)</br>
[serverless-express](https://github.com/vendia/serverless-express) </br>
[Serverless Framework](https://www.serverless.com/framework/docs)</br>
[GraphQL](https://graphql.org/learn/)</br>
[GraphQL-Tag](https://github.com/apollographql/graphql-tag#readme)</br>
[NodeJS](https://nodejs.org/en/docs/)</br>
[AWS Lambda](https://docs.aws.amazon.com/lambda/latest/dg/welcome.html)</br>
[AWS API Gateway](https://docs.aws.amazon.com/apigateway/latest/developerguide/welcome.html)</br>
[AWS Cloud Formation](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/Welcome.html)</br>
