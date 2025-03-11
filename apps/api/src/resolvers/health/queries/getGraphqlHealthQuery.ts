import { builder } from '@/builder'

builder.queryField('getHealth', (t) =>
  t.field({
    type: 'GraphQLHealth',
    resolve: (parent, args, ctx) => {
      return { ok: true }
    },
  })
)
