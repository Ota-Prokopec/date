import { Client, cacheExchange, fetchExchange } from 'urql'

const url = `${process.env.NEXT_PUBLIC_SERVER_ENDPOINT}/api/`

export const graphqlUrqlClient = new Client({
	url: url,
	exchanges: [cacheExchange, fetchExchange],
	fetchOptions: { credentials: 'include' },
})
