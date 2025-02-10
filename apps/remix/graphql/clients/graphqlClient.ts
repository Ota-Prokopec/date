import { env } from '@/lib/env';
import { getSdk } from '@/graphql/generated/typescript-vanila';
import { GraphQLClient } from 'graphql-request';
import lodash from 'lodash';

type RequestConfig = ConstructorParameters<typeof GraphQLClient>[1];

const defaultSettings: RequestConfig = {
  credentials: 'include',
};
const url = `${env.NEXT_PUBLIC_API_URL}/api/graphql`;

const client = new GraphQLClient(url, defaultSettings);

export const graphqlSdk = getSdk(client);

export const getGraphqlSdk = (config?: RequestConfig) => {
  return getSdk(new GraphQLClient(url, lodash.merge(defaultSettings, config)));
};
