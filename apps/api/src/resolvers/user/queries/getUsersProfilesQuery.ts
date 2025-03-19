import { builder } from '@/builder'
import type { UserPothosType } from '@/schema/PothosSchemaTypes'
import { db } from '@repo/db'

builder.queryField('getUsersProfiles', (t) =>
  t.field({
    args: {filters: },
    type: 'User',
    resolve: async (_parent, args, ctx) => {
      const currentUserId = ctx.session?.user.id
      if (!currentUserId) throw new Error('User is not authorizated to get user profile')
      const currentUserData = await db.query.user.findFirst({
        where: (userTableSchema, { eq }) => eq(userTableSchema.id, currentUserId),
      })

      const filters = []

      if (!currentUserData) throw new Error('Current users data was not found, user cant exist')

      const users = ctx.loaders.users.loadMany()
    },
  })
)
