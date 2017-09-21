import AWS from "aws-sdk";

// Set the profile if yo have more than 1 in your aws config
const credentials = new AWS.SharedIniFileCredentials({profile: 'workshop'});
AWS.config.credentials = credentials;

AWS.config.update({ region: "us-east-1" });

export function call(action, params) {
  const dynamoDb = new AWS.DynamoDB.DocumentClient();

  return dynamoDb[action](params).promise();
}