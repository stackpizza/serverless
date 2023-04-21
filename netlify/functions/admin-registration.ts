import { GraphQLClient } from 'graphql-request';
import { Handler, HandlerEvent, HandlerContext } from '@netlify/functions';
import jwt from 'jsonwebtoken';
import { getSdk } from '../common/sdk';
import { hashPassword } from '../common/password';
import { signToken } from '../common/jwt';

interface IAdminRegisterInput {
  username: string;
  password: string;
}

const handler: Handler = async (event: HandlerEvent, context: HandlerContext) => {
  const { body, headers } = event;

  if (!headers['x-pizzastack-secret-key'] || headers['x-pizzastack-secret-key'] !== 'mypizzastacksecretkey') {
    return {
      statusCode: 403,
      body: JSON.stringify({ message: "'x-pizzastack-secret-key' is missing or value is incorrect" }),
    };
  }

  const input: IAdminRegisterInput = JSON.parse(body!).input.admin;

  const sdk = getSdk(new GraphQLClient('http://localhost:8080/v1/graphql'));

  const password = hashPassword(input.password);

  const data = await sdk.InsertAdmin({
    username: input.username,
    password: password,
  });

  const accessToken = signToken(data.insert_admin_one?.id);

  return {
    statusCode: 200,
    body: JSON.stringify({ accessToken }),
  };
};

export { handler };
