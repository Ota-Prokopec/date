import { builder } from '@/builder'
import { updateAccountInformation } from '@/lib/account/updateAccount'
import type { UpdateAccountArgs } from '../args/UpdateAccountArgs'
import type { Equal } from '@repo/ts-types'

builder.mutationField('updateAccount', (t) =>
  t.field({
    type: 'Boolean',
    args: { userProfileData: t.arg({ type: 'UpdateAccountArgs' }) },
    resolve: async (_parent, args, ctx) => {
      const { userProfileData } = args
      // * Type-check
      type TypeCheck = Equal<typeof userProfileData, UpdateAccountArgs>
      //   ^?

      console.log(userProfileData)

      const user = (await ctx).session?.user
      if (!user) throw new Error('User not authenticated')

      await updateAccountInformation(userProfileData satisfies UpdateAccountArgs, user.id)

      return true
    },
  })
)
