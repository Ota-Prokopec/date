import { db } from '@repo/db'
import type { UserProfile } from '@repo/ts-types'
import DataLoader from 'dataloader'

export const createUserLoader = () =>
  new DataLoader(async (userIds: readonly string[]) => {
    const users = await db.query.user.findMany({
      where: (userSchema, { inArray }) => inArray(userSchema.id, userIds as string[]),
    })
    return users.map((user) => {
      const userAge = user.birthDate
        ? Math.floor(
            new Date(Date.now(), user.birthDate?.getTime()).getTime() * 1000 * 60 * 60 * 24 * 365
          )
        : null

      return {
        age: userAge,
        bio: user.bio,
        gender: user.gender,
        userId: user.id,
        username: user.name,
        profilePictureURL: user.image,
      } satisfies UserProfile
    })
  })
