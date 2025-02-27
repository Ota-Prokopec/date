'use server'

import { sdkServer } from '@/graphql/typescriptServer'

export const getAccountDataAction = async () => {
  return (await sdkServer.getAccountProfile()).getAccountProfile
}
