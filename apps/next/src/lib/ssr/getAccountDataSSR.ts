import { sdk } from '@/graphql/typescriptClient'

type GetAccountDataSSRProps = Record<never, never>

export const getAccountDataSSR = async () => {
  return await sdk.getAccountProfile()
}
