import { integer, pgTable, text, timestamp, unique } from 'drizzle-orm/pg-core'
import { createSelectSchema } from 'drizzle-zod'
import { user } from './auth-schema'

export const matches = pgTable(
  'matches',
  {
    id: integer('id').primaryKey().generatedAlwaysAsIdentity(),
    userId: text('userId')
      .notNull()
      .references(() => user.id, { onDelete: 'cascade' }),
    matchedUserId: text('likedUserId')
      .notNull()
      .references(() => user.id, { onDelete: 'cascade' }),
    matchedAt: timestamp('createdAt').notNull(),
  },
  (t) => [unique().on(t.userId, t.matchedUserId)]
)

export const matchesSelectSchema = createSelectSchema(matches)
export type MatchesSelect = typeof matches.$inferSelect
export type MatchesInsert = typeof matches.$inferInsert
