import { z, TypeOf } from 'zod'

export const swipeTypeZodSchema = z.union([z.literal('like'), z.literal('dislike')])

export type SwipeType = TypeOf<typeof swipeTypeZodSchema>

export type SwipeResponse = {
  isMatch: boolean
}
