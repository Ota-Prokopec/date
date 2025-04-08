import { createContext as authContext } from '@repo/graphql/server'
import { getLoaders, type Loaders } from './loaders/loaders'
import type { Locale } from '@repo/i18n-next'
import { localeCookieName, localeZodSchema } from '@repo/i18n-next/options'
import lodash from 'lodash'

type AuthContext = Awaited<ReturnType<typeof authContext>>

export type Context = { loaders: Loaders; isAuthenticated: boolean } & AuthContext & {
    session: { user: { locale: Locale | undefined } } | null
  }

type CreateContext = ({ request }: { request: Request }) => Promise<Context>

export const createContext: CreateContext = async ({ request }: { request: Request }) => {
  const auth = await authContext({ request })

  const loaders: Loaders = getLoaders()
  const isAuthenticated = auth.session?.user.id ? true : false
  const locale: Locale | undefined = localeZodSchema
    .optional()
    .parse(auth.cookies.filter(({ name }) => name === localeCookieName).at(0)?.value)

  return {
    ...lodash.merge(auth, { session: { user: { locale: locale } } }),
    isAuthenticated,
    loaders: loaders,
  }
}
