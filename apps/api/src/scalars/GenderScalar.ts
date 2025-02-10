import { builder } from '@/builder';
import { coordsZodSchema, genderZodSchema, graphqlHealthZodSchema } from '@repo/ts-types';

builder.scalarType('Gender', {
  serialize: (value: unknown) => {
    return value;
  },

  parseValue: (value: unknown) => {
    return genderZodSchema.parse(value);
  },
});
