import { ApolloClient, ApolloLink, InMemoryCache } from '@apollo/client'
import createUploadLink from 'apollo-upload-client/createUploadLink.mjs'
import { apolloAuthLink } from './apolloAuthLink'
import { apolloCustomScalarsLink } from './apolloCustomScalars'

const url = `${process.env.NEXT_PUBLIC_API_URL}/graphql`

const uploadLink = createUploadLink({
  uri: url,
  credentials: 'include',
  fetchOptions: { cache: 'force-cache' },
})

const link = ApolloLink.from([apolloCustomScalarsLink, uploadLink])

const cache = new InMemoryCache({
  addTypename: true,
  resultCaching: false,
})

export const getApolloClient = () =>
  new ApolloClient({
    cache: cache,
    link: apolloAuthLink.concat(link),
    ssrMode: true,
    uri: url,
    credentials: 'include',
  })
