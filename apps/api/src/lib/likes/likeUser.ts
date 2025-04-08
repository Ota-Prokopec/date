import { db, drizzleSchema } from '@repo/db'
import type { SwipeResponse } from '@repo/ts-types'
import { and, eq } from '@repo/db/orm'
import { createMatch } from './createMatch'

type LikeUserProps = {
  userId: string
  likedUserId: string
}

export const likeUser = async ({ likedUserId, userId }: LikeUserProps): Promise<SwipeResponse> => {
  const didThePersonLikeMe = await db.query.likes.findFirst({
    where: (likesSchema, { eq, and }) =>
      and(eq(likesSchema.userId, likedUserId), eq(likesSchema.likedUserId, userId)),
  })

  if (didThePersonLikeMe) {
    //? db delete that existing row (didThePersonLikeMe)
    const deleteHisLike = db
      .delete(drizzleSchema.likes)
      .where(
        and(
          eq(drizzleSchema.likes.userId, likedUserId),
          eq(drizzleSchema.likes.likedUserId, userId)
        )
      )
    //? db insert match
    const newMatch = createMatch({ userId, matchingUserId: likedUserId })

    await Promise.all([deleteHisLike, newMatch])

    return { isMatch: true }
  } else {
    await db
      .insert(drizzleSchema.likes)
      .values({ userId: userId, likedUserId: likedUserId, likedAt: new Date(Date.now()) })

    return { isMatch: false }
  }
}
