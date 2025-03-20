import '@pothos/core'
import { getBuilder } from '@repo/graphql/server'
import { Context } from './context'
import {
  type CoordsScalar,
  type DateScalar,
  type FileScalar,
  type GenderScalar,
  type GraphqlHealthScalar,
  type SocialsScalar,
} from './scalars/ScalarsTypes'
import type {
  CoordsPothosType,
  AccountPothosType,
  UserPothosType,
} from './schema/PothosSchemaTypes'
import type { UpdateAccountArgs } from './resolvers/user'
import type { QueryFieldBuilder, SchemaTypes } from '@pothos/core'
import type { GetUsersProfilesArgs } from './resolvers/user/args/getUsersProfilesArgs'

export type PothosBuilderTypes = {
  Objects: {
    Coords: CoordsPothosType
    Account: AccountPothosType
    User: UserPothosType
  }
  Scalars: {
    Coords: CoordsScalar
    GraphQLHealth: GraphqlHealthScalar
    Gender: GenderScalar
    File: FileScalar
    Date: DateScalar
    Socials: SocialsScalar
  }
  Context: Context
  Args: { UpdateAccountArgs: UpdateAccountArgs; GetUsersProfilesArgs: GetUsersProfilesArgs }
}

export const builder = getBuilder<PothosBuilderTypes>()
export type Builder = typeof builder

export type PothosTValue = Parameters<Builder['queryField']>[1] extends (t: infer TType) => any
  ? TType
  : never
