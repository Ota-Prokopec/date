import { createContext as authContext } from '@repo/graphql/server'
import { getLoaders, type Loaders } from './loaders/loaders'

type AuthContext = Awaited<ReturnType<typeof authContext>>

export type Context = Awaited<ReturnType<typeof createContext>>
type CreateContext = ({
  request,
}: {
  request: Request
}) => Promise<{ loaders: Loaders; isAuthenticated: boolean } & AuthContext>

export const createContext: CreateContext = async ({ request }: { request: Request }) => {
  const auth = await authContext({ request })
  const loaders: Loaders = getLoaders()
  const isAuthenticated = auth.session?.user.id ? true : false

  return { ...auth, isAuthenticated, loaders: loaders }
}
