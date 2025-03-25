import { builder } from '@/builder'

builder.mutationField('test', (t) =>
  t.field({
    args: { file: t.arg({ type: 'Upload' }) },
    type: 'String',
    resolve: (parent, args) => {
      console.log(args.file.type)

      return 'fad'
    },
  })
)
