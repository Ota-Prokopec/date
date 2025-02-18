import { db, drizzleSchema } from '@repo/db'
import DataLoader from 'dataloader'
import { inArray } from 'drizzle-orm'
import { z } from 'zod'

export const createSocialLoader = () =>
  new DataLoader(async (userIds: readonly string[]) => {
    //* DataLoader needs to have userIds readonly and inArray needs it normal, so i add additional type checker
    const checkedListOfUserIds = z.string().array().parse(userIds)

    return await db
      .select()
      .from(drizzleSchema.socials)
      .where(inArray(drizzleSchema.socials.userId, checkedListOfUserIds))
  })
