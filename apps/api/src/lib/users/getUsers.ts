import { db, drizzleSchema } from '@repo/db'
import { type SQL } from 'drizzle-orm'
import {
  userSelectNonNullableColumnsFilter,
  userSelectSocialsFilledFilter,
} from './databaseUserSelectionOptions'
import { convertFromDatabaseUsersToAppUsers } from './databaseUsersConvertion'

export const getUsers = async (
  filters: (schema: typeof drizzleSchema.user) => SQL<unknown>[],
  params: Parameters<typeof db.query.user.findMany>[0] = {}
) => {
  const res = await db.query.user.findMany({
    where: (userSchema, { inArray, and }) =>
      and(
        userSelectSocialsFilledFilter,
        ...userSelectNonNullableColumnsFilter,
        ...filters(drizzleSchema.user)
      ),
    ...params,
  })

  return convertFromDatabaseUsersToAppUsers(res)
}
