import { getHeadersSafely } from '@/lib/server/getHeadersSafely'
import { setContext } from '@apollo/client/link/context'

export const apolloAuthLink = setContext(async () => {
  //? 1 - 1 same headers as the user has in the browser (important is that API and FRONTEND are on the same ROOT URL!)
  const headers = await getHeadersSafely()

  return {
    headers: headers,
  }
})
