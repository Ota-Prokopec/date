import { builder } from '@/builder'
import { updateAccountInformation } from '@/lib/account/updateAccount'
import { type TypeCheck } from '@repo/ts-types'
import {
  updateAccountArgsZodSchemaValidator,
  type UpdateAccountArgs,
} from '../args/UpdateAccountArgs'

builder.mutationField('updateAccount', (t) =>
  t.field({
    type: 'Boolean',
    args: { userProfileData: t.arg({ type: 'UpdateAccountArgs' }) },
    resolve: async (_parent, args, ctx) => {
      // * Type-check
      type Check = TypeCheck<typeof args, UpdateAccountArgs>
      //   ^?

      const user = (await ctx).session?.user
      if (!user) throw new Error('User not authenticated')

      await updateAccountInformation(args satisfies UpdateAccountArgs, user.id)

      return true
    },
    validate: updateAccountArgsZodSchemaValidator,
  })
)
