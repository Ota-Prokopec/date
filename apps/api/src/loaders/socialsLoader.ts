import { db, drizzleSchema, SocialsSelect } from '@repo/db'
import type { SocialProfileDataParams, SocialsData } from '@repo/ts-types'
import { groupBy } from '@repo/utils/common/groupBy'
import DataLoader from 'dataloader'
import { inArray } from 'drizzle-orm'
import { z } from 'zod'

export const createSocialLoader = () =>
  new DataLoader(async (userIds: readonly string[]): Promise<SocialsData | undefined[]> => {
    //* DataLoader needs to have userIds readonly and inArray needs it normal, so i add additional type checker
    const checkedListOfUserIds = z.string().array().parse(userIds)

    const res = await db
      .select()
      .from(drizzleSchema.socials)
      .where(inArray(drizzleSchema.socials.userId, checkedListOfUserIds))

    const grouped = groupBy(res, (item) => item.userId)
    const returningValue = grouped.map((itemGroupedByUserId) =>
      itemGroupedByUserId
        .map((item) => ({
          [item.type]: {
            link: item.link,
            profileId: item.platformProfileId,
          } satisfies SocialProfileDataParams,
        }))
        .reduce((acc, currentValue) => ({ ...acc, ...currentValue }), {} as SocialsData)
    )

    return returningValue
  })
