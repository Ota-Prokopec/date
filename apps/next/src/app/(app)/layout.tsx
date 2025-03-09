import { Layout } from '@/components/Layout'
import { getSession } from '@repo/better-auth/session'
import { cookieStorageZodSchema } from '@repo/cookies/options'
import type { Locale } from '@repo/i18n-next'
import { parseCookies } from '@repo/next-storage/handlers'
import { Center } from '@repo/ui/components/common/Center'
import { Toaster } from '@repo/ui/components/shadcn/sonner'
import { getMessages, getTimeZone } from 'next-intl/server'
import { headers as getHeaders, cookies as nextCookies } from 'next/headers'

//@ts-expect-error
import '@repo/ui/tailwindcss'

type RootLayoutProps = Readonly<{
  children: React.ReactNode
}>

export default async function RootLayout({ children }: RootLayoutProps) {
  const headers = await getHeaders()

  //	const pageUrl = headers.get('url')?.replace(':3000', '')

  //if (!pageUrl) throw new Error('no page found - the url is invalid - no page in url')

  //	const url = new URL(pageUrl)

  //const pathname = url.pathname

  //	if (!pathname) throw new Error(`pathname does not exist, pathname: ${pathname}`)

  const session = await getSession({ headers: headers })

  //	if (!session && !pathname.startsWith('/auth')) redirect('/auth')
  const cookies = parseCookies((await nextCookies()).getAll())

  const ssrCookies = cookieStorageZodSchema.parse({
    ...cookies,
  })

  const locale: Locale = ssrCookies['locale']
  console.log(locale)

  const ssrMessages = await getMessages({ locale: locale })
  const timeZone = await getTimeZone()

  return (
    <Layout timeZone={timeZone} locale={locale} ssrMessages={ssrMessages} ssrCookies={ssrCookies}>
      <Toaster
        style={{ margin: '10px' }}
        className="[&>*]:flex [&>*]:flex-row"
        richColors
      ></Toaster>
      <Center className="w-full min-h-[100vh] h-auto">{children}</Center>
    </Layout>
  )
}
