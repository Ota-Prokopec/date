import { builder } from '@/builder.ts'
import { PothosError } from '@pothos/core'

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
      if (!ctx.session?.user) throw new PothosError('User is not authorizated')
      console.log(ctx.session?.user)

      return await new Promise<ReturnValue>((res) =>
        setTimeout(() => res({ date: new Date(Date.now()) }), 1000)
      )
    },
  })
)
