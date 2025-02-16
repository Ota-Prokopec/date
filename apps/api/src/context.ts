import { createContext as authContext } from '@repo/graphql/server'
import type { Loaders } from './loaders/loaders'

type AuthContext = Awaited<ReturnType<typeof authContext>>

export type Context = Awaited<ReturnType<typeof createContext>>
type CreateContext = ({
  request,
}: {
  request: Request
}) => Promise<{ loaders: Loaders } & AuthContext>

export const createContext: CreateContext = async ({ request }: { request: Request }) => {
  const auth = await authContext({ request })

  const loaders: Loaders = {}

  return { ...auth, loaders }
}
