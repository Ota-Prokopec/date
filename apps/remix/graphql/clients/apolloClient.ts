import { env } from '@/lib/env';

import { InMemoryCache } from '@apollo/client/cache/index';
import {
  ApolloClient,
  ApolloLink,
  createHttpLink,
  type NormalizedCacheObject,
} from '@apollo/client/core/index';
import createUploadLink from 'apollo-upload-client/createUploadLink.mjs';

const url = `${env.NEXT_PUBLIC_API_URL}/api/graphql`;

const httpLink = createHttpLink({
  uri: url,
  credentials: 'include', // This is crucial for sending cookies
});
const uploadLink = createUploadLink({
  uri: url,
  credentials: 'include',
  headers: {
    'Apollo-Require-Preflight': 'true',
  },
});

const link = ApolloLink.from([httpLink, uploadLink]);

export const apolloClient: ApolloClient<NormalizedCacheObject> = new ApolloClient({
  cache: new InMemoryCache({
    addTypename: true,
    typePolicies: {
      Query: {
        fields: {
          userProfile: {
            keyArgs: ['userId'],
          },
        },
      },
    },
  }),
  link: link,
  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'cache-and-network',
    },
  },
});
