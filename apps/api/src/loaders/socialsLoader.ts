import { db, drizzleSchema } from '@repo/db'
import type { SocialProfileDataParams, SocialsData } from '@repo/ts-types'
import DataLoader from 'dataloader'
import { inArray } from 'drizzle-orm'
import { z } from 'zod'

/**
 * 
 * Returns  (instagram?: {
        link: string;
        profileId: string;
    } | undefined)[]
     because user profile will always have {instagram?: {...}} and it can be either filled with the real information or just empty object {} if the user did not share its socials
 */
export const createSocialLoader = () =>
  new DataLoader(async (userIds: readonly string[]): Promise<SocialsData[]> => {
    //* DataLoader needs to have userIds readonly and inArray needs it normal, so i add additional type checker
    const checkedListOfUserIds = z.string().array().parse(userIds)

    const res = await db
      .select()
      .from(drizzleSchema.socials)
      .where(inArray(drizzleSchema.socials.userId, checkedListOfUserIds))

    const grouped = Object.groupBy(res, (item) => item.userId)
    //! Sorted according to userId!!!!
    const sorted = userIds.map((userId) => grouped[userId] || [])
    return sorted.map((items) => {
      const SocialsTypeValue = items.map((item) => ({
        [item.type]: {
          link: item.link,
          profileId: item.platformProfileId,
        } satisfies SocialProfileDataParams,
      }))
      return SocialsTypeValue.reduce<SocialsData>((acc, currentValue) => {
        if (!acc) return currentValue
        if (!currentValue) return acc
        return { ...acc, ...currentValue }
      }, {} as SocialsData)
    })
  })
