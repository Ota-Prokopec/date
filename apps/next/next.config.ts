import type { NextConfig } from 'next'
import createNextIntlPlugin from 'next-intl/plugin'

const withNextIntl = createNextIntlPlugin()

const nextJsImageConfig: NextConfig['images'] = {
  remotePatterns: [
    {
      protocol: 'https',
      hostname: '**',
    },
  ],
}

const nextConfig: NextConfig = {
  images: nextJsImageConfig,
  reactStrictMode: true,
}

export default withNextIntl(nextConfig)
