import type { LinksFunction } from '@remix-run/node';
import { Links, Meta, Outlet, Scripts, ScrollRestoration } from '@remix-run/react';
import '@repo/ui/tailwindcss';
import { Layout as ProvidersLayout } from './components/Layout';
import { Toaster } from '@repo/ui/components/shadcn/sonner';

export const links: LinksFunction = () => [
  { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
  {
    rel: 'preconnect',
    href: 'https://fonts.gstatic.com',
    crossOrigin: 'anonymous',
  },
  {
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap',
  },
];

export function Layout() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="bg-white dark:bg-black">
        <Toaster className="[&>*]:flex [&>*]:flex-row" richColors></Toaster>

        <ProvidersLayout ssrCookies={{}}>
          <Outlet />
        </ProvidersLayout>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default Layout;
