import { Layout } from '@/components/Layout'
import { cookieStorageZodSchema } from '@repo/cookies/options'
import { parseCookies } from '@repo/next-storage/handlers'
import { Center } from '@repo/ui/components/common/Center'
import { cn } from '@repo/ui/ts-lib/lib/utils'
import { headers as getHeaders, cookies as nextCookies } from 'next/headers'
import { Toaster } from '@repo/ui/components/shadcn/sonner'
import { getMessages } from 'next-intl/server'
import type { Locale } from '@repo/i18n-next'
import { getSession } from '@repo/better-auth/session'
import { getTimeZone } from 'next-intl/server'

//@ts-expect-error
import '@repo/ui/tailwindcss'

type RootLayoutProps = Readonly<{
  children: React.ReactNode
}>

export default async function RootLayout({ children }: RootLayoutProps) {
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
        {children}
      </body>
    </html>
  )
}
