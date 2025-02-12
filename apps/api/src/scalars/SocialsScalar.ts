import { builder } from '@/builder';
import { coordsZodSchema, socialsZodSchema } from '@repo/ts-types';

builder.scalarType('Socials', {
  serialize: (outputValue) => {
    return outputValue;
  },
  parseValue: (inputValue) => {
    return socialsZodSchema.parse(inputValue);
  },
});
