import { db } from '@repo/db'

export const areUsersMatched = async (userId1: string, userId2: string) => {
  return (await db.query.matches.findFirst({
    where: (matchesSchema, { and, eq }) =>
      and(eq(matchesSchema.userId, userId1), eq(matchesSchema.matchedUserId, userId2)),
  }))
    ? true
    : false
}
