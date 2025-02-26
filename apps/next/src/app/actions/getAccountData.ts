import { sdk } from '@/graphql/typescriptClient'

export const getAccountDataAction = async () => {
  return (await sdk.getAccountProfile()).getAccountProfile
}
