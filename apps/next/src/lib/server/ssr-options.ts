import dynamic from 'next/dynamic'

export const disableSSR = (page: React.FunctionComponent) => {
  return dynamic(() => Promise.resolve(page), { ssr: false })
}
