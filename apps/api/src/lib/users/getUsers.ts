import { db, drizzleSchema, type UserSelect } from '@repo/db'
import type { UserProfileData } from '@repo/ts-types'
import { isNotNull } from 'drizzle-orm'

export const getUsers = async (userIds: string[]): Promise<Omit<UserProfileData, 'socials'>[]> => {
  const notNullableCollumns = [
    isNotNull(drizzleSchema.user.birthDate),
    isNotNull(drizzleSchema.user.gender),
    isNotNull(drizzleSchema.user.image),
    isNotNull(drizzleSchema.user.lookingForGender),
    isNotNull(drizzleSchema.user.name),
  ]
  const res = await db.query.user.findMany({
    where: (userSchema, { inArray, and }) =>
      and(inArray(userSchema.id, userIds as string[]), ...notNullableCollumns),
  })

  return transformToUsersWithAge(res)
}

const transformToUsersWithAge = (responseArray: UserSelect[]) => {
  return responseArray.map((user) => {
    const userAge = Math.floor(
      (Date.now() - user.birthDate!?.getTime()) / 1000 / 60 / 60 / 24 / 365
    )

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
}
