import { integer, pgEnum, pgTable, text } from 'drizzle-orm/pg-core'
import { user } from './auth-schema'
import { createSelectSchema } from 'drizzle-zod'

export const socialsTypeEnum = pgEnum('socialsType', ['instagram'])

export const socials = pgTable('socials', {
  id: integer('id').primaryKey().generatedAlwaysAsIdentity(),
  userId: text('userId')
    .notNull()
    .references(() => user.id),
  type: socialsTypeEnum('type').notNull(),
  link: text('link').notNull(),
  platformProfileId: text('platformProfileId').notNull(),
})

export const socialsSelectSchema = createSelectSchema(socials)
export type SocialsSelect = typeof socials.$inferSelect
export type SocialsInsert = typeof socials.$inferInsert
