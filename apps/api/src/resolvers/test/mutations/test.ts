import { builder } from '@/builder'

builder.mutationField('test', (t) =>
  t.field({
    type: 'Boolean',
    args: { gender: t.arg({ type: 'Gender' }) },
    resolve: async (parent, args, ctx) => {
      console.log(args)

      return true
    },
  })
)
