import '@pothos/core';
import { getBuilder } from '@repo/graphql/server';
import { Context } from './context';
import type { UpdateUserProfileArgs } from './resolvers/user';
import {
  type CoordsScalar,
  type FileScalar,
  type GenderScalar,
  type GraphqlHealthScalar,
} from './scalars/ScalarsTypes';
import type {
  AccountType,
  CoordsType,
  UpdateUserProfileType,
  UserProfileType,
} from './schema/PothosSchemaTypes';

export const builder = getBuilder<{
  Objects: {
    Coords: CoordsType;
    UserProfile: UserProfileType;
    Account: AccountType;
    UpdateUserProfile: UpdateUserProfileType;
  };
  Scalars: {
    Coords: CoordsScalar;
    GraphQLHealth: GraphqlHealthScalar;
    Gender: GenderScalar;
    File: FileScalar;
  };
  Context: Context;

  Args: { UpdateUserProfileArgs: UpdateUserProfileArgs };
}>();
