import { GraphQLClient } from 'graphql-request';
import { Handler, HandlerEvent, HandlerContext } from '@netlify/functions';
import jwt from 'jsonwebtoken';
import { getSdk } from '../common/sdk';
import { AES } from 'crypto-ts';

interface IAdminRegisterInput {
  username: string;
  password: string;
}

const handler: Handler = async (event: HandlerEvent, context: HandlerContext) => {
  const { body, headers } = event;

  console.log(headers);

  if (!headers['x-pizzastack-secret-key'] || headers['x-pizzastack-secret-key'] !== 'mypizzastacksecretkey') {
    return {
      statusCode: 403,
      body: JSON.stringify({ message: "'x-pizzastack-secret-key' is missing or value is incorrect" }),
    };
  }

  const input: IAdminRegisterInput = JSON.parse(body!).input.admin;

  const sdk = getSdk(new GraphQLClient('http://localhost:8080/v1/graphql'));

  const password = AES.encrypt(input.password, 'jwtaccessecretpassword').toString();

  const data = await sdk.InsertAdmin({
    username: input.username,
    password: password,
  });

  const accessToken = jwt.sign(
    {
      'https://hasura.io/jwt/claims': {
        'x-hasura-default-role': 'admin',
        'x-hasura-allowed-roles': ['admin'],
        'x-hasura-user-id': data.insert_admin_one?.id,
      },
    },
    'jwtaccessecret'
  );
  return {
    statusCode: 200,
    body: JSON.stringify({ accessToken }),
  };
};

export { handler };
