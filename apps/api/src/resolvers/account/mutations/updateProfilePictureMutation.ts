import { builder } from '@/builder'
import { databaseAccountActions } from '@/lib/account/databaseAccountActions'

builder.mutationField('updateAccountPicture', (t) =>
  t.field({
    type: 'Boolean',
    args: { pictureFile: t.arg({ type: 'File', required: true }) },
    resolve: async (parent, args, ctx) => {
      const user = (await ctx).session?.user
      if (!user || !ctx.session) throw new Error('User not authenticated')

      const { pictureFile } = args

      const res = databaseAccountActions.updateProfilePicture(ctx.session, pictureFile)

      return true
    },
  })
)
