import { builder } from '@/builder';
import GraphQLUpload from 'graphql-upload/GraphQLUpload.mjs';

builder.scalarType('File', {
  serialize: () => {
    throw new Error('Uploads can only be used as input types');
  },
});
