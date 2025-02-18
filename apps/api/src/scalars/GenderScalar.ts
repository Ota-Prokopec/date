import { builder } from '@/builder'
import { genderZodSchema } from '@repo/ts-types'

builder.scalarType('Gender', {
  serialize: (value: unknown) => {
    return value
  },

  parseValue: (value: unknown) => {
    console.log({ value })

    return genderZodSchema.parse(value)
  },
})
