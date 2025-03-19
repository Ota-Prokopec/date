import { builder } from '@/builder'
import { databaseAccountActions } from '@/lib/account/databaseAccountActions'

builder.queryField('getAccountProfile', (t) =>
  t.field({
    type: 'Account',
    resolve: async (_parent, args, ctx) => {
      const userId = ctx.session?.user.id

      if (!userId || !ctx.session) throw new Error('User is not authorizated to get user profile')

      const res = await databaseAccountActions.getAccount(ctx.session)

      return res
    },
  })
)
