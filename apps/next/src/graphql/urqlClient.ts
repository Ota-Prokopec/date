import { envClient } from '@/lib/envClient'
import { Client, cacheExchange, fetchExchange } from 'urql'

const url = `${envClient.NEXT_PUBLIC_API_URL}/graphql`

export const urqlClient = new Client({
  url: url,
  fetchOptions: { cache: 'force-cache', credentials: 'include' },
  exchanges: [cacheExchange, fetchExchange],
})
