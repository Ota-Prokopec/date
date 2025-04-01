import { drizzleSchema } from '@repo/db'
import { inArray } from 'drizzle-orm'
import { getUsers } from './getUsers'

export const getUsersByIds = async (userIds: string[]) => {
  const users = await getUsers((userSchema) => [inArray(userSchema.id, userIds as string[])])

  const grouped = Object.groupBy(users, (user) => user.userId)
  //! Sorted according to userId!!!!
  //? ! to force type to be nonOptional - because i know that when there is the "key" there has to be also the value
  return userIds.map((userId) => grouped[userId]?.at(0)!)
}
