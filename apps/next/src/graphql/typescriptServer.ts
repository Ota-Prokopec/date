import { getSdk } from '@/graphql/generated/typescript'
import { envClient } from '@/lib/envClient'
import { parseCookies, stringifyCookies } from '@repo/next-storage/handlers'
import { GraphQLClient, type RequestMiddleware } from 'graphql-request'
import { cookies as nextCookies } from 'next/headers'

const url = `${envClient.NEXT_PUBLIC_API_URL}/graphql`

const requestMiddleware: RequestMiddleware<object> = async (request) => {
  const cookies = await nextCookies()
  const cookieHeader = stringifyCookies(parseCookies(cookies.getAll()))

  return {
    ...request,
    headers: { ...request.headers, Cookie: cookieHeader },
  }
}

const client = new GraphQLClient(url, {
  credentials: 'include',
  requestMiddleware: requestMiddleware,
})

export const sdkServer = getSdk(client)
