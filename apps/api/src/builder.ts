import '@pothos/core';
import { getBuilder } from '@repo/graphql/server';
import { Context } from './context';
import {
  type CoordsScalar,
  type FileScalar,
  type GenderScalar,
  type GraphqlHealthScalar,
} from './scalars/ScalarsTypes';
import type { CoordsType } from './schema/PothosSchemaTypes';

export const builder = getBuilder<{
  Objects: {
    Coords: CoordsType;
  };
  Scalars: {
    Coords: CoordsScalar;
    GraphQLHealth: GraphqlHealthScalar;
    Gender: GenderScalar;
    File: FileScalar;
  };
  Context: Context;
  Args: {};
}>();
