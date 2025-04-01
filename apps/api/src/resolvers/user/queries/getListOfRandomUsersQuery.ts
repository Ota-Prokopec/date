import { builder } from '@/builder'
import { getUsers } from '@/lib/users/getUsers'
import { eq, not, sql } from '@repo/db/orm'

builder.queryField('getListOfRandomUsers', (t) =>
  t.field({
    type: ['User'],
    args: { limit: t.arg({ type: 'Int', required: true }) },
    resolve: async (_parent, args, ctx) => {
      const userId = ctx.session?.user.id
      if (!userId) throw new Error('User is not authorizated to get user profile')

      const users = await getUsers((userSchema) => [not(eq(userSchema.id, userId))], {
        limit: args.limit,
        orderBy: sql`Random()`,
      })

      return users
    },
  })
)
