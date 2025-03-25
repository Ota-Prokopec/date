import { cn } from '@repo/ui/ts-lib/lib/utils'
import '@repo/ui/tailwindcss'
import { ReactScan } from '@/components/common/ReactScan'

type RootLayoutProps = Readonly<{
  children: React.ReactNode
}>
const rootLayout = async function RootLayout({ children }: RootLayoutProps) {
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
        className={cn('dark:bg-darkModeBackgroundColor', {
          //  dark: ssrCookies['colorTheme'] === 'dark' ? true : false,
        })}
      >
        <ReactScan />
        {children}
      </body>
    </html>
  )
}

export default rootLayout
