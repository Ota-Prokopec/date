import { builder, type Builder, type PothosBuilderTypes } from '@/builder'
import type SchemaBuilder from '@pothos/core'
import type { FieldRef, MaybePromise, SchemaTypes, TypeParam } from '@pothos/core'
import type { GraphQLResolveInfo } from 'graphql'
import { z } from 'zod'

const zodSchema = z.object({
  id: z.number().min(1).max(5),
})

builder.mutationField('test', (t) =>
  t.field({
    args: { id: t.arg.int() },
    type: 'String',
    resolve: (parent, args) => {
      return `${args.id}`
    },
    validate: { schema: zodSchema },
  })
)
