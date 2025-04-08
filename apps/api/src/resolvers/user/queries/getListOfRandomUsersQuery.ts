import { builder } from '@/builder'
import { getUsers } from '@/lib/users/getUsers'
import { db, drizzleSchema } from '@repo/db'
import { and, eq, exists, not, sql } from '@repo/db/orm'

builder.queryField('getListOfRandomUsers', (t) =>
  t.field({
    type: ['User'],
    args: { limit: t.arg({ type: 'Int', required: true }) },
    resolve: async (_parent, args, ctx) => {
      const userId = ctx.session?.user.id
      if (!userId) throw new Error('User is not authorizated to get user profile')

      const users = await getUsers(
        (userSchema) => [
          not(eq(userSchema.id, userId)), // Exclude yourself
          not(
            exists(
              db
                .select()
                .from(drizzleSchema.likes)
                .where(
                  and(
                    eq(drizzleSchema.likes.userId, userId),
                    eq(drizzleSchema.likes.likedUserId, userSchema.id)
                  )
                )
            )
          ),
          not(
            exists(
              db
                .select()
                .from(drizzleSchema.matches)
                .where(
                  and(
                    eq(drizzleSchema.matches.userId, userId),
                    eq(drizzleSchema.matches.matchedUserId, userSchema.id)
                  )
                )
            )
          ),
        ],
        {
          limit: args.limit,
          orderBy: sql`Random()`,
        }
      )

      return users
    },
  })
)
