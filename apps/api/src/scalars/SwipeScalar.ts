import { builder } from '@/builder'
import { swipeTypeZodSchema } from '@repo/ts-types'

builder.scalarType('Swipe', {
  serialize: (value: unknown) => {
    return swipeTypeZodSchema.parse(value)
  },

  parseValue: (value: unknown) => {
    return swipeTypeZodSchema.parse(value)
  },
})
