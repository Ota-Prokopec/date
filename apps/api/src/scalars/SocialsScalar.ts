import { builder } from '@/builder'
import { socialsDataZodSchema } from '@repo/ts-types'

builder.scalarType('Socials', {
  serialize: (outputValue) => {
    return outputValue
  },
  parseValue: (inputValue) => {
    return socialsDataZodSchema.parse(inputValue)
  },
})
