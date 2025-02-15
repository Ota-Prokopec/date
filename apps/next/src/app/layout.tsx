import { Layout } from '@/components/Layout'
import { cookieStorageZodSchema } from '@repo/cookies/options'
import { parseCookies } from '@repo/next-storage/handlers'
import { Center } from '@repo/ui/components/common/Center'
import { cn } from '@repo/ui/ts-lib/lib/utils'
import { headers as getHeaders, cookies as nextCookies } from 'next/headers'
import { Toaster } from '@repo/ui/components/shadcn/sonner'
//@ts-expect-error
import '@repo/ui/tailwindcss'
import { getMessages } from 'next-intl/server'
import type { Locale } from '@repo/i18n-next'
import { getSession } from '@repo/better-auth/session'

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

  const ssrCookies = cookieStorageZodSchema.parse(parseCookies((await nextCookies()).getAll()))

  const locale: Locale = 'en'

  const ssrMessages = await getMessages({ locale: locale })

  return (
    <html>
      <title>Musify</title>

      <head>
        <meta
          name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1, maximum-scale=1, minimum-scale=1, width=device-width, height=device-height, user-scalable=no"
        />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
        <link rel="apple-touch-icon-precomposed" href="/favicon.ico" />
        <link rel="shortcut icon" href="/favicon.ico" />
      </head>

      <body
        className={cn('w-[100vw] min-h-[100vh] h-auto dark:bg-darkModeBackgroundColor', {
          //  dark: ssrCookies['colorTheme'] === 'dark' ? true : false,
        })}
      >
        <Layout locale={locale} ssrMessages={ssrMessages} ssrCookies={ssrCookies}>
          <Toaster
            style={{ margin: '10px' }}
            className="[&>*]:flex [&>*]:flex-row"
            richColors
          ></Toaster>
          <Center className="w-full min-h-[100vh] h-auto">{children}</Center>
        </Layout>
      </body>
    </html>
  )
}
