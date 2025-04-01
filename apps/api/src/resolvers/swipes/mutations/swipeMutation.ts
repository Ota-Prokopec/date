import { builder } from '@/builder'
import { updateAccountInformation } from '@/lib/account/updateAccount'
import { type TypeCheck } from '@repo/ts-types'

builder.mutationField('swipe', (t) =>
  t.field({
    type: 'Boolean',
    args: { userId: t.arg.string(), state: t.arg({ type: 'Swipe' }) },
    resolve: async (_parent, args, ctx) => {},
  })
)
