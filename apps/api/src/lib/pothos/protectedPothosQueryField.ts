import { builder } from '@/builder'
import { PothosError, Resolver, type QueryFieldBuilder } from '@pothos/core'
import {
  pothosQueryField,
  type PothosQueryFieldGendericReturnType,
  type PothosTFieldParams,
  type PothosTFieldParamsResolverWithSessionExisting,
} from './pothosQueryField'
import type { AccountData } from '@repo/ts-types'

export const ProtectedPothosQueryField = <ReturnType extends PothosQueryFieldGendericReturnType>(
  name: string,
  fieldOptions: Omit<PothosTFieldParams, 'resolve'>,
  resolve: Resolver<>
) => {
  pothosQueryField(builder, name, fieldOptions, (parent, args, ctx, info) => {
    const session = ctx.session

    if (!session?.user.id) throw new PothosError('User is not authorizated to perform this action')

    return resolve(parent, args, { ...ctx, session }, info)
  })
}

ProtectedPothosQueryField('', { type: 'Account' }, (_a, _c, _ctx) => {
  return null
})
