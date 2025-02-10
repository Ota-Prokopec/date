import { env } from '@/lib/env';
import { Client, cacheExchange, fetchExchange } from 'urql/core';
import { multipartFetchExchange } from '@urql/exchange-multipart-fetch';
import { persistedExchange } from '@urql/exchange-persisted';

const url = `${env.NEXT_PUBLIC_API_URL}/api/graphql`;

export const urqlClient = new Client({
  url: url,
  exchanges: [cacheExchange, fetchExchange],
  fetchOptions: { credentials: 'include' },
});
