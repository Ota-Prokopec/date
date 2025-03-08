import { envClient } from '@/lib/envClient'
import { ApolloClient, ApolloLink, HttpLink, InMemoryCache } from '@apollo/client'
import { customScalarsLink } from './apolloCustomScalars'

const url = `${envClient.NEXT_PUBLIC_API_URL}/graphql`

const httpLink = new HttpLink({ uri: url, credentials: 'include', fetchOptions: 'cache-first' })

const link = ApolloLink.from([httpLink, customScalarsLink])

const cache = new InMemoryCache({
  addTypename: true,

  typePolicies: {
    T: {
      fields: {
        date: {
          read(existing: string | undefined) {
            return existing ? new Date(existing) : null
          },
        },
      },
    },
  },
})

export const apolloClient = new ApolloClient({
  cache: cache,
  link,
  devtools: { enabled: true },
})
