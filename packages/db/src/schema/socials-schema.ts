import { integer, pgEnum, pgTable, text } from 'drizzle-orm/pg-core';
import { user } from './auth-schema';
import { createSelectSchema } from 'drizzle-zod';

export const socialsTypeEnum = pgEnum('socialsType', ['instagram']);

export const socials = pgTable('socials', {
  id: integer('id').primaryKey().generatedAlwaysAsIdentity(),
  userId: text('userId')
    .notNull()
    .references(() => user.id),
  type: socialsTypeEnum('type'),
  link: text('link'),
  platformProfileId: text('platformProfileId'),
});

export const socialsSelectSchema = createSelectSchema(user);
export type SocialsSelect = typeof user.$inferSelect;
export type SocialsInsert = typeof user.$inferInsert;
