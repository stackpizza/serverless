import { GraphQLClient } from 'graphql-request';
import { Handler, HandlerEvent, HandlerContext } from '@netlify/functions';
import jwt from 'jsonwebtoken';
import { getSdk } from '../common/sdk';

interface IAdminRegisterInput {
  username: string;
  password: string;
}

const handler: Handler = async (event: HandlerEvent, context: HandlerContext) => {
  const { body } = event;
  const input: IAdminRegisterInput = JSON.parse(body!).input.admin;

  const sdk = getSdk(new GraphQLClient('http://localhost:8080/v1/graphql'));

  const data = await sdk.InsertAdmin(input);

  const accessToken = jwt.sign(
    {
      'https://hasura.io/jwt/claims': {
        'x-hasura-default-role': 'admin',
        'x-hasura-allowed-roles': ['admin'],
        'x-hasura-user-id': data.insert_admin?.returning[0].id,
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
