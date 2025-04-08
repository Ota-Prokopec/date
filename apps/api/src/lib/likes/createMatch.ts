import { db, drizzleSchema } from '@repo/db'

type CreateMatchProps = {
  userId: string
  matchingUserId: string
}
export const createMatch = async ({ userId, matchingUserId }: CreateMatchProps) => {
  const myMatch = db.insert(drizzleSchema.matches).values({
    matchedAt: new Date(Date.now()),
    matchedUserId: matchingUserId,
    userId,
  })

  const hisMatch = db.insert(drizzleSchema.matches).values({
    matchedAt: new Date(Date.now()),
    userId: matchingUserId,
    matchedUserId: userId,
  })

  return await Promise.all([hisMatch, myMatch])
}
