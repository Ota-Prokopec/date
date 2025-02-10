import { builder } from '@/builder';
import { coordsZodSchema } from '@repo/ts-types';

builder.scalarType('Coords', {
  serialize: (value: unknown) => {
    return value;
  },

  parseValue: (value: unknown) => {
    return coordsZodSchema.parse(value);
  },
});
