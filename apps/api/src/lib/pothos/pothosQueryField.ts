import { builder, type Builder, type PothosBuilderTypes, type PothosTValue } from '@/builder'
import type { FieldOptionsFromKind, GenericFieldRef, SchemaTypes } from '@pothos/core'

export type PothosQueryFieldGendericReturnType = GenericFieldRef<unknown>
export type PothosTField = PothosTValue['field']
export type PothosTFieldParams = Parameters<PothosTField>[0]
export type PothosTFieldParamsResolver = Parameters<PothosTField>[0]['resolve']
export type PothosTFieldParamsResolverParametrs = PothosTFieldParamsResolver extends (
  parent: infer TParent,
  args: infer TArgs,
  ctx: infer TCtx,
  info: infer TInfo
) => any
  ? { Parent: TParent; Args: TArgs; Ctx: TCtx; Info: TInfo }
  : never

type PothosQueryType = PothosTFieldParams['type']

type ObjectType = PothosBuilderTypes['Objects'] & PothosBuilderTypes['Scalars']
type GetReturnValue<TQueryType extends keyof ObjectType> = ObjectType[TQueryType]

type GetResolver<
  ReturnValue extends GetReturnValue<PothosQueryType & keyof ObjectType>,
  TFieldOptions extends Omit<PothosTFieldParams, 'resolve' | 'type'>,
> = (
  parent: PothosTFieldParamsResolverParametrs['Parent'],
  args: TFieldOptions['args']
) => ReturnValue

export const pothosQueryField = <
  TQueryType extends PothosQueryType & keyof ObjectType,
  TReturnValue extends GetReturnValue<TQueryType>,
  TFieldOptions extends Omit<PothosTFieldParams, 'resolve' | 'type'>,
>(
  builder: Builder,
  type: TQueryType,
  fieldOptions: TFieldOptions,
  resolve: GetResolver<TReturnValue, TFieldOptions>
) => {}
