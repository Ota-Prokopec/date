import { envClient } from '@/lib/envClient'
import { ApolloClient, InMemoryCache } from '@apollo/client'

const url = `${envClient.NEXT_PUBLIC_API_URL}/graphql`

export const apolloClient = new ApolloClient({
  uri: url,
  cache: new InMemoryCache({}),
  credentials: 'include',
})
