import { ApolloClient, ApolloLink, HttpLink, InMemoryCache } from '@apollo/client'
import { apolloCustomScalarsLink } from './apolloCustomScalars'
import { apolloAuthLink } from './apolloAuthLink'

const url = `${process.env.NEXT_PUBLIC_API_URL}/graphql`

const httpLink = new HttpLink({ uri: url, credentials: 'include', fetchOptions: 'cache-first' })

const link = ApolloLink.from([apolloCustomScalarsLink, httpLink])

const cache = new InMemoryCache({
  addTypename: true,
})

export const apolloClient = new ApolloClient({
  cache: cache,
  link: apolloAuthLink.concat(link),
  ssrMode: true,
})
