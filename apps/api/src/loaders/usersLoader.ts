import { getUsersByIds } from '@/lib/users/getUsersByIds'
import DataLoader from 'dataloader'

export const createUsersLoader = () =>
  new DataLoader(async (userIds: readonly string[]) => {
    const users = await getUsersByIds(userIds as string[])

    return users
  })
