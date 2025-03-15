import { builder } from '@/builder'
import type {
  GetReturnValue,
  PothosQueryType,
  ReturnValueObjectType,
} from '@/lib/pothos/pothosQueryField'
import type { Resolver } from '@pothos/core'
import type { GenericZodObject } from '@repo/ts-types'
import type { GraphQLFieldResolver, GraphQLResolveInfo } from 'graphql'
import { TypeOf, ZodAny, ZodObject, ZodSchema, z, type ZodString } from 'zod'

builder.queryField('test', (t) =>
  t.field({
    type: ['Account'],
    args: { a: t.arg.string() },
    resolve: () => {
      return
    },
  })
)

const zodSchema = z.object({ a: z.string() })

builder.queryField('test', (t) =>
  t.field({
    type: 'String',
    args: { a: t.arg.string() },
    resolve: (...params) =>
      resolver(
        {
          parent: params[0],
          args: params[1],
          ctx: params[2],
          info: params[3],
          zodSchema,
          type: [''],
        },
        (parent, args, ctx, info) => {
          return ''
        }
      ),
  })
)

type T = GetReturnValue<'Account'>

const resolver = <
  TParent,
  TArgs extends Record<string, unknown>,
  Tctx,
  Tinfo extends GraphQLResolveInfo,
  TZodSchema extends ZodObject<{ [Key in keyof TArgs]: ZodString }>,
  TType extends keyof ReturnValueObjectType,
  TReturnValue extends GetReturnValue<TType>,
>(
  {
    parent,
    args,
    ctx,
    info,
    zodSchema,
    type,
  }: { parent: TParent; args: TArgs; ctx: Tctx; info: Tinfo; zodSchema: TZodSchema; type: TType },

  callback: Resolver<TParent, TypeOf<TZodSchema>, Tctx, TReturnValue>
) => {
  const checkedArgs = zodSchema.parse(args)
  return callback(parent, checkedArgs, ctx, info)
}
