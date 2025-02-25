import type { UpdateAccountArgs } from '@/resolvers/user'
import { db, drizzleSchema, type UserInsert } from '@repo/db'
import type { SocialProfilePlatform } from '@repo/ts-types'
import { getObjectKeys } from '@repo/utils/common/object'
import { and, eq } from 'drizzle-orm'

export const updateAccountInformation = async (
  { username, bio, birthDate, socials, gender, lookingForGender }: UpdateAccountArgs,
  userId: string
) => {
  let awaiting: Promise<unknown>[] = []

  awaiting.push(
    db
      .update(drizzleSchema.user)
      .set({
        name: username ? username : undefined,
        bio,
        birthDate,
        gender,
        lookingForGender,
      })
      .where(eq(drizzleSchema.user.id, userId))
  )

  //updating user's socials
  if (socials) {
    const socialsTypes: SocialProfilePlatform[] = getObjectKeys(socials)
    const usersSocialsUpdatePromise = socialsTypes.map((socialType) =>
      db
        .update(drizzleSchema.socials)
        .set({
          link: socials[socialType]?.link,
          platformProfileId: socials[socialType]?.profileId,
        })
        .where(
          and(eq(drizzleSchema.socials.userId, userId), eq(drizzleSchema.socials.type, socialType))
        )
    )

    awaiting.push(...usersSocialsUpdatePromise)
  }

  // awaiting - no info result
  return await Promise.all(awaiting)
}
