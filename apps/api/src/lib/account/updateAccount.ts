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
    const socialPlatforms: SocialProfilePlatform[] = getObjectKeys(socials)
    const usersSocialsUpdatePromise = socialPlatforms.map((socialPlatform) =>
      db
        .insert(drizzleSchema.socials)
        .values({
          link: socials[socialPlatform]!.link,
          platformProfileId: socials[socialPlatform]!.profileId,
          userId: userId,
          type: socialPlatform,
        })
        .onConflictDoUpdate({
          target: [drizzleSchema.socials.userId, drizzleSchema.socials.type],
          set: {
            link: socials[socialPlatform]!.link,
            platformProfileId: socials[socialPlatform]!.profileId,
          },
        })
    )

    awaiting.push(...usersSocialsUpdatePromise)
  }

  // awaiting - no info result
  return await Promise.all(awaiting)
}
