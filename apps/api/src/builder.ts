import '@pothos/core';
import { getBuilder } from '@repo/graphql/server';
import { Context } from './context';
import {
  type CoordsScalar,
  type DateScalar,
  type FileScalar,
  type GenderScalar,
  type GraphqlHealthScalar,
  type SocialsScalar,
} from './scalars/ScalarsTypes';
import type { CoordsPothosType, AccountPothosType } from './schema/PothosSchemaTypes';
import type { UpdateAccountArgs } from './resolvers/user';

export const builder = getBuilder<{
  Objects: {
    Coords: CoordsPothosType;
    Account: AccountPothosType;
  };
  Scalars: {
    Coords: CoordsScalar;
    GraphQLHealth: GraphqlHealthScalar;
    Gender: GenderScalar;
    File: FileScalar;
    Date: DateScalar;
    Socials: SocialsScalar;
  };
  Context: Context;
  Args: { UpdateAccountArgs: UpdateAccountArgs };
}>();
