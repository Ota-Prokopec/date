import { builder, type Builder, type PothosBuilderTypes } from '@/builder'
import type SchemaBuilder from '@pothos/core'
import type { FieldRef, MaybePromise, SchemaTypes, TypeParam } from '@pothos/core'
import type { GraphQLResolveInfo } from 'graphql'


export const pothosQueryField = <ReturnType extends PothosQueryFieldGendericReturnType>(
  builder: Builder,
  type: Parameters<Builder["queryField"]>
  resolve: PothosTFieldParamsResolver
) => {
  builder.queryField(name, (t) =>
    t.field({
      ...fieldOptions,
      resolve: (parent, args, ctx, info) => resolve(parent, args, ctx, info),
    })
  )
}
