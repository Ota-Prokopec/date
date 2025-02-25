import { builder, type Builder, type PothosTValue } from '@/builder'
import type { GenericFieldRef } from '@pothos/core'

export type PothosQueryFieldGendericReturnType = GenericFieldRef<unknown>
export type PothosTFieldType = PothosTValue['field']
export type PothosTFieldParams = Parameters<PothosTFieldType>[0]
export type PothosTFieldParamsResolver = Parameters<PothosTFieldType>[0]['resolve']
export type PothosTFieldParamsResolverParametrs =
  Parameters<PothosTFieldType>[0]['resolve'] extends (
    parent: infer TParent,
    args: infer TArgs,
    ctx: infer TCtx,
    info: infer TInfo
  ) => any
    ? { Parent: TParent; Args: TArgs; Ctx: TCtx; Info: TInfo }
    : never
export type PothosTFieldParamsResolverWithSessionExisting<
  TReturnType extends PothosQueryFieldGendericReturnType,
> = (
  parent: PothosTFieldParamsResolverParametrs['Parent'],
  args: PothosTFieldParamsResolverParametrs['Args'],
  ctx: Omit<PothosTFieldParamsResolverParametrs['Ctx'], 'session'> & {
    session: NonNullable<PothosTFieldParamsResolverParametrs['Ctx']['session']>
  },
  info: PothosTFieldParamsResolverParametrs['Info']
) => ReturnType<Parameters<PothosTFieldType>[0]['resolve']>

export const pothosQueryField = <ReturnType extends PothosQueryFieldGendericReturnType>(
  builder: Builder,
  name: string,
  fieldOptions: Omit<PothosTFieldParams, 'resolve'>,
  resolve: PothosTFieldParamsResolver
) => {
  builder.queryField(name, (t) =>
    t.field({
      ...fieldOptions,
      resolve: (parent, args, ctx, info) => resolve(parent, args, ctx, info),
    })
  )
}

builder.queryField('', (t) =>
  t.field({
    type: 'Account',
    resolve: () => {
      return null as unknown as MaybePromise<AccountData>
    },
  })
)
