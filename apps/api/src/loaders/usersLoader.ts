import { db, drizzleSchema } from '@repo/db'
import type { UserProfileData } from '@repo/ts-types'
import DataLoader from 'dataloader'
import { isNotNull } from 'drizzle-orm'

export const createUserLoader = () =>
  new DataLoader(async (userIds: readonly string[]) => {
    const notNullableCollumns = [
      isNotNull(drizzleSchema.user.birthDate),
      isNotNull(drizzleSchema.user.gender),
      isNotNull(drizzleSchema.user.image),
      isNotNull(drizzleSchema.user.lookingForGender),
      isNotNull(drizzleSchema.user.name),
    ]
    const users = await db.query.user.findMany({
      where: (userSchema, { inArray, and }) =>
        and(inArray(userSchema.id, userIds as string[]), ...notNullableCollumns),
    })

    return users.map((user) => {
      const userAge = user.birthDate
        ? Math.floor(
            new Date(Date.now(), user.birthDate?.getTime()).getTime() * 1000 * 60 * 60 * 24 * 365
          )
        : null

      //! Only collumns in notNullableCollumns can have ! mark, so that i am sure, there will be valid values
      return {
        age: userAge!,
        bio: user.bio,
        gender: user.gender!,
        userId: user.id,
        username: user.name,
        profilePictureURL: user.image!,
        lookingForGender: user.lookingForGender!,
      } satisfies Omit<UserProfileData, 'socials'>
    })
  })
