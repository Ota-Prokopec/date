import { getBuilder } from '@repo/graphql/server'
import { Context } from './context'
import type { UpdateAccountArgs } from './resolvers/account'
import {
  type CoordsScalar,
  type DateScalar,
  type GenderScalar,
  type GraphqlHealthScalar,
  type SocialsScalar,
  type SwipeTypeScalar,
  type UploadScalar,
} from './scalars/ScalarsTypes'
import type {
  AccountPothosType,
  CoordsPothosType,
  SwipePothosType,
  UserPothosType,
} from './schema/PothosSchemaTypes'

export type PothosBuilderTypes = {
  Objects: {
    Coords: CoordsPothosType
    Account: AccountPothosType
    User: UserPothosType
    Swipe: SwipePothosType
  }
  Scalars: {
    Coords: CoordsScalar
    GraphQLHealth: GraphqlHealthScalar
    Gender: GenderScalar
    Upload: UploadScalar
    Date: DateScalar
    Socials: SocialsScalar
    SwipeType: SwipeTypeScalar
  }
  Context: Context
  Args: { UpdateAccountArgs: UpdateAccountArgs }
}

export const builder = getBuilder<PothosBuilderTypes>()
export type Builder = typeof builder

export type PothosTValue = Parameters<Builder['queryField']>[1] extends (t: infer TType) => any
  ? TType
  : never
