import { builder } from '@/builder';
import { coordsZodSchema, graphqlHealthZodSchema } from '@repo/ts-types';

builder.scalarType('GraphQLHealth', {
  serialize: (value: unknown) => {
    return value;
  },

  parseValue: (value: unknown) => {
    return graphqlHealthZodSchema.parse(value);
  },
});
