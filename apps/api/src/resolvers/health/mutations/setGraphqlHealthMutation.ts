import { builder } from '@/builder';

builder.mutationField('setHealth', (t) =>
  t.field({
    type: 'GraphQLHealth',
    resolve: (parent, args, ctx) => {
      return { ok: true };
    },
  })
);
