import { builder } from '@/builder'
import { accountActions } from '@/lib/account/accountActions'

builder.mutationField('updateAccountPicture', (t) =>
  t.field({
    type: 'Boolean',
    args: { pictureFile: t.arg({ type: 'Upload', required: true }) },
    resolve: async (parent, args, ctx) => {
      const user = (await ctx).session?.user
      if (!user || !ctx.session) throw new Error('User not authenticated')

      const { pictureFile } = args

      const res = accountActions.updateProfilePicture(ctx.session, pictureFile)

      return true
    },
  })
)
