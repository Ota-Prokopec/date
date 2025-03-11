import { builder } from '@/builder'
import type { UserPothosType } from '@/schema/PothosSchemaTypes'

builder.queryField('getUserProfile', (t) =>
  t.field({
    args: { userId: t.arg({ type: 'String', required: false }) },
    type: 'User',
    resolve: async (_parent, args, ctx) => {
      const searchingUserId = args.userId ?? ctx.session?.user.id

      if (!ctx.session?.user.id) throw new Error('User is not authorizated to get user profile')
      if (!searchingUserId) throw new Error('User ID is undefined')

      const userProfileData = await ctx.loaders.users.load(searchingUserId)

      if (!userProfileData) throw new Error('User not found')

      return userProfileData satisfies UserPothosType
    },
  })
)
