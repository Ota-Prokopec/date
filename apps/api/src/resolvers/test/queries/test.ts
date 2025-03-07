import { builder } from '@/builder.ts'

export const TestRef = builder.objectRef<{ id: string; res: number }>('Test').implement({
  fields: (t) => ({
    id: t.exposeString('id'),
    res: t.exposeInt('res'),
  }),
})

type ReturnValue = { date: Date }

const returnValue = builder.objectRef<ReturnValue>('T').implement({
  fields: (t) => ({
    date: t.expose('date', { type: 'Date' }),
  }),
})

builder.queryField('test', (t) =>
  t.field({
    type: returnValue,
    args: {},
    resolve: async (parent, args, ctx) => {
      return { date: new Date(Date.now()) }
    },
  })
)
