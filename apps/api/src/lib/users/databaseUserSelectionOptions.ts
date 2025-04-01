import { db, drizzleSchema } from '@repo/db'
import { eq, exists, isNotNull } from 'drizzle-orm'

export const userSelectNonNullableColumnsFilter = [
  isNotNull(drizzleSchema.user.birthDate),
  isNotNull(drizzleSchema.user.gender),
  isNotNull(drizzleSchema.user.image),
  isNotNull(drizzleSchema.user.lookingForGender),
  isNotNull(drizzleSchema.user.name),
] as const

export const userSelectSocialsFilledFilter = exists(
  db
    .select()
    .from(drizzleSchema.socials)
    .where(eq(drizzleSchema.socials.userId, drizzleSchema.user.id)) // Ensure the user has at least one social entry
)
