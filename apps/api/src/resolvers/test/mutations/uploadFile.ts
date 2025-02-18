import { builder } from '@/builder'

builder.mutationField('uploadFile', (t) =>
  t.field({
    type: 'Boolean',
    args: { file: t.arg({ type: 'File' }) },
    resolve: async (parent, args, ctx) => {
      console.log(args.file)

      return true
    },
  })
)
