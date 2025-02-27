import { getSdk } from '@/graphql/generated/typescript'
import { envClient } from '@/lib/envClient'
import { GraphQLClient } from 'graphql-request'
import {} from 'next'

const url = `${envClient.NEXT_PUBLIC_API_URL}/graphql`

const client = new GraphQLClient(url, {
  credentials: 'include',
})

export const sdk = getSdk(client)
