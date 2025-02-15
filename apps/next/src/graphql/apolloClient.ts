import { ApolloClient, InMemoryCache } from '@apollo/client'

const url = `${process.env.NEXT_PUBLIC_SERVER_ENDPOINT}/api/`

export const apolloClient = new ApolloClient({
	uri: url,
	cache: new InMemoryCache({}),
	credentials: 'include',
})
