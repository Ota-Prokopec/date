import { getBuilder } from '@repo/graphql/server'
import { Context } from './context'
import type { UpdateAccountArgs } from './resolvers/user'
import type { GetUsersProfilesArgs } from './resolvers/user/args/getUsersProfilesArgs'
import {
  type CoordsScalar,
  type DateScalar,
  type GenderScalar,
  type GraphqlHealthScalar,
  type SocialsScalar,
  type UploadScalar,
} from './scalars/ScalarsTypes'
import type {
  AccountPothosType,
  CoordsPothosType,
  UserPothosType,
} from './schema/PothosSchemaTypes'

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
    Upload: UploadScalar
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
