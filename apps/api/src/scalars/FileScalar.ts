import { builder } from '@/builder'

builder.scalarType('File', {
  serialize: () => {
    throw new Error('Uploads can only be used as input types')
  },
})
