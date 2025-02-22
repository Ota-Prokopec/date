import { getUsers } from '@/lib/users/getUsers'
import { groupBy } from '@repo/utils/common/groupBy'
import DataLoader from 'dataloader'

export const createUserLoader = () =>
  new DataLoader(async (userIds: readonly string[]) => {
    const users = await getUsers(userIds as string[])

    return users
  })
