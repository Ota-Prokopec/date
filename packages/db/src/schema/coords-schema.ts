import { doublePrecision, integer, pgTable, text, unique } from 'drizzle-orm/pg-core'
import { user } from './auth-schema'

export const coords = pgTable(
  'coords',
  {
    id: integer('id').primaryKey().generatedAlwaysAsIdentity(),
    userId: text('userId')
      .notNull()
      .references(() => user.id, { onDelete: 'cascade' }),
    latitude: doublePrecision().notNull(),
    longitude: doublePrecision().notNull(),
  },
  (t) => [unique().on(t.userId)]
)
