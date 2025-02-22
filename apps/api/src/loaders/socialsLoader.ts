import { db, drizzleSchema, SocialsSelect } from '@repo/db'
import type { SocialProfileDataParams, SocialsData } from '@repo/ts-types'
import { groupBy } from '@repo/utils/common/groupBy'
import DataLoader from 'dataloader'
import { inArray } from 'drizzle-orm'
import { z } from 'zod'

export const createSocialLoader = () =>
  new DataLoader(async (userIds: readonly string[]): Promise<(SocialsData | undefined)[]> => {
    //* DataLoader needs to have userIds readonly and inArray needs it normal, so i add additional type checker
    const checkedListOfUserIds = z.string().array().parse(userIds)

    const res = await db
      .select()
      .from(drizzleSchema.socials)
      .where(inArray(drizzleSchema.socials.userId, checkedListOfUserIds))

    const grouped = Object.groupBy(res, (item) => item.userId)
    //! Sorted according to userId!!!!
    const returningValue = userIds.map((userId) => grouped[userId] || undefined)
    return returningValue.map((items) =>
      items
        ?.map((item) =>
          item
            ? {
                [item.type]: {
                  link: item.link,
                  profileId: item.platformProfileId,
                } satisfies SocialProfileDataParams,
              }
            : undefined
        )
        .reduce((acc, currentValue) => {
          if (!acc) return currentValue
          if (!currentValue) return acc
          return { ...acc, ...currentValue }
        }, {} as SocialsData)
    )
  })
