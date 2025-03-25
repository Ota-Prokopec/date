import { builder } from '@/builder'

builder.scalarType('Upload', {
  serialize: () => {
    throw new Error('Uploads can only be used as input types')
  },
})
