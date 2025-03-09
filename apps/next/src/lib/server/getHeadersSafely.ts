import { browser } from '@repo/ui/ts-lib/hooks/useBrowser'

export const getHeadersSafely = async () => {
  if (browser) return {}
  const nextHeaders = (await import('next/headers')).headers
  const headers = await nextHeaders()
  return headers
    .entries()
    .reduce<
      Record<string, string>
    >((acc, currentValue) => ({ ...acc, [currentValue[0]]: currentValue[1] }), {})
}
