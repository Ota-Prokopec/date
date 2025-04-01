import { integer, pgTable, text, timestamp, unique } from 'drizzle-orm/pg-core'
import { createSelectSchema } from 'drizzle-zod'
import { user } from './auth-schema'

export const likes = pgTable(
  'likes',
  {
    id: integer('id').primaryKey().generatedAlwaysAsIdentity(),
    userId: text('userId')
      .notNull()
      .references(() => user.id),
    likedUserId: text('likedUserId')
      .notNull()
      .references(() => user.id),
    likedAt: timestamp('createdAt').notNull(),
  },
  (t) => [unique().on(t.userId, t.likedUserId)]
)

export const likesSelectSchema = createSelectSchema(likes)
export type LikesSelect = typeof likes.$inferSelect
export type LikesInsert = typeof likes.$inferInsert
