import { builder } from '@/builder'
import { updateAccountInformation } from '@/lib/account/updateAccount'
import type { UpdateAccountArgs } from '../args/UpdateAccountArgs'

builder.mutationField('updateAccount', (t) =>
  t.field({
    type: 'Boolean',
    args: { userProfileData: t.arg({ type: 'UpdateAccountArgs' }) },
    resolve: async (_parent, args, ctx) => {
      const user = (await ctx).session?.user
      if (!user) throw new Error('User not authenticated')

      args.userProfileData.socials satisfies UpdateAccountArgs['socials']

      await updateAccountInformation(args.userProfileData satisfies UpdateAccountArgs, user.id)

      return true
    },
  })
)
