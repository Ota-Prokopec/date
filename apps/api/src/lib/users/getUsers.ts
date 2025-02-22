import { db, drizzleSchema, type UserSelect } from '@repo/db'
import type { UserProfileData } from '@repo/ts-types'
import { eq, exists, isNotNull } from 'drizzle-orm'

export const getUsers = async (
  userIds: string[]
): Promise<(Omit<UserProfileData, 'socials'> | undefined)[]> => {
  const notNullableCollumns = [
    isNotNull(drizzleSchema.user.birthDate),
    isNotNull(drizzleSchema.user.gender),
    isNotNull(drizzleSchema.user.image),
    isNotNull(drizzleSchema.user.lookingForGender),
    isNotNull(drizzleSchema.user.name),
  ]
  const res = await db.query.user.findMany({
    where: (userSchema, { inArray, and }) =>
      and(
        inArray(userSchema.id, userIds as string[]),
        exists(
          db
            .select()
            .from(drizzleSchema.socials)
            .where(eq(drizzleSchema.socials.userId, drizzleSchema.user.id)) // Ensure the user has at least one social entry
        ),
        ...notNullableCollumns
      ),
  })

  const users = convertToUserWithAge(res)
  const grouped = Object.groupBy(users, (user) => user.userId)
  //! Sorted according to userId!!!!
  return userIds.map((userId) => grouped[userId]?.at(0))
}

//

export const getUsersAge = (usersBirthData: Date) => {
  return Math.floor((Date.now() - usersBirthData!?.getTime()) / 1000 / 60 / 60 / 24 / 365)
}

const convertToUserWithAge = (responseArray: UserSelect[]) => {
  return responseArray.map((user) => {
    const userAge = user.birthDate ? getUsersAge(user.birthDate) : null

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
